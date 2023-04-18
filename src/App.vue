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
  padding: v.$spacing;
  background-color: var(--main-color);

  &Link {
    color: black;
    font-weight: 600;
    font-size: 1.2em;
    text-decoration: none;
  }
}
</style>
