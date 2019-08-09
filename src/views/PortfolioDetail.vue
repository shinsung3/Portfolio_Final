<template>
  <div>
    <ImgBanner portfolio="portfolios" imgSrc="portfolios.img" :check="false">
      <h3
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '30px',
          maxFontSize: '100px',
          delay: 200
        }"
        slot="text"
        id=".font-weight-regular.font-italic"
        class="typing DokdoFont"
      >
        {{ portfolios.title }}
      </h3>
    </ImgBanner>
    <v-container>
      <!-- <v-layout my-5>
        <v-flex xs12 sm8> -->
      <!-- <center>
        <p class="DokdoList font">
          {{ portfolios.title }}
        </p>
      </center> -->
          <!-- <p class="DokdoList subfont">
            {{ portfolios.body }}
            <br /> -->
          <!-- </p> -->
          <!-- <v-card light>
            <v-card-text>
              <h1>내용</h1>
              <hr />
              <viewer :value="portfolios.body" />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex pt-3 mt-5 bt-5>
          <v-img :src="portfolios.img" aspect-ratio="1.0" />
        </v-flex>
      </v-layout> -->
      <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
        <v-layout wrap row>
          <v-layout>
            <v-flex xs12>
              <viewer :value="portfolios.body" />
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>

      <br />
      <br />
      <br />
      <h1>개발 상세 정보</h1>
      <div>
        <b>개발 언어 : {{ portfolios.language }}</b>
      </div>
      <div>
        <b>기간 : {{ portfolios.complete }}</b>
      </div>
      <div>
        <b>인원 : {{ portfolios.people }}</b>
      </div>
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
import ImgBanner from "../components/Function/ImgBanner";

export default {
  name: "PortfolioDetail",
  components: {
    Comments,
    ImgBanner
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
