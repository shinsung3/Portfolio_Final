<template>
  <v-container>
    <v-layout mt-5 wrap id="PortfolioMain">
      <carousel-3d :controls-visible="true" :clickable="false">
        <slide v-for="(i, j) in slides" :index="j" :key="j">
          <Portfolio
            :title="portfolios[i - 1].title"
            :body="portfolios[i - 1].body"
            :imgSrc="portfolios[i - 1].img"
            :uk="portfolios[i - 1].uk"
            :id="portfolios[i - 1].id"
          >
          </Portfolio>
        </slide>
      </carousel-3d>
    </v-layout>
  </v-container>
</template>

<script>
import Portfolio from "@/components/Portfolio/Portfolio";
import FirebaseService from "@/services/FirebaseService";
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  new : "#PortfolioMain",
  data() {
    return {
      portfolios: [],
      slides:""
    }
  },
  components: {
    Portfolio,
    Carousel3d,
    Slide
  },
  mounted() {
    this.getPortfolios();
  },
  methods: {
    async getPortfolios() {
      this.portfolios = await FirebaseService.getPortfolios();
      this.slides = this.portfolios.length;
    },
  }
};
</script>
<style>

.carousel-3d-container {
  margin:0;
}

</style>
