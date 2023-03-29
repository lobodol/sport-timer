<template>
  <h2 class="gutter">Choose your session!</h2>

  <div class="Home gutter">
    <router-link class="HomeLink" to="/day1"
      >💪 Pectoraux, biceps et Abdominaux</router-link
    >
    <router-link class="HomeLink" to="/day3">🦵 Legs</router-link>
    <router-link class="HomeLink" to="/day5"
      >🏋️ Dos, épaules et triceps</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
@use '../style/variables' as v;

.Home {
  display: flex;
  flex-direction: column;
  gap: v.$spacing;

  &Link {
    padding: v.$spacing;
    border-radius: v.$borderRadius;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }
}
</style>
