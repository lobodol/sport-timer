<template>
  <h2 v-if="!started" class="Session__Title gutter">{{ props.title }}</h2>

  <ExerciseTimer
    v-if="started && exercise"
    v-bind="exercise"
    :key="exercise.title"
    @ended="next"
  />

  <section v-if="!started" class="gutter">
    <ol class="Session__ExerciseWrapper">
      <li
        v-for="exercise in props.exercises"
        :key="exercise.title"
        class="Session__Exercise"
      >
        <span class="Session__ExerciseTitle">{{ exercise.title }}</span>
        <span class="Session__ExerciseDetails"
          >{{ exercise.repetitions }} reps &times; {{ exercise.series }}</span
        >
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

.Session {
  &__ExerciseWrapper {
    display: flex;
    flex-direction: column;
    gap: v.$spacing-2;
    margin: v.$spacing 0;
    padding: v.$spacing-2 v.$spacing-4;
    border-radius: v.$borderRadius;
    background: #dadada;
    list-style: none;
  }

  &__Exercise {
    display: flex;
    flex-direction: column;
    margin: 0 v.$spacing-4;
    padding: v.$spacing;
    border-radius: v.$borderRadius;
    background: white;
    color: black;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    font-weight: bold;
    text-decoration: none;

    &Details {
      font-weight: 300;
      font-size: 0.9em;
    }
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
