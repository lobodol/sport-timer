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

  modelValue: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const duration = ref<number>(props.duration1)

const running = computed({
  get: (): boolean => props.modelValue,
  set: (value: boolean) => emits('update:modelValue', value),
})

function rotateDurations(): void {
  duration.value = (duration.value === props.duration1) ? props.duration2 : props.duration1

  running.value = true
}
</script>