import { ref, watchEffect } from 'vue'

export type Exercise = {
  title: string
  repetitions: number
  series?: number
  restDuration?: number
  image?: string
}

export function useExercise(exercises: Array<Exercise>) {
  const started = ref<boolean>(false)
  const index = ref<number>(0)
  const exercise = ref<Exercise | undefined>(undefined)

  function start(): void {
    started.value = true
  }

  function next(): void {
    index.value++
  }

  function previous(): void {
    index.value--
  }

  function lastExerciseReached(): boolean {
    return index.value >= exercises.length - 1
  }

  function firstExercise(): boolean {
    return 0 === index.value
  }

  watchEffect(() => (exercise.value = exercises[index.value]))

  return {
    start,
    next,
    previous,
    lastExerciseReached,
    firstExercise,
    exercise,
    started,
  }
}
