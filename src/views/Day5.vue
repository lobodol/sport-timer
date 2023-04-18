<template>
  <Session title="🏋️ Dos, épaules et triceps" :exercises="exercises" />
</template>
<script setup lang="ts">
import Session from '@/components/Session.vue'

import Traction from '@/images/traction1.svg'
import Rowing from '@/images/rowing2.svg'
import LateralRaise from '@/images/lateral_raise2.svg'
import Forehead from '@/images/forehead2.svg'
import UpRaise from '@/images/up_raise.svg'


const exercises = [
  { title: 'Tractions', repetitions: 10, series: 5, restDuration: 90, image: Traction },
  { title: 'Rowing horizontal', repetitions: 10, series: 4, image: Rowing },
  { title: 'Shrug haltères', repetitions: 12, series: 3 },
  { title: 'Développé haltère', repetitions: 12, series: 4 },
  { title: 'Élévations latérales', repetitions: 10, series: 3, image: LateralRaise },
  { title: 'Oiseau banc incliné', repetitions: 10, series: 3 },
  { title: 'Barre front', repetitions: 10, series: 4, image: Forehead },
  { title: 'Extensions au-dessus de la tête', repetitions: 10, series: 3, image: UpRaise },
]
</script>
