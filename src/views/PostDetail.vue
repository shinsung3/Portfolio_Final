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
    <!-- <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex align-center justify-end row fill-height right>
          <v-btn @click="linkToPage">
            <v-icon>fas fa-user-edit</v-icon><span id="padding">수정</span>
          </v-btn>
          <v-btn @click="deleteDB" class="buttonWriter">
            <v-icon>far fa-trash-alt</v-icon><span id="padding">삭제</span>
          </v-btn>
        </v-flex>
      </v-form> -->
    <!-- 댓글 -->
    <v-flex>
      <v-form ref="form">
        <v-container>
          <v-flex>
            <v-text-field v-model="text" label="댓글을 입력해 주세요" required>
            </v-text-field>
          </v-flex>

          <v-flex>
            <v-btn color="success" @click="insert">
              댓글달기
            </v-btn>
          </v-flex>
        </v-container>
        <v-flex v-for="(i, j) in idPcomments.length > limits ? limits : idPcomments.length" :key="">
          {{idPcomments[i -1].text}}
          {{idPcomments[i -1].created_at}}
          {{idPcomments[i -1].writer}}
          {{idPcomments[i-1].fk}}

          <v-btn color="red" @click="del(idPcomments[i -1].id)">
            삭제
          </v-btn>
        </v-flex>
      </v-form>
    </v-flex>
  </v-container>
</div>
</template>

<script>
import "../CSS/FontColor.css";
import "../CSS/ellipsis.css";
import "../CSS/DokdoFont.css";
import "../CSS/btn.css";
import FirebaseService from "@/services/FirebaseService";
//import Comments from "../components/Comments.vue";

export default {
  name: "PostDetail",

  data() {
    return {
      post: [],
      idPcomments: [],
      portid: "",
      fk: "",
      text: "",
      writer: "",
      delfk: ""
    };
  },
  mounted() {
    this.getPostByIndex();
    this.getPcommentsByIndex();
    this.pcomments();
    this.del();
  },
  methods: {
    async getPostByIndex() {
      this.post = await FirebaseService.getPostByIndex(this.$route.query.id);
    },
    async getPcommentsByIndex() {
      this.idPcomments = await FirebaseService.getPcommentsByIndex(
        this.$route.query.id
      )
    },
    linkToPage() {
      this.$router.push("/psWriter?id=" + this.$route.query.id);
    },
    deleteDB() {
      FirebaseService.deletePost(this.post.id);
      this.posts = FirebaseService.getPosts();
      location.href = "/Post";
    },
    insert() {
      if (this.idPcomments.length <= 0) {

        this.portid = FirebaseService.pcomments(
          this.portid = this.post.id,
          this.fk = 1,
          this.text,
          this.writer = this.$store.state.user.displayName
        )
        location.href = "/psDetail?id=" + this.portid
      } else {
        this.portid = FirebaseService.pcomments(
          this.portid = this.post.id,
          this.idPcomments[0].fk + 1,
          this.text,
          this.writer = this.$store.state.user.displayName
        )
        location.href = "/psDetail?id=" + this.portid
      }
    },
    del(id) {
      this.portid = FirebaseService.delPcomment(this.$route.query.id, id)
      location.href = "/psDetail?id=" + this.portid
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
