<template>
  <v-container>
    <div>
      <strong>{{ subject.title }}</strong>
    </div>
    <div>
      {{ content.body }}
    </div>
  </v-container>
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
    },
    uk: {
      type: Number
    }
  },
  data() {
    return {
      subject: {
        title: this.title
      },
      content: {
        body: this.body
      },
      index: {
        index: this.uk
      }
    };
  }
};
</script>
