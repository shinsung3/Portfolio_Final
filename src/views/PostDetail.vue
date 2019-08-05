<template>
  <div>
    <v-container>
      <v-layout my-5>
        <v-flex xs12 sm8>
          <center>
            <p class="DokdoList font">
              {{ post.title }}
            </p>
          </center>
          <p class="DokdoList subfont">
            {{ post.body }}
            <br />
          </p>
        </v-flex>
      </v-layout>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex align-center justify-end row fill-height right>
          <v-btn @click="linkToPage">
            <v-icon>fas fa-user-edit</v-icon><span id="padding">수정</span>
          </v-btn>
          <v-btn @click.stop="reset()" class="buttonWriter" href="/Post">
            <v-icon>far fa-trash-alt</v-icon><span id="padding">삭제</span>
          </v-btn>
        </v-flex>
      </v-form>
      <Comments />
    </v-container>
  </div>
</template>

<script>
import "../CSS/FontColor.css";
import "../CSS/ellipsis.css";
import "../CSS/DokdoFont.css";
import "../CSS/btn.css";
import FirebaseService from "@/services/FirebaseService";
import Comments from "../components/Comments.vue";

export default {
  name: "PostDetail",
  components: {
    Comments
  },
  data() {
    return {
      post: []
    };
  },
  mounted() {
    this.getPostByIndex();
  },
  methods: {
    async getPostByIndex() {
      this.post = await FirebaseService.getPostByIndex(this.$route.query.id);
    },
    linkToPage() {
      this.$router.push("/psWriter?id=" + this.$route.query.id);
    }
  }
};
</script>

<style>
.font {
  font-size: 100px;
}

.subfont {
  font-size: 38px;
}
</style>
