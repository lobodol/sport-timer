<template>
  <Timer v-model="running" :duration="duration" @ended="rotateDurations()" />

  <p v-if="message" class="Message">{{ message }}</p>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Timer from '@/components/Timer.vue'

const props = defineProps<{
  /**
   * Duration 1 in seconds
   */
  duration1: number

  /**
   * Duration 2 in seconds
   */
  duration2: number

  /**
   * Message displayed when timer is not started yet
   */
  startMessage: string

  /**
   * Message displayed when iterations count is defined and reached
   */
  endMessage?: string

  /**
   * Message displayed during duration1 countdown
   */
  message1: string

  /**
   * Message displayed during duration2 countdown
   */
  message2: string

  /**
   * Infinite alternance if undefined
   */
  iterations?: number

  modelValue: boolean
}>()

let iterationCount = 0
const emits = defineEmits<{
  (e: 'update:iterations', value: number): void
  (e: 'update:modelValue', value: boolean): void
}>()

const duration = ref<number>(props.duration1)

/**
 * Message displayed to user
 */
const message = computed(() => {
  if (iterationsReached()) return props.endMessage
  else if (!running.value) return props.startMessage
  else if (duration.value === props.duration2) return props.message2

  return props.message1
})

const running = computed({
  get: (): boolean => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})

/**
 * Return whether iterations count is reached
 */
function iterationsReached(): boolean {
  return props.iterations !== undefined && iterationCount >= props.iterations
}

function rotateDurations(): void {
  if (duration.value === props.duration2) {
    iterationCount++
    emits('update:iterations', iterationCount)
  }

  // Stop timer if iterations count is reached
  if (iterationsReached()) return

  duration.value =
    duration.value === props.duration1 ? props.duration2 : props.duration1

  running.value = true
}
</script>

<style lang="scss" scoped>
.Message {
  font-size: 2em;
  text-align: center;
}
</style>
