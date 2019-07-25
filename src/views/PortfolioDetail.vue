<template>
  <v-app>
    <v-parallax
      height="1000"
      dark
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <v-layout column justify-center>
        <h1 class="display-2 font-weight-thin mb-4"><b>Title</b></h1>
        <h4 class="subheading">현일오빠가 만들면 여기서 받아볼게요!</h4>
      </v-layout>
    </v-parallax>
  </v-app>
</template>

<script>
import "../CSS/DokdoFont.css";

export default {
  name: "PortfolioDetail",
  data() {
    return {};
  }
};
</script>
