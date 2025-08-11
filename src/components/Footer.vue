<template>
    <footer>
        <div class="links">
            <a href="/kontakt">Kontakt</a> 
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a> 
        </div>
        <div class="shortcuts">
            <a href="https://www.instagram.com/lunaacoco.design/" class="shortcut-icon"><span class="icon"></span>@lunaacoco.design
            </a>
            <p>Keine Cookies eingebunden</p>
        </div>
        <div class="logo">
            <img src="../assets/images/lunaacocodesign_on_dark.png" alt="">
        </div>
        
    </footer>
</template>

<style scoped>
    footer {
        padding: 40px var(--padding-sides) 40px var(--padding-sides);
        min-height: 100px;
        background-color: var(--color-bg-dark);
        color: white;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    a {
        color: white;
        text-decoration: none;
    }
    .links {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }

    .shortcuts {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        width: 100%;
    }

    .shortcut-icon {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }

    .logo {
        display: none;
    }

    .copyright {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        
    }

    .icon {
        background: url(../assets/icons/Instagram.svg);
        height: 20px;
        width: 20px;
        object-fit: fill;
        display: block;
    }


    @media (min-width: 768px) {
        footer {
            display: grid;
            grid-template-columns: 50% 50%;
        }

        .links {
            grid-column-start: 2;
            align-items: start;
        }

        .shortcuts {
            grid-column-start: 2;
            align-items: flex-start;
            width: fit-content;
        }


        .copyright {
            grid-column-start: 2;
            align-items: start;
        }

        .logo {
            display: flex;
            grid-column-start: 1;
            grid-row-start: 1;
        }

        img {
            max-width: 300px;
            height: auto;
            object-fit: contain;
        }

    }
</style>



<script>
export default {
    name: 'Footer'
}
</script>