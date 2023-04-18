<template>
  <header class="App__Menu">
    <router-link class="App__MenuLink" to="/">Home workout 🏋️</router-link>
  </header>
  <main class="App">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
@use 'style/variables' as v;

.App__Menu {
  display: flex;
  justify-content: center;
  background-color: var(--main-color);
  padding: v.$spacing;

  &Link {
    color: black;
    font-size: 1.2em;
    font-weight: 600;
    text-decoration: none;
  }
}
</style>
