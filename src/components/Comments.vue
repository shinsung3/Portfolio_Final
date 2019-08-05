<template>

<div >
  <v-layout>
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
      </v-form>
    </v-flex>
  </v-layout>
</div>

</template>

<script>

import FirebaseService from "@/services/FirebaseService";
import axios from "axios";
import PortfolioDetail from "../views/PortfolioDetail.vue";

export default{
    name : "Comments",
    data:() => ({
      portfolios: [],
      id:"",
      fk: "",
      text: "",
      writer:""
    }),
    mounted() {
      this.comments(),
      this.getPortfoliosByIndex();
    },
    methods: {
      async getPortfoliosByIndex() {
        this.id = await FirebaseService.getPortfoliosByIndex(
          this.$route.query.id
        );
      },


      insert(){
        FirebaseService.comments(
          this.id,
          this.fk,
          this.text,
          this.writer
        );
    //     location.href = "pfDetail?id=1o5AELEG4kkxnAIbuzXx";
      }
    }


}


</script>
