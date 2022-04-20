<template>
  <div class="Timer">
    <svg viewBox="0 0 104 104" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50%"
        cy="50%"
        r="50"
        fill="none"
        stroke="none"
        stroke-width="1px"
        class="Timer__Circle"
        :style="`stroke-dashoffset: ${strokeOffset}`"
      />
      <text x="50%" y="50%" text-anchor="middle" dy=".3em">
        {{ formatDuration(countDown) }}
      </text>
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref, watchEffect } from 'vue'
import { beep } from "@/Audio"

const props = withDefaults(defineProps<{
  /**
   * Countdown duration in seconds
   */
  duration: number
  modelValue: boolean
}>(), {
  duration: 30
})

const running = computed({
  get: (): boolean => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})

const emits = defineEmits<{
  /**
   * Emitted when count down is over
   */
  (e: 'ended'): void
  (e: 'update:modelValue', value: boolean): void
}>()

const countDown = ref<number>(props.duration)
const strokeOffset = computed((): number => {
  return ((countDown.value - props.duration) / props.duration) * 314
})
let timer: number|null = null

/**
 * Format given duration into a string like 00:30
 */
function formatDuration(duration: number): string {
  return '00:' + duration.toString().padStart(2, '0')
}

/**
 * Start countdown
 */
function start(): void {
  if (timer !== null) {
    clearInterval(timer)
  }

  timer = setInterval(() => {
    countDown.value--

    if (countDown.value < 4 && countDown.value > 0) {
      beep(400)
    } else if (countDown.value === 0) {
      beep(500)
      window.navigator.vibrate([200, 30, 200, 30, 200])
      running.value = false

      emits('ended')
    }
  }, 1000)
}

/**
 * Reset timer
 */
function reset() {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }

  // Reset countdown
  countDown.value = props.duration
}

watchEffect(() => {
  countDown.value = props.duration

  running.value ? start() : reset()
})
</script>

<style lang="scss" scoped>
.Timer {
  font-weight: 100;
  font-size: 2em;
  text-align: center;

  &__Circle {
    fill: none;
    stroke: var(--main-color);
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 314px;
    stroke-dashoffset: 0;

  }
}
</style>
