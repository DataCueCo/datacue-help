<!-- /.vuepress/components/BlogIndex.vue -->

<template>
  <div>
    <div v-for="post in posts">
      <h3>
        <router-link :to="post.path">{{ post.title }}</router-link>
      </h3>

      <p>{{ post.frontmatter.summary }}</p>

      <p>
        <router-link :to="post.path">{{ lang==='es'?'Más info':'Read more' }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    lang: {
      type: String,
      default: ""
    }
  },
  computed: {
    langStr() {
      return `${this.lang === "" ? "" : "/" + this.lang}`;
    },
    posts() {
      return this.$site.pages
        .filter(
          page =>
            page.path.startsWith(`${this.langStr}/${this.type}/`) &&
            !page.frontmatter.blog_index
        )
        .sort((a, b) => {
          if (
            typeof a.frontmatter.position == "number" &&
            typeof b.frontmatter.position == "number"
          ) {
            return a.frontmatter.position - b.frontmatter.position;
          }
          if (
            typeof a.frontmatter.position == "number" &&
            typeof b.frontmatter.position != "number"
          ) {
            return -1;
          }
          if (
            typeof a.frontmatter.position != "number" &&
            typeof b.frontmatter.position == "number"
          ) {
            return 1;
          }
          if (a.frontmatter.title < b.frontmatter.title) {
            return -1;
          }
          if (a.frontmatter.title > b.frontmatter.title) {
            return 1;
          }
          return 0;
        });
    }
  }
};
</script>
