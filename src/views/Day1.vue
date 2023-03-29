<template>
  <h2 class="Day__Title gutter" v-if="!started">💪 Pectoraux, biceps et Abdominaux</h2>

  <ExerciseTimer
    v-if="title && started"
    :title="title"
    :repetitions="repetitions"
    :key="title"
    :series="series"
    :rest-duration="restDuration"
    @ended="() => index++"
  />

  <section class="gutter" v-if="!started">
    <ol class="Day__ExerciseWrapper">
      <li v-for="exercise in exercises" :key="title" class="Day__Exercise">
        {{ exercise.title }}
      </li>
    </ol>
  </section>

  <section class="Toolbar">
    <button v-if="started && index > 0" @click="() => index -= 1" class="button--outlined">&lt;</button>
    <button v-if="!started" rounded @click="start" >Démarrer</button>
    <button v-else @click="() => (started = false)">Fin</button>
    <button v-if="started && !lastExerciseReached()" @click="next" class="button--outlined">&gt;</button>
  </section>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import ExerciseTimer from '@/components/ExerciseTimer.vue'

type Exercise = {
  title: string
  repetitions: number
  series?: number
  restDuration?: number
}

const title = ref<string | undefined>()
const repetitions = ref<number | undefined>()
const series = ref<number | undefined>()
const restDuration = ref<number>(6)
const started = ref<boolean>(false)
const index = ref<number>(0)

const exercises: Array<Exercise> = [
  { title: 'Développé couché', repetitions: 10, series: 5 },
  { title: 'Développé incliné', repetitions: 8, series: 3 },
  { title: 'Écarté couché', repetitions: 12, series: 3 },
  { title: 'Pull over', repetitions: 20, series: 2 },
  { title: 'Curl barre', repetitions: 10, series: 4 },
  { title: 'Curl haltères', repetitions: 8, series: 4 },
  { title: 'Curl concentre', repetitions: 12, series: 3 },
  { title: 'Crunch', repetitions: 20, series: 4 },
  { title: 'Russian twist', repetitions: 30, series: 1 },
]

function start(): void {
  started.value = true
}

function next(): void {
  index.value++
}

function lastExerciseReached(): boolean {
  return index.value >= exercises.length-1
}

watchEffect(() => {
  const exercise = exercises[index.value]

  if (exercise) {
    title.value = exercise.title
    repetitions.value = exercise.repetitions
    series.value = exercise.series
    restDuration.value = exercise.restDuration || restDuration.value
  }

  console.log(index.value, exercises.length)
})
</script>

<style lang="scss" scoped>
@use '../style/variables' as v;

.Day {
  &__ExerciseWrapper {
    list-style: none;
  }
}

.Toolbar {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: v.$spacing;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-evenly;

  .button--outlined {
    flex-grow: 0;
  }
}
</style>
