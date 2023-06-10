<template>
  <section class="NextExercise gutter">
    <p>
      Prochain
      <span class="NextExercise__Index">{{
        index + '/' + exercisesCount
      }}</span>
    </p>
    <p class="NextExercise__Title">{{ exercise.title }}</p>
    <p class="NextExercise__Repetitions">&times; {{ exercise.repetitions }}</p>
  </section>
</template>

<script lang="ts" setup>
import { Exercise } from '@/components/useExercise'

const props = defineProps<{
  index: number
  exercisesCount: number
  exercise: Exercise
}>()
</script>

<style lang="scss" scoped>
.NextExercise {
  border-top: solid 1px var(--gray-100);

  &__Index {
    color: var(--blue-800);
    font-weight: 900;
  }

  &__Title {
    font-weight: 900;
  }

  &__Repetitions {
    color: var(--gray-600);
    font-weight: bold;
  }
}
</style>
