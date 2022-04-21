<template>
  <h1>Squat statique contre un mur</h1>

  <AlternateTimer
    v-model="running"
    :duration1="exerciceDuration"
    :duration2="restDuration"
    start-message="Prêt ?"
    end-message="Bravo 👏 !"
    message1="Go 💪 !"
    message2="Repos 🧘"
    :iterations="props.series"
    class="Chair__Timer"
    @update:iterations="(i) => (series = i)"
  />

  <Series :count="series"/>

  <div class="Controls">
    <!-- Start timer -->
    <button v-if="!running" @click="running = true">Start</button>
    <!-- Stop timer -->
    <button v-else @click="running = false">Stop</button>
    <!-- Reset timer -->
    <button v-if="series" @click="reset()">Reset</button>
  </div>
</template>
<script lang="ts" setup>
import AlternateTimer from '@/components/AlternateTimer.vue'
import { ref } from 'vue'
import Series from '@/components/Series.vue'

const props = defineProps<{
  series: number | undefined
}>()
const running = ref<boolean>(false)
const exerciceDuration = 45
const restDuration = 30
const series = ref<number>(0)

/**
 * Stop timer & reset series count
 */
function reset(): void {
  running.value = false
  series.value = 0
}
</script>

<style lang="scss" scoped>
.Chair {
  &__Message {
    font-size: 2em;
    text-align: center;
    animation: appearIn 500ms ease-in-out forwards;
  }
}

// Animation for success message
@keyframes appearIn {
  from {
    opacity: 0;
    transform: scale(2);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
