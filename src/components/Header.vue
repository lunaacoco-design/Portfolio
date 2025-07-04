<template>
    <header>
    <button class="header__button" id="btnNav" type="button">
        <i @click="toggleNav" class="material-icons">menu</i>
    </button>
    <img src="../assets/images/lunaacocodesign_on_dark.png" alt="">
</header>

<nav :class="{ 'nav--open' : NavOpen }">
    <ul class="nav-list" :class="{ 'scrolled': isScrolled }, { 'dark-header' : isDarkHeader}">
        <li class="nav-item left logo"><a href="/"><div class="logo-img logo-size"></div></a></li>
        <li class="nav-item right nav-item--active"><a href="/lebenslauf"><span class="nav-icons lebenslauf"></span>Lebenslauf</a></li>
        <li class="nav-item right"><a href="/kontakt"><span class="nav-icons kontakt"></span>Kontakt</a></li>
    </ul>
    <div class="nav__overlay" @click="NavOpen = false"></div>
</nav>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--header-height);
        background: var(--color-bg-dark);  /*Farbe von mobile Header*/
        display: flex;
    }

.header__button {
    width: var(--header-height);
    flex-shrink: 0;
    background: none;
    outline: none;
    border: none;
    color: white;
}
header img {
    width: 35vw;
    height: auto;
    object-fit: contain;
}

    .logo-size {
        width: 270px;
        aspect-ratio: 800 / 83;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .logo-img {
        background-image: url(../assets/images/lunaacocodesign_on_dark.png);
    }
    .nav-list.scrolled .logo-img {
        background-image: url(../assets/images/lunaacocodesign_on_light.png);
    }

.nav-list {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    --slide-width: 270px;
    width: var(--slide-width);
    padding-top: 30px;
    z-index: 999;
    background-color: var(--color-bg);  /* Farbe von mobile Overlay */
    /* GRADIENT: background: linear-gradient(to bottom, var(--color-bg-dark), var(--color-secondary), var(--color-bg));  */
    display: flex;
    flex-direction: column;
    transform: translateX(calc(var(--slide-width) * -1));
}

.nav--open .nav-list {
    transform: translateX(0);
}

.nav__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    visibility: hidden;
    opacity: 0;
}
.nav--open .nav__overlay {
    visibility: visible;
    opacity: 1;
}

.nav-item{
    width: 100%;
    height: 50px;
    text-decoration: none;
    list-style: none;
}

.nav-item.logo img {
    width: 200px;
    height: auto;
}

.nav-item a {
    width: 100%;
    height: 100%;
    padding: 0 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: var(--color-font);
}

.nav-icons {
    display: block;
    height: 20px;
    width: 24px;
    object-fit: fill;
    color: aqua;
    margin-right: 10px;
}

.lebenslauf {
    background-image: url(../assets/icons/people.svg);
}

.kontakt {
    background-image: url(../assets/icons/mail.svg);
}

li.nav-item.right:nth-of-type(2) {
    margin-top: 50px;
}

.nav-item--active a{
    background-color: rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {

    header {
        display: none;
    }
    

    .nav-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        height: var(--header-height);
        overflow-x: hidden;
        transform: translateX(0);
        width: 100%;
        padding: 0 var(--padding-sides) 0 var(--padding-sides);
        background-color: transparent;
        transition: background-color 0.3s ease;
    }
    .nav-list.scrolled {
        background-color: var(--color-bg);
    }



    .dark-header {
        background-color: var(--color-bg-dark);
    }
    .nav-list.scrolled.dark-header {
        background-color: var(--color-bg-dark);
    }

    .nav-item {
        width: auto;
    }

    .nav-item a {
        display: block;
        color: var(--color-font-light);
        padding: 14px 0;
        text-decoration: none;
        font-family: 'Montserrat', serif;
        font-weight: 600;
    }
    
    .nav-list.scrolled a{
        color: var(--color-font);
    }

    .nav-list .nav-item.right {
        margin-left: auto;
        width: auto;
    }

    .nav-list .nav-item.right + .nav-item.right {
        margin-left: 1rem;
    }

    .nav-item.right .nav-item--active a {
        color: var(--color-primary) !important;
    }
    
    .nav-item--active a{
        background-color: transparent;
    }

    .nav-item a:hover {
        color: var(--color-primary);
    }

    li.nav-item.right:nth-of-type(2) {
        margin-top: 0;
    }

    .nav-icons {
        display: none;
    }
}

</style>

<script>

    export default {
        name: 'Header',
        data() {
            return {
                NavOpen: false,
                isScrolled: false,
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            toggleNav() {
                this.NavOpen = !this.NavOpen;
            },
            handleScroll() {
                if (!this.isDarkHeader) {
                    this.isScrolled = window.scrollY > 100;
                } else {
                    this.isScrolled = false;
                }
                
            }
        },
        computed: {
            isDarkHeader() {
                const path = this.$route.path.toLowerCase();
                const DarkPaths = ['/blog', '/impressum', '/lebenslauf', '/datenschutz', '/kontakt'];

                return DarkPaths.some(p => path.startsWith(p));
            }
        }
    }
</script>