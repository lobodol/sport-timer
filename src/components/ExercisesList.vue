<template>
  <ol class="ExerciseWrapper">
    <li
      v-for="exercise in props.exercises"
      :key="exercise.title"
      class="Exercise"
    >
      <img
        v-if="exercise.image"
        :src="exercise.image"
        alt=""
        class="ExerciseImage"
      />
      <span class="ExerciseTitle">{{ exercise.title }}</span>
      <span class="ExerciseDetails"
        >{{ exercise.repetitions }} reps &times; {{ exercise.series }}</span
      >
    </li>
  </ol>
</template>

<script lang="ts" setup>
import { Exercise } from '@/components/useExercise'

const props = defineProps<{
  exercises: Exercise[]
}>()
</script>

<style lang="scss" scoped>
@use '../style/variables' as v;

.ExerciseWrapper {
  display: flex;
  flex-direction: column;
  gap: v.$spacing-2;
  margin: v.$spacing 0;
  padding: v.$spacing-2 v.$spacing-4;
  border-radius: v.$borderRadius;
  background: #dadada;
  list-style: none;
}

.Exercise {
  display: grid;
  grid-template-areas:
    'image title'
    'image details';
  grid-template-columns: 40px 1fr;
  margin: 0 v.$spacing-4;
  padding: v.$spacing;
  border-radius: v.$borderRadius;
  background: white;
  color: black;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  text-decoration: none;

  &Image {
    grid-area: image;
    max-width: 30px;
    max-height: 30px;
  }

  &Title {
    grid-area: title;
  }

  &Details {
    grid-area: details;
    font-weight: 300;
    font-size: 0.9em;
  }
}
</style>
