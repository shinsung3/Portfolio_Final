<template>
  <div id="disqus_thread"></div>
</template>
<script>
export default {
  name: "Comments",
  mounted() {
    this.getComments();
  },
  methods: {
    getComments() {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://halhalnolnol.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    }
  }
};
</script>
