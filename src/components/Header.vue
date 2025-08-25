<template>
    <button class="header-button" :class="{ 'nav--open': NavOpen }" id="btnNav" type="button" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <header>
        <div class="logo-header"></div>
    </header>

    <nav :class="{ 'nav--open': NavOpen }">
        <ul class="nav-list" :class="{ 'scrolled': isScrolled }, { 'dark-header': isDarkHeader }">
            <li class="nav-item left logo"><a href="/">
                    <div class="logo-img logo-size"></div>
                </a></li>
            <li class="nav-item right" :class="{ active: isActive('/lebenslauf') }">
                <router-link to="/lebenslauf"><span class="nav-icons lebenslauf"></span>
                    <h3>Lebenslauf</h3>
                </router-link>
            </li>
            <li class="nav-item right" :class="{ active: isActive('/kontakt') }">
                <router-link to="/kontakt"><span class="nav-icons kontakt"></span>
                    <h3>Kontakt</h3>
                </router-link>
            </li>
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

.logo-header {
    background-image: url(../assets/images/lunaacocodesign_on_dark.png);
    width: 35vw;
    aspect-ratio: 800 / 83;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: var(--header-height);
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background: var(--color-bg-dark);
    /*Farbe von mobile Header*/
    display: flex;
    z-index: 5;
}

.header-button {
    width: var(--header-height);
    height: var(--header-height);
    flex-shrink: 0;
    background: none;
    outline: none;
    border: none;
    z-index: 15;
    position: fixed;
    top: 0;
    left: 0;
}

/* Span Button */

.header-button span {
    display: block;
    width: 21px;
    height: 2px;
    margin-bottom: 4px;
    margin-top: 2px;
    margin-left: 20px;
    position: relative;

    background: var(--color-font-light);
    border-radius: 3px;

    z-index: 15;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.55s ease;
}

.header-button span:first-child {
    transform-origin: 0% 0%;
}

.header-button span:nth-last-child(3) {
    transform-origin: 0% 100%;
}

.header-button.nav--open span {
    opacity: 1;
    transform: rotate(45deg) translate(0, 0);
    background: var(--color-font);
}

.header-button.nav--open span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

.header-button.nav--open span:nth-last-child(1) {
    transform: rotate(-45deg) translate(-1px, 0);
}

.logo-size {
    width: 35vw;
    aspect-ratio: 800 / 83;
    background-size: contain;
    background-repeat: no-repeat;
}

.logo-img {
    background-image: url(../assets/images/lunaacocodesign_on_light.png);
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
    padding-top: 0px;
    z-index: 10;
    background-color: var(--color-bg);
    /* Farbe von mobile Overlay */
    /* GRADIENT: background: linear-gradient(to bottom, var(--color-bg-dark), var(--color-secondary), var(--color-bg));  */
    display: flex;
    flex-direction: column;
    transform: translateX(calc(var(--slide-width) * -1));
    transition: transform 0.3s ease;
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
    z-index: 9;
}

.nav--open .nav__overlay {
    visibility: visible;
    opacity: 1;
}

.nav-item {
    width: 100%;
    height: 50px;
    text-decoration: none;
    list-style: none;
}

.nav-item.left {
    height: 70px;
    padding-left: 40px;
    z-index: 10;
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

.active a {
    background-color: rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {

    header {
        display: none;
    }

    .active a {
        background-color: transparent;
    }

    .logo-img {
        background-image: url(../assets/images/lunaacocodesign_on_dark.png);
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

    .logo-size {
        width: 270px;
        margin-top: 5px;
    }

    .dark-header {
        background-color: var(--color-bg-dark);
    }

    .nav-list.scrolled.dark-header {
        background-color: var(--color-bg-dark);
    }

    .header-button {
        display: none;
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

    .nav-item.left {
        padding-left: 0;
    }

    .nav-list.scrolled a {
        color: var(--color-font);
    }

    .nav-list .nav-item.right {
        margin-left: auto;
        width: auto;
    }

    .nav-list .nav-item.right+.nav-item.right {
        margin-left: 2rem;
    }

    .nav-item.right .nav-item--active a {
        color: var(--color-primary) !important;
    }

    .nav-item--active a {
        background-color: transparent;
    }

    .nav-item a:hover {
        color: var(--color-secondary);
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

        },
        isActive(path) {
            return this.$route.path.startsWith(path)
        },
        resetHeaderState() {
            this.NavOpen = false;
            this.isScrolled = false;
        }
    },
    computed: {
        isDarkHeader() {
            const path = this.$route.path.toLowerCase();
            const DarkPaths = ['/blog', '/impressum', '/lebenslauf', '/datenschutz', '/kontakt'];

            return DarkPaths.some(p => path.startsWith(p));
        }
    },
    watch: {
        $route() {
            this.resetHeaderState();
            window.scrollTo(0, 0);
        }
    }
}
</script>