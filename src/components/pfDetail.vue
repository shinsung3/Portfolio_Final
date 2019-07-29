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
    },
    language{
      type: String
    },
    complete{
      type: String
    },
    people{
      type: String
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
      },
      language{
        language: this.language
      },
      complete{
        complete: this.complete
      },
      people{
        people: this.people
      }
    };
  }
};
</script>
