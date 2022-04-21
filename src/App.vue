<template>
  <main class="App">
    <nav class="App__Menu">
      <ol class="App__MenuList">
        <li class="App__MenuItem">
          <a href="#" class="App__MenuLink" @click="exercice = 'chair'">Chaise</a>
        </li>
        <li class="App__MenuItem">
          <a href="#" class="App__MenuLink" @click="exercice = 'exercice'">Exercice</a>
        </li>
        <li class="App__MenuItem">
          <a href="#" class="App__MenuLink" @click="exercice = 'end'">Fin d’exercice</a>
        </li>
      </ol>
    </nav>

    <h1 v-if="exercice === undefined">Home workout 🏋️</h1>

    <Chair v-if="exercice === 'chair'"/>
    <Exercice v-if="exercice === 'exercice'"/>
    <Timer v-if="exercice === 'end'" :duration="60" @ended="exercice = undefined" :model-value="true"/>
  </main>
</template>
<script lang="ts" setup>
import Chair from '@/components/Chair.vue'
import { ref } from 'vue'
import Exercice from '@/components/Exercice.vue'
import Timer from '@/components/Timer.vue'

const exercice = ref<string | undefined>(undefined)
</script>

<style lang="scss" scoped>
.App {
  padding: 10px;

  &__MenuList {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0;
  }

  &__MenuLink {
    text-decoration: none;
    color: black;
    padding: 10px;
    font-weight: 700;
    border-bottom: solid 2px var(--main-color);
  }
}
</style>