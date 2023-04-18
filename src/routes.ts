import Home from '@/views/Home.vue'
import Day1 from '@/views/Day1.vue'
import Day3 from '@/views/Day3.vue'
import Day5 from '@/views/Day5.vue'

export const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/day1', name: 'day1', component: Day1 },
  { path: '/day3', name: 'day3', component: Day3 },
  { path: '/day5', name: 'day5', component: Day5 },
]
