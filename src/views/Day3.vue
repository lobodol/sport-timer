<template>
  <Session title="🦵 Jambes et fessiers" :exercises="exercises" />
</template>

<script lang="ts" setup>
import { Exercise } from '@/components/useExercise'
import Session from '@/components/Session.vue'

const exercises: Array<Exercise> = [
  { title: 'Goblet squat haltère', repetitions: 12, series: 6, restDuration: 90 },
  { title: 'Soulevé de terre haltères', repetitions: 8, series: 4 },
  { title: 'Fentes marchées haltères (par jambe)', repetitions: 10, series: 3 },
  { title: 'Hip thrust haltère', repetitions: 10, series: 3 },
  { title: 'Mollets debout haltères', repetitions: 15, series: 4 },
  { title: 'Gainage', duration: 45, series: 3 },
]
</script>
