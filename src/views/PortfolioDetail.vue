<template>
  <div>
    <!-- About Me -->
    <v-container>
      <v-layout my-5>
        <v-flex xs12 sm8>
          <center>
            <p class="DokdoList font">
              {{ portfolios.title }}
            </p>
          </center>
          <p class="DokdoList subfont">
            {{ portfolios.body }}
            <br />
          </p>
        </v-flex>
        <v-flex pt-3 mt-5 bt-5>
          <v-img :src="portfolios.img" aspect-ratio="1.0" />
        </v-flex>
      </v-layout>
      <h1 class="DokdoList">개발 언어 : {{ portfolios.language }}</h1>
      <h1 class="DokdoList">기간 : {{ portfolios.complete }}</h1>
      <h1 class="DokdoList">인원 : {{ portfolios.people }}</h1>
      <br />
      <br />
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
          <v-btn @click="linkToPage" color="info">
            <v-icon>fas fa-user-edit</v-icon><span id="padding">수정</span>
          </v-btn>
          <v-btn @click="deleteDB" class="buttonWriter">
            <v-icon>far fa-trash-alt</v-icon><span id="padding">삭제</span>
          </v-btn>
        </v-flex>
      </v-form>
      <br />
      <br />
      <br />
      <br />
      <!-- 댓글 -->
      <Comments />
    </v-container>
  </div>
</template>

<script>
import "../CSS/FontColor.css";
import "../CSS/ellipsis.css";
import "../CSS/DokdoFont.css";
import FirebaseService from "@/services/FirebaseService";
import Comments from "../components/Comments.vue";

export default {
  name: "PortfolioDetail",
  components: {
    Comments
  },
  data: () => ({
    portfolios: [],
    idcomments: [],
    portid: "",
    fk: "",
    text: "",
    writer: "",
    delfk: ""
  }),
  mounted() {
    this.getPortfoliosByIndex();
    this.del();
  },

  methods: {
    async getPortfoliosByIndex() {
      this.portfolios = await FirebaseService.getPortfoliosByIndex(
        this.$route.query.id
      );
    },
    linkToPage() {
      this.$router.push("/pfWriter?id=" + this.$route.query.id);
    },
    async getCommentsByIndex() {
      this.idcomments = await FirebaseService.getCommentsByIndex(
        this.$route.query.id
      );
    },
    deleteDB() {
      FirebaseService.deletePortfolio(this.portfolios.id);
      this.posts = FirebaseService.getPosts();
      location.href = "/Portfolio";
    },
    del(fk) {
      FirebaseService.delcomment(this.$route.query.id, fk);
    }
  }
};
</script>
<style>
.font {
  font-size: 65px;
}

.subfont {
  font-size: 38px;
}

#button1 {
  background-color: antiquewhite;
}
</style>
