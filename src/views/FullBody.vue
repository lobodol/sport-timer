<template>
  <Session title="🏃 Full-body" :exercises="exercises" />
</template>

<script lang="ts" setup>
import { Exercise } from '@/components/useExercise'
import Session from '@/components/Session.vue'
import Traction from '@/images/traction2.svg'
import Bench1 from '@/images/bench1.1.svg'
import Rowing from '@/images/rowing2.svg'

const exercises: Array<Exercise> = [
  { title: 'Goblet squat haltère', repetitions: 10, series: 4, restDuration: 90 },
  { title: 'Développé couché haltères', repetitions: 8, series: 4, restDuration: 90, image: Bench1 },
  { title: 'Rowing horizontal', repetitions: 10, series: 4, restDuration: 90, image: Rowing },
  { title: 'Hip thrust haltère', repetitions: 10, series: 3, restDuration: 90 },
  { title: 'Développé haltères épaules', repetitions: 10, series: 3, restDuration: 90 },
  { title: 'Tractions', repetitions: 8, series: 3, restDuration: 90, image:  Traction },
  { title: 'Crunch', repetitions: 20, series: 3, restDuration: 30 },
  { title: 'Gainage', duration: 45, series: 3, restDuration: 30 },
]
</script>
