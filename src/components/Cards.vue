<template lang="">
    <section>
        <h1>{{ sectiontitle }}</h1>
        <div class="cards-div">
            <div v-for="item in items" class="card">
                <div class="imgwrapper"><img v-if="item.image" :src="item.image" :class="{ imgfix : imgfix }"/></div>
                
                <div class="card-text">
                    <h3>{{ item.title  }}</h3>
                    <p>{{ item.summary }}</p>
                    <router-link v-if="button" :to="`/blog/${item.slug.current}`" class="card-button">
                        <button  class="button">
                            Weiterlesen
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- TODO: Link einfügen zu Blog Overview Page alle Blog Posts -->

<style scoped>
    h1 {
        color: var(--color-font-light);
        padding-bottom: 30px;
    }

    section {
        width: 100%;
        padding: 70px var(--padding-sides) 70px var(--padding-sides);
        background-color: var(--color-bg-dark);
    }

    .cards-div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: stretch;
    }

    .card {
        flex: 1;
        background-color: white;
        border-radius: 16px;
        overflow: hidden;
    }

    .imgwrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        background-color: #EDDFFB;
/*         TODO: Farbe von den Bildern anpassen weil die sind UNTERSCHIEDLICH */
    }

    .card img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }

    .card-text {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 16px;
    }

    .card-button {
        text-align: right;
        width: auto;
        display: inline-block;
        align-self: flex-end;
    }

    

    @media (min-width: 768px) {
        .cards-div {
            flex-direction: row;
        }

        .card img {
            height: 300px;
            width: 100%;
        }

        .card-text {
            padding: 40px;
        }
        
        img.imgfix {
            height: 200px;
            width: auto;
        }
    }

</style>


<script>
export default {
    props: {
        items: {
            type: Array,
        },
        sectiontitle: {
            type: String,
        },
        button: {
            type: Boolean,
            default: false,
        },
        imgfix: {
            type: Boolean,
            default: false,
        }
    },
    name: 'Cards',
}
</script>
