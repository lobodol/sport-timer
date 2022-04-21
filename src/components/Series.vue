<template>
  <div class="Series">
    Séries : {{ props.count }}{{ props.objectif !== undefined ? '/' + props.objectif : '' }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /**
   * Series count
   */
  count: number

  /**
   * Objectif count to reach if defined
   */
  objectif: number | undefined
}>()
</script>

<style lang="scss" scoped>
.Series {
  margin: 1em 0;
  font-weight: 700;
  font-size: 1.5em;
  text-align: center;
}
</style>
