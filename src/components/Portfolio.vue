<template>
  <v-card>
    <router-link to="/pfDetail">
      <v-img :src="imgSrc" height="200px" />
      <v-card-title primary-title>
        <div class="headline text2">
          <strong>{{ title }}</strong>
        </div>
      </v-card-title>
      <v-card-text class="grey--text text1">
        <div class="grey-text text1">{{ body }}</div>
      </v-card-text>
    </router-link>
  </v-card>
</template>

<script src="https://kit.fontawesome.com/0815a79704.js"></script>
<script>
import "../CSS/ellipsis.css";
import TransComponent from "./Translate.vue";
import Detail from "../views/PortfolioDetail.vue";

export default {
  components:{
    TransComponent
  },
  name: 'Portfolio',
  props: {
    date: {
      type: String
    },
    title: {
      type: String
    },
    body: {
      type: String
    },
    imgSrc: {
      type: String
    },
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
