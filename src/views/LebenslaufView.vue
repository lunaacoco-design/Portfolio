<template>

    <h1>Lebenslauf</h1>
    <LebenslaufDesktop/>
</template>

<style scoped>
  h1 {
    padding: 100px 25px 20px 25px;
  }

  @media (min-width: 768px) {
    h1 {
      padding: 100px var(--padding-sides) 40px var(--padding-sides);
    }
  }
  

</style>

<script>
import LebenslaufDesktop from '../components/LebenslaufDesktop.vue';

  export default {
    components: {
      LebenslaufDesktop,
    }
  }
</script>