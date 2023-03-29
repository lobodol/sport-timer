<template>
  <h2 v-if="!started" class="Day__Title gutter">{{ props.title }}</h2>

  <ExerciseTimer
    v-if="started && exercise"
    v-bind="exercise"
    :key="exercise.title"
    @ended="next"
  />

  <section v-if="!started" class="gutter">
    <ol class="Day__ExerciseWrapper">
      <li
        v-for="exercise in props.exercises"
        :key="exercise.title"
        class="Day__Exercise"
      >
        {{ exercise.title }}
      </li>
    </ol>
  </section>

  <section class="Toolbar">
    <button
      v-if="started && !firstExercise()"
      class="button--outlined"
      @click="previous"
    >
      &lt;
    </button>
    <button v-if="!started" rounded @click="start">Démarrer</button>
    <button v-else @click="() => (started = false)">Fin</button>
    <button
      v-if="started && !lastExerciseReached()"
      class="button--outlined"
      @click="next"
    >
      &gt;
    </button>
  </section>
</template>

<script lang="ts" setup>
import { Exercise, useExercise } from '@/components/useExercise'
import ExerciseTimer from '@/components/ExerciseTimer.vue'

const props = defineProps<{
  title: string
  exercises: Array<Exercise>
}>()

const {
  start,
  next,
  previous,
  lastExerciseReached,
  firstExercise,
  exercise,
  started,
} = useExercise(props.exercises)
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
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  padding: v.$spacing;
  background: white;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);

  .button--outlined {
    flex-grow: 0;
  }
}
</style>
