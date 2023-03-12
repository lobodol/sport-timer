<template>
  <main class="App">
    <nav class="App__Menu">
      <ol class="App__MenuList">
        <li class="App__MenuItem">
          <a href="#" class="App__MenuLink" @click="exercise = 'chair'">Chaise</a>
        </li>
        <li class="App__MenuItem">
          <a href="#" class="App__MenuLink" @click="exercise = 'exercise'">Exercice</a>
        </li>
        <li class="App__MenuItem">
          <a href="#" class="App__MenuLink" @click="exercise = 'end'">Fin d’exercice</a>
        </li>
      </ol>
    </nav>

    <h1 v-if="exercise === undefined">Home workout 🏋️</h1>

    <Chair v-if="exercise === 'chair'" />
    <Exercise v-if="exercise === 'exercise'" />
    <Timer
      v-if="exercise === 'end'"
      :duration="60"
      :model-value="true"
      @ended="exercise = 'exercise'"
    />
    <router-view/>
  </main>
</template>
<script lang="ts" setup>
import Chair from '@/components/Chair.vue'
import { ref } from 'vue'
import Exercise from '@/components/Exercise.vue'
import Timer from '@/components/Timer.vue'

const exercise = ref<string | undefined>(undefined)
</script>

<style lang="scss" scoped>
.App {
  padding: 10px;

  &__MenuList {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0;
    list-style: none;
  }

  &__MenuLink {
    padding: 10px;
    border-bottom: solid 2px var(--main-color);
    color: black;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
