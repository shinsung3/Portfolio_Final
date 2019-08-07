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
        <v-flex
          v-for="(i, j) in idcomments.length > limits
            ? limits
            : idcomments.length"
          :key="j"
        >
          {{ idcomments[i - 1].text }}
          {{ idcomments[i - 1].created_at }}
          {{ idcomments[i - 1].writer }}
          {{ idcomments[i - 1].fk }}

          <v-btn color="red" @click="del(idcomments[i - 1].id)">
            삭제
          </v-btn>
        </v-flex>




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
      idcomments: [],
      portid:"",
      fk: "",
      text: "",
      writer:""
    }),
    mounted() {
      this.getPcommentsByIndex();
      this.pcomments();
      this.delPcomment();
    },
    methods: {
      async getPcommentsByIndex() {
        this.idcomments = await FirebaseService.getPcommentsByIndex(
          this.$route.query.id
        );
      },

      insert(portid) {
        if (this.idcomments.length == 0) {
          this.portid = FirebaseService.pcomments(
            this.portid = this.$route.query.id,
            this.fk = 1,
            this.text,
            this.writer = this.$store.state.user.displayName,
          )
          location.href = "/psDetail?id=" + this.portid
        } else {
          this.portid = FirebaseService.pcomments(
            this.portid = this.$route.query.id,
            this.idcomments[0].fk + 1,
            this.text,
            this.writer = this.$store.state.user.displayName,
          )
          location.href = "/psDetail?id=" + this.portid
        }
      },
      del(id) {
        this.portid = FirebaseService.delPcomment(this.$route.query.id, id);
        location.href = "/psDetail?id=" + this.portid
      },
    }


}


</script>
