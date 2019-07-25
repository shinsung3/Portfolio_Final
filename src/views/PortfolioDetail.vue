<template>
  <div>
    <!-- About Me -->
    <v-container>
      <v-layout my-5>
        <v-flex xs12 sm8>
          <center>
            <p class="DokdoList">
              <b class="font">Title {{ title }}</b>
            </p>
          </center>
          <p class="DokdoList subfont">
            Test

            <br />
          </p>
        </v-flex>
        <v-flex pt-3 mt-5 bt-5>
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            aspect-ratio="1.0"
          />
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
    }
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
