<template>
  <div class="Exercise__Header">
    <span class="Exercise__HeaderTitle">{{ props.title }}</span>
    <span v-if="props.repetitions" class="Exercise__HeaderRepetitions"
      >{{ props.repetitions }} répétitions 🔁</span
    >
  </div>

  <CircularTimer
    v-model="running"
    :duration="props.restDuration"
    class="Exercise__Timer"
    @ended="timeOut"
  />

  <Series class="Exercise__Series" :count="series" :objectif="props.series" />

  <p v-if="seriesReached" class="Exercise__EndMessage">Bravo 👏 !</p>

  <section class="Controls gutter">
    <!-- Start timer -->
    <button v-if="!running && !seriesReached" @click="rest">
      Répétitions effectuées
    </button>
    <!-- Stop timer -->
    <button v-else class="button--outlined" @click="cancel">Annuler</button>
    <!-- Stop timer and reset series count -->
    <button v-if="series" severity="secondary" @click="reset()">Reset</button>
  </section>
</template>
<script lang="ts" setup>
import CircularTimer from '@/components/CircularTimer.vue'
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
    title: string
    repetitions?: number
  }>(),
  {
    restDuration: 60,
  }
)
const series = ref<number>(0)
const running = ref<boolean>(false)

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
@use '../style/variables' as v;

.Exercise {
  &__Header {
    display: flex;
    flex-direction: column;
    margin: v.$spacing;
    font-weight: 700;
    text-align: center;

    &Title {
      font-size: 1.5em;
    }

    &Repetitions {
      font-size: 1.2em;
    }
  }

  &__EndMessage {
    font-size: 2em;
    text-align: center;
  }
}
</style>
