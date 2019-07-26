<template>
  <div>
    <!-- About Me -->
    <v-container>
      <v-layout my-5>
        <v-flex xs12 sm8>
          <center>
            <p class="DokdoList font">
              {{ portfolios.title }}
            </p>
          </center>
          <p class="DokdoList subfont">
            {{ portfolios.body }}
            <br />
          </p>
        </v-flex>
        <v-flex pt-3 mt-5 bt-5>
<<<<<<< HEAD
          <v-img :src="portfolios.img" aspect-ratio="1.0" />
=======
          <v-img
            :src="portfolios.img"
            aspect-ratio="1.0"
          />
>>>>>>> 8ec4246259d6641e079a55aad6a7144185298311
        </v-flex>
      </v-layout>
      <h1 class="DokdoList">
        개발 언어 :
      </h1>
      <h1 class="DokdoList">
        시간 :
      </h1>
      <h1 class="DokdoList">
        인원 :
      </h1>
    </v-container>
  </div>
</template>

<script>
import "../CSS/FontColor.css";
import "../CSS/ellipsis.css";
import "../CSS/DokdoFont.css";
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "PortfolioDetail",
  data() {
    return {
      portfolios: []
    };
  },
  mounted() {
    this.getPortfoliosByIndex();
  },
  methods: {
    async getPortfoliosByIndex() {
      this.portfolios = await FirebaseService.getPortfoliosByIndex(
        this.$route.query.id
      );
      console.log(this.portfolios)
    },
    loadMorePortfolios() {}
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
