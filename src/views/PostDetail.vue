<template>
  <div>
    <v-container id="size">
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
        <v-flex
          align-center
          justify-end
          row
          fill-height
          right
          v-if="
            this.$store.state.userauth == '팀원' ||
              this.$store.state.userauth == '관리자'
          "
        >
          <!-- <v-btn @click="linkToPage" color="info">
            <v-icon>fas fa-user-edit</v-icon><span id="padding">수정</span>
          </v-btn> -->
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                id="hot"
                color="red lighten-2"
                dark
                v-on="on"
              >
                <v-icon>edit</v-icon>&nbsp수정
              </v-btn>
            </template>

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                포스트수정
              </v-card-title>

              <!-- <v-card-text> -->
                <SkillWriter/>
              <!-- </v-card-text> -->

            </v-card>
          </v-dialog>
          <v-btn @click="deleteDB" class="buttonWriter">
            <v-icon>delete</v-icon><span id="padding">삭제</span>
          </v-btn>
        </v-flex>
      </v-form>
      <br>
      <br>
      <br>
      <br>
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
import SkillWriter from "../components/SkillWriter";

export default {
  name: "PostDetail",
  components: {
    Comments,
    SkillWriter
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
    },
    deleteDB() {
      FirebaseService.deletePost(this.post.id);
      this.posts = FirebaseService.getPosts();
      location.href = "/Post";
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
