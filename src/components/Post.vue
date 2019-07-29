<template>
  <v-layout py-4 h-100>
    <v-flex row>
      <v-card @click="linkToPage" hover>
        <div class="paddingSize">
          <div class="caption">{{ formatedDate }}</div>
          <div class="headline text2">{{ subject.translate }}</div>
          <span class="grey--text text1">{{ content.translate }}</span>
        </div>
      </v-card>
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
    },
    id: {
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
      },
      index: {
        id: this.id
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
  },
  methods: {
    linkToPage() {
      this.$router.push("/psDetail?id=" + this.id);
    }
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

.paddingSize {
  padding: 15px;
  background-color: whitesmoke;
}
</style>
