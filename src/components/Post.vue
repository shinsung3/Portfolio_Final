<template>
  <v-layout py-4 h-100>
    <v-flex row @click="linkToPage" hover>
      <div class="caption">{{ formatedDate }}</div>
      <div class="headline text2">{{ subject.translate }}</div>
      <span class="grey--text text1">{{ content.translate }}</span>
    </v-flex>
  </v-layout>
</template>

<script>
import "../CSS/ellipsis.css";
import Translate from "@/services/Translate";
import EventBus from "../eventBus.js";

export default {
  name: "Post",
  props: {
    date: {
      type: Date
    },
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  computed: {
    formatedDate() {
      return `${this.date.getFullYear()}년 ${this.date.getMonth()}월 ${this.date.getDate()}일`;
    }
  },
  data() {
    return {
      subject: {
        translate: this.title,
        original: this.title
      },
      content: {
        translate: this.body,
        original: this.body
      }
    };
  },
  created() {
    EventBus.$on("translate", language => {
      if (language == "original") {
        this.subject.translate = this.subject.original;
        this.content.translate = this.content.original;
      } else {
        Translate.translate(language, this.subject.original).then(res => {
          this.subject.translate = res;
        });
        Translate.translate(language, this.content.original).then(res => {
          this.content.translate = res;
        });
      }
    });
  }
};
</script>

<style>
.color-666 {
  color: #666;
}

.color-333 {
  color: #333;
}

.h-100 {
  height: 100%;
}
</style>
