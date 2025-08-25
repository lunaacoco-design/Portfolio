<template>
    <div class="hero-image">

        <div class="hero-content">

            <h1>Enhance your digital footprint</h1>
            <h3>Mit einer modernen Website erreichst Du Deine Kunden auch zuhause. Lass uns über die Zukunft Deines Internetauftritts sprechen!</h3>
            <a href="/kontakt" class="button">Jetzt unverbindlich anfragen</a>

        </div>

</div>
</template>

<style>
    .hero-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    gap: 30px;
    margin: 16px var(--padding-mobile);
}
.hero-content h1 {
    text-align: center;
}
.hero-content h3 {
    text-align: center;
}
.hero-content a {
    align-self: center;
}

@media (min-width: 768px) {
    .hero-image {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(../assets/images/IMG_20211127_111028.webp);
        background-size: cover;
        background-position: top center;
        background-attachment: fixed;
        height: 85vh;
        padding-top: var(--header-height);
    }

    .hero-content {
        align-items: start;
        margin: 0 var(--padding-sides);
        text-align: left;
    }

    .hero-content h1 {
        text-align: left;
        color: var(--color-font-light);
    }
    .hero-content h3 {
        text-align: left;
        color: var(--color-font-light);
    }
    .hero-content .button {
        align-self: auto;
        color: var(--color-font-light);
    }
}

@media (min-width: 1200px) {
    .hero-content {
        margin-right: 50vw;
    }
}
</style>

<script>
    export default {
        name: 'HeroLandscape'
    }
</script>