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
  const displayNext = ref<boolean>(false)

  function hasNextExercise(): boolean {
    return (
      started.value &&
      displayNext.value &&
      undefined !== exercises[index.value + 1]
    )
  }

  function start(): void {
    started.value = true
  }

  function next(): void {
    index.value++
    displayNext.value = false
  }

  function previous(): void {
    index.value--
    displayNext.value = false
  }

  function lastExerciseReached(): boolean {
    return index.value >= exercises.length - 1
  }

  function firstExercise(): boolean {
    return 0 === index.value
  }

  function getNextExercise(): Exercise {
    return exercises[index.value + 1]
  }

  watchEffect(() => (exercise.value = exercises[index.value]))

  return {
    start,
    next,
    previous,
    lastExerciseReached,
    firstExercise,
    hasNextExercise,
    getNextExercise,
    exercise,
    started,
    displayNext,
    index,
  }
}
