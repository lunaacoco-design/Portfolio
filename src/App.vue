
<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

<style>
:root {
    --color-primary: #5f4b8b;
    --color-secondary: #C084FC;
    --color-bg: #f5f5fa;
    --color-bg-dark: #161037;
    --color-font:  #161037;
    --color-font-light: white;

    --font-headings: 'Montserrat', sans-serif;
    --font-body: 'League Spartan', sans-serif;



    --header-height: 70px;
    --padding-sides: 12vw;
}

@font-face {
  font-family: 'League Spartan';
  src: url(assets/fonts/LeagueSpartan-VariableFont_wght.ttf) format('trueType');
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

p, li, a, span {
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
    color: var(--color-font-light);
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
