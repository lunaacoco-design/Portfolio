<template lang="">
    <section v-if="post" class="blog-post-wrapper">
        <h1>{{ post.title }}</h1>
        <PortableText :value="post.content" :components="myComponents" :key="post._id" />
    </section>
</template>

<style>
    .blog-post-wrapper {
        margin: 100px 18vw 50px 18vw;
        padding: 40px;
        background-color: rgba(0,0,0,0.1);
        border-radius: 32px;
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
                        })
                    }
                }
            }
        }
    }
};

</script>