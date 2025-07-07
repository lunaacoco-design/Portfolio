<template>
    
    <div class="contact-wrapper">
        <h2>Ich freu mich auf deine Nachricht!</h2>
        <div class="contact-flex">
            <div class="image"><img src="../assets/images/DSC08115-Enhanced-NR-Edit.png" alt=""></div>
            <div class="contact-details">
                
                <div class="contact-textgrid">
                    <div class="contact-icon"><img src="../assets/images/Mail.png" alt=""></div>
                    <div class="contact-text">
                        <p>Du liebst es klassisch per Email?</p>
                        <p>Kontaktiere mich gern wenn du Fragen hast oder Interesse an einem Angebot, mit Infos zu deinem Anliegen, was du haben willst:</p>
                        <p>hello@lunaacoco.de</p>
                    </div>
                    <div class="contact-icon"><img src="../assets/images/Chat.png" alt=""></div>
                    <div class="contact-text">
                        <p>Oder doch eher lässig per Chat?</p>
                        <p>Dann erreichst du mich auf Instagram per Direktnachricht an:</p>
                        <p>@lunaacoco.design</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .contact-wrapper {
        padding: 150px var(--padding-sides) 200px var(--padding-sides);
    }

    .contact-flex {
        display: flex;
        gap: 30px;
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
        align-self: center;
    }
    .contact-icon img {
        width: 100%;
        max-width: 130px;
    }
    .contact-text {
        grid-column-start: 2;
        align-self: center;
    }

    h2 {
        margin-bottom: 40px;
    }
</style>

<script>
export default {
    name: 'Contact',
}
</script>