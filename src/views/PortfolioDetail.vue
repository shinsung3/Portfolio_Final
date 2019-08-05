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
      <!-- <Comments /> -->
      <v-flex>
        <v-form ref="form">
          <v-container>
            <v-flex>
              <v-text-field
              v-model="text"
              label="댓글을 입력해 주세요"
              required
              >
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-btn color="success" @click="insert">
                댓글달기
              </v-btn>
            </v-flex>
          </v-container>
          <p>
            {{ portfolios.body }}
            {{ idcomments.text }}
            <br />
          </p>
        </v-form>
      </v-flex>



    </v-container>
  </div>


</template>

<script>
import "../CSS/FontColor.css";
import "../CSS/ellipsis.css";
import "../CSS/DokdoFont.css";
import Comments from "../components/Comments.vue";
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "PortfolioDetail",
  // components: {
  //   Comments
  // },
  data() {
    return {
      portfolios: [],
      idcomments:[]
    };
  },
  data:() => ({
    portfolios: [],
    idcomments:[],
    id:"",
    fk: "",
    text: "",
    writer:""
  }),
  mounted() {
    this.getPortfoliosByIndex();
    this.getCommentsByIndex();
    this.comments();
  },

  methods: {
    async getPortfoliosByIndex() {
      this.portfolios = await FirebaseService.getPortfoliosByIndex(
        this.$route.query.id
      )
    },
    async getCommentsByIndex(){
      this.idcomments = await FirebaseService.getCommentsByIndex(
        this.portfolios.id
      )
      console.log(  this.portfolios.id)
    },
    insert(){
      FirebaseService.comments(
        this.id = this.portfolios.id,
        this.fk,
        this.text,
        this.writer
      )
    },

       // location.href = "pfDetail?id={{this.portfolios.id}}";
    loadMorePortfolios() {}
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
</style>
