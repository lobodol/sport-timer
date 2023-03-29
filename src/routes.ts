import Home from '@/views/Home.vue'
import Day1 from '@/views/Day1.vue'
import Day3 from '@/views/Day3.vue'
import Day5 from '@/views/Day5.vue'
import ExerciseTimer from '@/components/ExerciseTimer.vue'

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/day1', name: 'day1', component: Day1, children: [
            { path: '/bench-press', component: ExerciseTimer, props: {title: 'Développé-couché', repetitions: 10, series: 5} },
            { path: '/inclined-bench-press', component: ExerciseTimer, props: {title: 'Développé incliné', repetitions: 8, series: 3} },
            { path: '/ecarte-couche', component: ExerciseTimer, props: {title: 'Écarté couché', repetitions: 12, series: 3} },
            { path: '/pull-over', component: ExerciseTimer, props: {title: 'Pull over', repetitions: 20, series: 2} },
            { path: '/curl-barre', component: ExerciseTimer, props: {title: 'Curl barre', repetitions: 10, series: 4} },
            { path: '/curl-haltere', component: ExerciseTimer, props: {title: 'Curl haltères', repetitions: 8, series: 4} },
            { path: '/curl-concentre', component: ExerciseTimer, props: {title: 'Curl concentre', repetitions: 12, series: 3} },
            { path: '/crunch', component: ExerciseTimer, props: {title: 'Crunch', repetitions: 20, series: 4} },
            { path: '/russian-twist', component: ExerciseTimer, props: {title: 'Russian twist', repetitions: 30, series: 1} },
            { path: '/leg-raise', component: ExerciseTimer, props: {title: 'Leg raise', repetitions: 30, series: 1} },
        ] },
    { path: '/day3', name: 'day3', component: Day3 },
    { path: '/day5', name: 'day5', component: Day5, children: [
            { path: '/tractions', component: ExerciseTimer, props: {title: 'Tractions', repetitions: 10, series: 5, restDuration: 90} },
            { path: '/rowing', component: ExerciseTimer, props: {title: 'Rowing horizontal', repetitions: 10, series: 4} },
            { path: '/shrug', component: ExerciseTimer, props: {title: 'Shrug haltères', repetitions: 12, series: 3} },
            { path: '/developpe-haltere', component: ExerciseTimer, props: {title: 'Développé haltère', repetitions: 12, series: 4} },
            { path: '/elevations-laterales', component: ExerciseTimer, props: {title: 'Élévations latérales', repetitions: 10, series: 3} },
            { path: '/oiseau-banc-incline', component: ExerciseTimer, props: {title: 'Oiseau banc incliné', repetitions: 10, series: 3} },
            { path: '/barre-front', component: ExerciseTimer, props: {title: 'Barre front', repetitions: 10, series: 4} },
            { path: '/extensions-tete', component: ExerciseTimer, props: {title: 'Extensions au-dessus de la tête', repetitions: 10, series: 3} },
        ] },

]