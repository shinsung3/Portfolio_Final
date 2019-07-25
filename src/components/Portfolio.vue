<template>
  <v-card>
    <router-link to="/pfDetail" :title="title">
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

<script>
import "../CSS/ellipsis.css";

export default {
  name: "Portfolio",
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
  },
  data() {
    return {};
  }
};
</script>
