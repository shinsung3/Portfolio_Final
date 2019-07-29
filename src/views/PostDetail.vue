<template>
  <div>
    <v-container>
      <v-layout my-5>
        <v-flex xs12 sm8>
          <center>
            <p class="DokdoList font">
              {{ post.title }}
            </p>
          </center>
          <p class="DokdoList subfont">
            {{ post.body }}
            <br />
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import "../CSS/FontColor.css";
import "../CSS/ellipsis.css";
import "../CSS/DokdoFont.css";
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "PostDetail",
  data() {
    return {
      post: []
    };
  },
  mounted() {
    this.getPostByIndex();
  },
  methods: {
    async getPostByIndex() {
      this.post = await FirebaseService.getPostByIndex(this.$route.query.id);
      console.log(this.post)
    },
    loadMorePosts() {}
  }
};
</script>

<style>
.font {
  font-size: 65px;
}

.subfont {
  font-size: 38px;
}
</style>
