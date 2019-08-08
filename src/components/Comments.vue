<template>
  <v-container>
    <v-layout>
      <v-form ref="form">
        <v-flex>
          <v-div>
            <v-text-field v-model="text" label="댓글을 입력해 주세요" required>
            </v-text-field>
          </v-div>
          <v-div>
            <v-btn color="success" @click="insert">
              댓글달기
            </v-btn>
          </v-div>
        </v-flex>

        <v-flex v-for="(i, j) in idcomments.length > limits
            ? limits
            : idcomments.length" :key="j">

          <div>
            <v-list-item>
              <v-list-item-content v-if="idcomments[i - 1].portid == thisid">
                <div class="overline"><v-chip class="ma-2"><strong>{{ idcomments[i - 1].writer }}</strong></v-chip> {{ idcomments[i - 1].created_at | moment("YYYY년 MM월 DD일")}}</div>
                <v-list-item-subtitle class="ma-3">{{ idcomments[i - 1].text }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions v-if="idcomments[i - 1].writer == thislogin">
              <v-btn @click="del(idcomments[i - 1].id)">삭제</v-btn>
              <v-btn @click="함수명(idcomments[i - 1].id)">수정</v-btn>
            </v-card-actions>
          </div>

        </v-flex>

      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import axios from "axios";
import PortfolioDetail from "../views/PortfolioDetail.vue";

export default {
  name: "Comments",
  data: () => ({
    idcomments: [],
    portid: "",
    fk: "",
    text: "",
    writer: "",
    thisid: "",
    thisurl: "",
    thislogin:""
  }),
  mounted() {
    this.getcommentsByIndex();
    this.comments();
    this.delcomment();
  },
  methods: {
    async getcommentsByIndex() {
      this.idcomments = await FirebaseService.getcommentsByIndex(
        this.$route.query.id
      );
      this.thisid = this.$route.query.id
      this.thislogin =  this.$store.state.user.displayName
    },

    insert(portid) {
      if (this.idcomments.length == 0) {
        this.thisurl = document.location.href
        this.portid = FirebaseService.comments(
          this.portid = this.$route.query.id,
          this.fk = 1,
          this.text,
          this.writer = this.$store.state.user.displayName,
        )
        location.href = this.thisurl
      } else {
        this.thisurl = document.location.href
        this.portid = FirebaseService.comments(
          this.portid = this.$route.query.id,
          this.idcomments[0].fk + 1,
          this.text,
          this.writer = this.$store.state.user.displayName,
        )
        location.href = this.thisurl
      }
    },
    del(id) {
      this.thisurl = document.location.href
      this.portid = FirebaseService.delcomment(id);
      location.href = this.thisurl
    },
  }


}
</script>

<style media="screen">
  .comments {
    border-color: transparent!important;
  }
</style>
