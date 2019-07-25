<template>
  <v-card>
    <router-link to="/pfDetail" :title="title">
      <v-img :src="imgSrc" height="200px" />
      <v-card-title primary-title>
        <div class="headline text2">
          <strong>{{ subject.translate }}</strong>
        </div>
      </v-card-title>
      <v-card-text class="grey--text text1">
        <div class="grey-text text1">{{ content.translate }}</div>
      </v-card-text>
    </router-link>
  </v-card>
</template>

<script>
import "../CSS/ellipsis.css";
import Translate from "@/services/Translate";
import EventBus from "../eventBus.js";

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
    return {
      subject :{
        translate : this.title,
        original : this.title
      },
      content :{
        translate : this.body,
        original : this.body
      }
    };
  },
  created(){
    EventBus.$on("translate", (language)=>{
      if (language == "original"){
        this.subject.translate = this.subject.original
        this.content.translate = this.content.original
      }
      else {
        Translate.translate(language, this.subject.original)
        .then((res)=>{
          this.subject.translate = res
        })
        Translate.translate(language, this.content.original)
        .then((res)=>{
          this.content.translate = res
        })
      }
    })
  }
};
</script>
