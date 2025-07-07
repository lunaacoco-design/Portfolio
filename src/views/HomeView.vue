<template>
    <HeroLandscape/>
    <Cards :items="staticCards" sectiontitle="Leistungen"/>
    <MediaTextBlock/>
    <Cards :items="sanityPosts" :button="true" sectiontitle="Projekte"/>
    
</template>


<script>
    import Cards from '../components/Cards.vue';
    import HeroLandscape from '../components/HeroLandscape.vue';
    import MediaTextBlock from '../components/MediaTextBlock.vue';
    import { sanity } from '../sanity';

    const query = `*[_type == "blog"] | order(publishedAt desc)[0...3] {
    _id, title, "image": image.asset->url, "summary": content, slug
    } `

    export default {
        components: {
            HeroLandscape,
            MediaTextBlock,
            Cards
        },
        data() {
            return {
                sanityPosts: [],
                staticCards: [
                    {
                        title: 'Webdesign',
                        image: new URL('../assets/images/Webdesign.png', import.meta.url).href,
                        summary: 'Ich gestalte moderne, funktionale Websites, die zu dir und deiner Zielgruppe passen – vom ersten Entwurf bis zur fertigen Umsetzung. Klar, strukturiert und immer mit einem kreativen Extra.',
                    },
                    {
                        title: 'UX Design',
                        image: new URL('../assets/images/UXDesign.png', import.meta.url).href,
                        summary: 'Wenn du schon eine Website hast, werfe ich gerne einen analytischen Blick darauf: Was funktioniert gut, was lässt sich klarer oder nutzerfreundlicher gestalten? Für mich steht dabei immer der Mensch im Mittelpunkt – damit deine Website nicht nur schön aussieht, sondern sich auch gut anfühlt.',
                    },
                    {
                        title: 'Branding',
                        image: new URL('../assets/images/BrandDesign.png', import.meta.url).href,
                        summary: 'Ein fertiges Branding ist noch nicht da? Kein Problem. Ich entwickle bei Bedarf ein stimmiges Design-Set – Farben, Schriften, Vorlagen und Logo-Varianten – damit alles zusammenpasst und du direkt loslegen kannst.',
                    },
                ],
                }
            },
        created() {
            this.fetchSanity()
        },
        methods: {
            extractPlainText(blocks, maxWords = 20) {
                if(!Array.isArray(blocks)) return '';
                const fullText = blocks
                .filter(block => block._type === 'block')
                .map(block => block.children.map(child => child.text).join(''))
                .join(' ');
                const words = fullText.split(/\s+/);
                if (words.length <= maxWords) return fullText;
                return words.slice(0, maxWords).join(' ') + '...';
            },
            async fetchSanity() {
                try {
                    const result = await sanity.fetch(query);
                    this.sanityPosts = result.map(entry => ({
                        ...entry,
                        summary: this.extractPlainText(entry.summary, 40),
                    }));
                } catch (error) {
                    this.error = error;
                }
            },
        },
    }
</script>



