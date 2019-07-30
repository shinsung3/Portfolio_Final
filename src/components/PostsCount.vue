<template>
  <v-container>
    <v-flex>
      <div>
        <span>포트폴리오 수</span>
        <span>{{ this.portfolios.length }}</span>
      </div>
      <div>
        <span>포스트 수</span>
        <span>{{ this.posts.length }}</span>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
  import FirebaseService from "@/services/FirebaseService";

  export default {
    name: "PostsCount",
    data() {
      return {
        portfolios: [],
        posts: []
      }
    },
    mounted() {
      this.getPortfolios();
      this.getPosts();
    },
    methods: {
      async getPortfolios() {
        this.portfolios = await FirebaseService.getPortfolios();
      },
      async getPosts() {
        this.posts = await FirebaseService.getPosts();
      },
    }
  }
</script>
