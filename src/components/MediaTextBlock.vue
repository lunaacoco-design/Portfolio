<template>
    <div class="div-picture-text-flex">
    <img class="about-picture" src="../assets/images/DSC08100-Enhanced-NR-Edit.jpeg" alt="">
    <div class="div-about-text">
        <h1>Über mich</h1>
        <h3>Mehr als nur hübsch - Designs mit Charakter</h3>
        <p>Ich bin Emily, und ich liebe es kreative Ideen in klare, individuelle Designs zu übersetzen.<br>
            Was mich motiviert? Ganz einfach: Der Anspruch, mehr zu bieten als der x-te Baukasten oder eine AI-Lösung. 
            Ich gestalte bewusst - mit Kopf, Herz und einem guten Auge für das Besondere.<br>
            Mir ist wichtig, dass Design nicht nur funktioniert, sondern auch berührt. Deshalb arbeite ich am liebsten mit Menschen die für ihre Sache brennen - so wie ich für gutes Design.<br>
            Mein Stil? Modern, minimalistisch, mit einem kreativen Twist. Ich mag Details, die Freude machen - ein kleines Gimmick hier, ein cleverer Akzent da.
            Statt Standardlösungen gibt´s bei mir Designs, die wirklich zu dir und deinem Projekt passen.
        </p>
        <a href="/Lebenslauf" class="button">zum Lebenslauf</a>
    </div>

</div>
</template>

<style scoped>
    .about-picture {
    width: 60vw;
    height: auto;
    align-self: center;
    border-radius: 16px;
}

.div-picture-text-flex {
    padding: 50px 16px 50px 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.div-about-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}

.div-about-text .button {
    text-align: center;
    margin: 0 32px;
}

@media (min-width: 768px) {
    .div-picture-text-flex {
    flex-direction: row;
    padding: 100px var(--padding-sides) 100px var(--padding-sides);
    }

    .about-picture {
        width: 25vw;
    }

    .div-about-text {
        gap: 20px;
    }

    .div-about-text p {
        margin-bottom: 20px;
    }

    .div-about-text h3 {
        padding-bottom: 20px;
    }

    .div-about-text .button {
        text-align: left;
        margin: 0;
        width: auto;
        display: inline-block;
        align-self: flex-start;
    }

    
}

</style>

<script>
    export default {
        name: 'MediaTextBlock'
    }
</script>