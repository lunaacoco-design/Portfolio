
<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

<style>
:root {
    --color-primary: #E16F7C;
    --color-secondary: #f5ccd1;
    --color-bg: white;
    --color-bg-dark: #161037;
    --color-font:  #161037;
    --color-font-light: white;

    --font-headings: 'Montserrat', sans-serif;
    --font-body: 'League Spartan', sans-serif;



    --header-height: 70px;
    --padding-sides: 12vw;
}



* {
    margin: 0;
    padding: 0;
}

*, *::before, *::after {
    box-sizing: border-box;
  }

h1, h2, h3 {
    font-family: var(--font-headings);
}

p, li, a {
    font-family: var(--font-body);
}

/* main {
    margin-top: var(--header-height);
} */

button, .button {
    background-color: var(--color-primary);
    padding: 20px;
    border-radius: 18px;
    border: 0;
    text-decoration: none;
    color: black;
}


</style>

<script>
// @ts-ignore
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
