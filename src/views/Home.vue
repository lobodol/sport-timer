<template>
  <h2>Choose your session!</h2>

  <div class="Home">
    <router-link class="HomeLink" to="/day1">💪 Top</router-link>
    <router-link class="HomeLink" to="/day3">🦵 Legs</router-link>
    <router-link class="HomeLink" to="/day5">🏋️ Back</router-link>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/variables' as v;
.Home {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4px;

  &Link {
    border: solid 1px;
    border-radius: v.$borderRadius;
    padding: v.$spacing;
    text-decoration: none;
    color: black;
  }
}
</style>