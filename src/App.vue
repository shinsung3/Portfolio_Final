<template>
  <v-app>
    <title>할할놀놀</title>
    <v-content>
      <Header />
      <router-view />
      <Chatbot />
      <Top />
      <Language />
      <Footer />
    </v-content>
  </v-app>
</template>

<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>

<script>
// main.js
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import VueResizeText from "vue-resize-text";

Vue.use(VueResizeText);

Vue.use(Vuetify, {
  iconfont: "md"
});

Vue.use(require("vue-moment"));

import store from "./store";
import Header from "./components/Function/Header.vue";
import Top from "./components/Function/Top.vue";
import Footer from "./components/Function/Footer.vue";
import Chatbot from "./components/Function/ChatBot.vue";
import Language from "./components/Function/Language.vue";

export default {
  name: "App",
  components: {
    Header,
    Top,
    Footer,
    Chatbot,
    Language
  },
  store,
  data() {
    return {};
  }
};
</script>
