<template>
  <Session title="🏋️ Dos, épaules et triceps" :exercises="exercises" />
</template>
<script setup lang="ts">
import Session from '@/components/Session.vue'

const exercises = [
  { title: 'Tractions', repetitions: 10, series: 5, restDuration: 90 },
  { title: 'Rowing horizontal', repetitions: 10, series: 4 },
  { title: 'Shrug haltères', repetitions: 12, series: 3 },
  { title: 'Développé haltère', repetitions: 12, series: 4 },
  { title: 'Élévations latérales', repetitions: 10, series: 3 },
  { title: 'Oiseau banc incliné', repetitions: 10, series: 3 },
  { title: 'Barre front', repetitions: 10, series: 4 },
  { title: 'Extensions au-dessus de la tête', repetitions: 10, series: 3 },
]
</script>
