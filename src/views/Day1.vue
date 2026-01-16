<template>
  <Session title="💪 Pectoraux, biceps et Abdominaux" :exercises="exercises" />
</template>

<script lang="ts" setup>
import { Exercise } from '@/components/useExercise'
import Session from '@/components/Session.vue'

import Bench1 from '@/images/bench1.1.svg'
import Bench2 from '@/images/bench2.1.svg'
import Curl from '@/images/curl1.1.svg'
import Curl3 from '@/images/curl2.1.svg'

const exercises: Array<Exercise> = [
  { title: 'Développé couché', repetitions: 10, series: 5, image: Bench1 },
  { title: 'Développé incliné', repetitions: 8, series: 3, image: Bench2 },
  { title: 'Écarté couché', repetitions: 12, series: 3 },
  { title: 'Pull over', repetitions: 20, series: 2 },
  { title: 'Curl barre', repetitions: 10, series: 4, image: Curl },
  { title: 'Curl haltères', repetitions: 8, series: 4 },
  { title: 'Curl concentre', repetitions: 12, series: 3, image: Curl3 },
  { title: 'Crunch', repetitions: 20, series: 4, restDuration: 30 },
  { title: 'Russian twist', repetitions: 30, series: 1, restDuration: 30 },
]
</script>
