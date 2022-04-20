<template>
  <Timer :duration="duration" @ended="rotateDurations()" v-model="running"/>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
import Timer from "@/components/Timer.vue"

const props = defineProps<{
  /**
   * Duration 1 in seconds
   */
  duration1: number,

  /**
   * Duration 2 in seconds
   */
  duration2: number,

  /**
   * Infinite alternance if undefined
   */
  iterations: number|undefined,

  modelValue: boolean,
}>()

let iterationCount = 0
const emits = defineEmits<{
  (e: 'update:iterations', value: number): void
  (e: 'update:modelValue', value: boolean): void
}>()

const duration = ref<number>(props.duration1)

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

  if (iterationsReached()) return

  duration.value = (duration.value === props.duration1) ? props.duration2 : props.duration1

  running.value = true
}
</script>