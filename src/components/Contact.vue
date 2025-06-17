<template>
    <div class="contact-wrapper">
        <div class="image"><img src="../assets/images/DSC08100-Enhanced-NR-Edit.jpeg" alt=""></div>
        <div class="contact-details">
            <h2>Ich freu mich auf deine Nachricht!</h2>
            <div class="contact-textgrid">
                <div class="contact-icon"><img src="../assets/images/—Pngtree—web development illustration modern_4484303.png" alt=""></div>
                <div class="contact-text">
                    <p>Du liebst es klassisch per Email?</p>
                    <p>Kontaktiere mich gern wenn du Fragen hast oder Interesse an einem Angebot, mit Infos zu deinem Anliegen, was du haben willst:</p>
                    <p>hello@lunaacoco.de</p>
                </div>
                <div class="contact-icon"><img src="../assets/images/—Pngtree—web development illustration modern_4484303.png" alt=""></div>
                <div class="contact-text">
                    <p>Oder doch eher lässig per Chat?</p>
                    <p>Dann erreichst du mich auf Instagram per Direktnachricht an:</p>
                    <p>@lunaacoco.design</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contact-wrapper {
        padding: 100px var(--padding-sides) 0 var(--padding-sides);
        display: flex;
    }
    .image img {
        max-width: 500px;
    }

    .contact-textgrid {
        display: grid;
        grid-template-columns: 25% 75%;
    }

    .contact-icon {
        grid-column-start: 1;
    }
    .contact-icon img {
        width: 100%;
    }
    .contact-text {
        grid-column-start: 2;
    }
</style>

<script>
export default {
    name: 'Contact',
}
</script>