<!-- /.vuepress/components/BlogIndex.vue -->

<template>
<div>
    <div v-for="post in posts">
        <h2>
            <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h2>
        
        <p>{{ post.frontmatter.summary }}</p>

        <p><router-link :to="post.path">Read more</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    props: {
      type: String,
    },
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(`/${this.type}/`) && !x.frontmatter.blog_index)
                .sort((a, b) => a < b?-1:1);
        }
    }
}
</script>
