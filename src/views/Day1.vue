<template>
  <h2 class="Day__Title">💪 Pectoraux, biceps et Abdominaux</h2>

  <router-view/>

  <div class="Day__ExerciseWrapper">
    <h3 class="Day__ExerciseCategory">Pectoraux</h3>
    <router-link class="Day__Exercise" to="/bench-press">Développé-couché</router-link>
    <router-link class="Day__Exercise" to="/inclined-bench-press">Développé incliné</router-link>
    <router-link class="Day__Exercise" to="/ecarte-couche">Écarté couché</router-link>
    <router-link class="Day__Exercise" to="/pull-over">Pull over</router-link>
  </div>

  <div class="Day__ExerciseWrapper">
    <h3 class="Day__ExerciseCategory">Biceps</h3>
    <router-link class="Day__Exercise" to="/curl-barre">Curl barre</router-link>
    <router-link class="Day__Exercise" to="/curl-haltere">Curl haltère</router-link>
    <router-link class="Day__Exercise" to="/curl-concentre">Curl concentré</router-link>
  </div>

  <div class="Day__ExerciseWrapper">
    <h3 class="Day__ExerciseCategory">Abdominaux</h3>
    <router-link class="Day__Exercise" to="/crunch">Crunch</router-link>
    <router-link class="Day__Exercise" to="/russian-twist">Russian twist</router-link>
    <router-link class="Day__Exercise" to="/leg-raise">Leg raise</router-link>
  </div>
</template>