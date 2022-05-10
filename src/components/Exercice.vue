<template>
  <Timer
    v-model="running"
    :duration="props.restDuration"
    class="Exercice__Timer"
    @ended="series++"
  />

  <Series class="Exercice__Series" :count="series" :objectif="props.series" />

  <p v-if="seriesReached()" class="Exercice__EndMessage">Bravo 👏 !</p>

  <div class="Controls">
    <!-- Start timer -->
    <button v-if="!running && !seriesReached()" @click="running = true">
      Repos 🧘
    </button>
    <!-- Stop timer -->
    <button v-else @click="running = false">Annuler</button>
    <!-- Stop timer and reset series count -->
    <button v-if="series" @click="reset()">Reset</button>
  </div>
</template>
<script lang="ts" setup>
import Timer from '@/components/Timer.vue'
import { ref } from 'vue'
import Series from '@/components/Series.vue'

const props = withDefaults(
  defineProps<{
    restDuration?: number
    series?: number
  }>(),
  {
    restDuration: 30,
  }
)
const series = ref<number>(0)
const running = ref<boolean>(false)

function seriesReached(): boolean {
  return props.series !== undefined && series.value === props.series
}

/**
 * Stop timer and reset series count
 */
function reset(): void {
  series.value = 0
  running.value = false
}
</script>

<style lang="scss" scoped>
.Exercice {
  &__EndMessage {
    font-size: 2em;
    text-align: center;
  }
}
</style>
