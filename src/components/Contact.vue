<template>
    
    <div class="contact-wrapper">
        <h2>Ich freu mich auf Deine Nachricht!</h2>
        <div class="contact-flex">
            <div class="image"><img src="../assets/images/DSC08115-Enhanced-NR-Edit.png" alt=""></div>
            <div class="contact-details">
                
                <div class="contact-textgrid">
                    <div class="contact-icon"><img src="../assets/images/Mail.png" alt=""></div>
                    <div class="contact-text">
                        <p>Du liebst es klassisch per Email?</p>
                        <p>Kontaktiere mich gern wenn Du Fragen hast oder Interesse an einem Angebot, mit Infos zu Deinem Anliegen:</p>
                        <br>
                        <strong><A HREF="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%6C%75%6E%61%61%63%6F%63%6F%2E%64%65">hello@lunaacoco.de</A></strong>
                    </div>
                    <div class="contact-icon"><img src="../assets/images/Chat.png" alt=""></div>
                    <div class="contact-text">
                        <p>Oder doch eher lässig per Chat?</p>
                        <p>Dann erreichst Du mich auf Instagram per Direktnachricht an:</p>
                        <br>
                        <strong><a href="https://www.instagram.com/lunaacoco.design/">@lunaacoco.design</a></strong>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

a::before {
    content: "";
    display: inline-block;
    background: url(../assets/icons/chevron_right.svg) no-repeat center center;
    background-size: contain;
    width: 1em;
    height: 1em;
    margin-right: 0.1em;
    vertical-align: middle;
}
a {
    color: black;
}

.contact-wrapper {
    margin: 100px var(--padding-mobile);
    height: 60vh;
}

.image img {
    display: none;
}

.contact-icon {
    grid-column-start: 1;
    align-self: center;
}
.contact-icon img {
    width: 100%;
    max-width: 130px;
}

h2 {
    margin-bottom: 25px;
}


    @media (min-width: 768px) {
        .contact-wrapper {
            padding: 20px var(--padding-sides) 100px var(--padding-sides);
            height: auto;
        }

        .contact-flex {
            display: flex;
            gap: 30px;
        }
        .image img {
            display: block;
            max-width: 500px;
        }

        .contact-textgrid {
            display: grid;
            grid-template-columns: 25% 75%;
            min-height: 350px;
        }

        .contact-details {
            display: flex;
            align-items: center;
        }
        .contact-text {
            grid-column-start: 2;
            align-self: center;
            margin-left: 20px;

        }

        h2 {
            margin-bottom: 40px;
        }        
    }

</style>

<script>
export default {
    name: 'Contact',
}
</script>