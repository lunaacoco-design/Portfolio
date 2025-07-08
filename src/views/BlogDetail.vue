<template lang="">
    <section v-if="post">
        <div class="header-image" :style="{ backgroundImage: 'url(' + post.image + ')' }">
            
        </div>
        <div class="blog-post-wrapper">
                <h1>{{ post.title }}</h1>
                <PortableText :value="post.content" :components="myComponents" :key="post._id" />
            </div>
        
    </section>
</template>

<style>

    .header-image {
        margin-top: var(--header-height);
        width: 100%;
        height: 40vh;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding-top: 40vh;
        z-index: 1;
    }
    .blog-post-wrapper {
        margin: -20vh 20px 50px 20px;
        padding: 30px;
        background-color: white;
        border-radius: 32px;
        z-index: 2;
        position: relative;
    }

    .blog-post-wrapper img {
        height: 300px !important;
        width: 100% !important;
        object-fit: cover !important;
        object-position: center;
        margin-bottom: 20px;
    }

    .blog-post-wrapper h1,
    .blog-post-wrapper h2,
    .blog-post-wrapper h3 {
        padding-bottom: 20px;
    }
    .blog-post-wrapper ul {
        padding-left: 30px;
        padding-bottom: 10px;
    }
    .blog-post-wrapper ul li {
        padding-bottom: 10px;
    }
    .blog-post-wrapper p {
        padding-bottom: 10px;
    }
    .blog-post-wrapper img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    @media (min-width: 768px) {
        .blog-post-wrapper {
            margin: -10vh 18vw 50px 18vw;
            padding: 40px;
            background-color: #f5f5fa;
        }
    }

    
</style>

<script>
import { sanity } from '../sanity';
import { PortableText } from '@portabletext/vue'
import { h } from 'vue'

export default {
    name: 'BlogDetail',
    components: {
        PortableText
    },
    props: ['slug'],
    data() {
        return {
            post: null,
        };
    },
    async created () {
        const result = await sanity.fetch(
            `*[_type == "blog" && slug.current == $slug][0]{
                _id,
                title,
                "image": image.asset->url,
                content[]{
                    ...,
                    asset->{
                    _id,
                    url
                    }
                }
                }`,
            {slug: this.slug}
        );
        this.post = result;
    },
    computed: {
        myComponents() {
            return {
                types: {
                    image: ({ value }) => {
                        return h('img', {
                        src: value.asset?.url,
                        class: 'portable-image'
                        })
                    }
                }
            }
        }
    }
};

</script>