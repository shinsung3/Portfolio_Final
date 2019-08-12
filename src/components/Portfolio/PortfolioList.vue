<template>
  <v-container>
    <v-layout mt-5 wrap>
      <v-flex
        v-for="(i, j) in portfolios.length > limits
          ? limits
          : portfolios.length"
        :key="j"
        xs12
        sm6
        lg3
      >
        <Portfolio
          class="ma-3"
          :title="portfolios[i - 1].title"
          :body="portfolios[i - 1].body"
          :imgSrc="portfolios[i - 1].img"
          :uk="portfolios[i - 1].uk"
          :id="portfolios[i - 1].id"
        >
        </Portfolio>
      </v-flex>

      <v-flex xs12 text-xs-center round my-5 v-if="loadMore">
        <v-btn
          v-if="loadMore"
          color="info"
          dark
          v-on:click="loadMorePortfolios"
        >
          <v-icon size="25" class="mr-2">fa-plus</v-icon>더 보기
        </v-btn>
        <v-btn
          v-if="loadLess"
          color="warning"
          dark
          v-on:click="loadLessPortfolios"
        >
          <v-icon size="25" class="mr-2">fa-angle-double-up</v-icon>접기
        </v-btn>
        <v-btn
          id="hot"
          to="/pfWriter"
          v-if="
            this.$store.state.userauth == '팀원' ||
              this.$store.state.userauth == '관리자'
          "
        >
          <img
            src="https://image.flaticon.com/icons/svg/1865/1865689.svg"
            width="30px"
          />
          <span id="padding"><b>글쓰기</b></span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vueperslides"></script>
<script>
import Portfolio from "@/components/Portfolio/Portfolio";
import FirebaseService from "@/services/FirebaseService";
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  name: "PortfoliosList",
  props: {
    limits: {
      type: Number,
      default: 4
    },
    loadMore: {
      type: Boolean,
      default: false
    },
    loadLess: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      portfolios: []
    };
  },
  components: {
    Portfolio,
    VueperSlides,
    VueperSlide
  },
  mounted() {
    this.getPortfolios();
  },
  methods: {
    async getPortfolios() {
      this.portfolios = await FirebaseService.getPortfolios();
    },
    async loadMorePortfolios() {
      this.limits = this.portfolios.length;
    },
    async loadLessPortfolios() {
      this.limits = 8;
    }
  }
};
</script>
<style>
.mw-700 {
  max-width: 700px;
  margin: auto;
}

#hot {
  background-color: hotpink;
  color: white;
}
</style>
