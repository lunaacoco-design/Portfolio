<template>

    <h1>Lebenslauf</h1>
    <Lebenslauf/>
</template>

<style>
  h1 {
    padding: 100px var(--padding-sides) 40px var(--padding-sides);
  }
</style>

<script>
import Lebenslauf from '../components/Lebenslauf.vue';

  export default {
    components: {
      Lebenslauf,
    }
  }
</script>