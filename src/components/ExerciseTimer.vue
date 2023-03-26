<template>
  <label for="restDuration">Temps de récupération</label>
  <select v-model="restDuration" :disabled="running">
    <option v-for="option in restDurations" :key="option" :value="option">
      {{ option }}&nbsp;sec
    </option>
  </select>

  <Timer
    v-model="running"
    :duration="restDuration"
    class="Exercise__Timer"
    @ended="timeOut"
  />

  <Series class="Exercise__Series" :count="series" :objectif="props.series" />

  <p v-if="seriesReached" class="Exercise__EndMessage">Bravo 👏 !</p>

  <div class="Controls">
    <!-- Start timer -->
    <button v-if="!running && !seriesReached" @click="rest">Repos 🧘</button>
    <!-- Stop timer -->
    <button v-else @click="cancel">Annuler</button>
    <!-- Stop timer and reset series count -->
    <button v-if="series" @click="reset()">Reset</button>
  </div>
</template>
<script lang="ts" setup>
import Timer from '@/components/Timer.vue'
import { computed, ref } from 'vue'
import Series from '@/components/Series.vue'

const emits = defineEmits<{
  /**
   * Dispatched when the last serie of exercises is reached
   */
  (e: 'series:reached', seriesCount: number): void

  /**
   * Dispatched when the rest time of the last serie is ended
   */
  (e: 'ended', seriesCount: number): void
}>()

const props = withDefaults(
  defineProps<{
    restDuration?: number
    series?: number
  }>(),
  {
    restDuration: 60,
  }
)
const series = ref<number>(0)
const running = ref<boolean>(false)
const restDurations = [30, 45, 60]
const restDuration = ref<number>(props.restDuration)

const seriesReached = computed<boolean>(() => {
  let isReached = props.series !== undefined && series.value >= props.series

  if (isReached) {
    emits('series:reached', series.value)
  }

  return isReached
})

function timeOut(): void {
  if (seriesReached.value) emits('ended', series.value)
}

function cancel(): void {
  running.value = false
  series.value--
}

function rest(): void {
  running.value = true
  series.value++
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
.Exercise {
  &__EndMessage {
    font-size: 2em;
    text-align: center;
  }
}
</style>
