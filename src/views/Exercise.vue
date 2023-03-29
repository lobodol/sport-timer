<template>
  <h2>{{ props.title }}</h2>
  <h3>{{ props.repetitions }} répétitions 🔁</h3>

  <ExerciseTimer
    :rest-duration="5"
    :series="props.series"
    @ended="() => emits('objectif:reached')"
  />
</template>

<script lang="ts" setup>
import ExerciseTimer from '@/components/ExerciseTimer.vue'

const emits = defineEmits<{
  (e: 'objectif:reached'): void
}>()

const props = defineProps<{
  title: string
  repetitions: number
  series: number
  restDuration?: number
}>()
</script>
