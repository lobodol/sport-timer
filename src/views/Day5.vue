<template>
  <h2 class="Day__Title">🏋️ Dos, épaules et triceps</h2>

  <router-view/>

  <div class="Day__ExerciseWrapper">
    <h3 class="Day__ExerciseCategory">Dos</h3>
    <router-link class="Day__Exercise" to="/tractions">Tractions</router-link>
    <router-link class="Day__Exercise" to="/rowing">Rowing</router-link>
    <router-link class="Day__Exercise" to="/shrug">Shrug</router-link>
  </div>

  <div class="Day__ExerciseWrapper">
    <h3 class="Day__ExerciseCategory">Épaules</h3>
    <router-link class="Day__Exercise" to="/developpe-haltere">Développé haltère</router-link>
    <router-link class="Day__Exercise" to="/elevations-laterales">Élévations latérales</router-link>
    <router-link class="Day__Exercise" to="/oiseau-banc-incline">Oiseau banc incliné</router-link>
  </div>

  <div class="Day__ExerciseWrapper">
    <h3 class="Day__ExerciseCategory">Triceps</h3>
    <router-link class="Day__Exercise" to="/barre-front">Barre front</router-link>
    <router-link class="Day__Exercise" to="/extensions-tete">Extensions au-dessus de la tête</router-link>
  </div>
</template>