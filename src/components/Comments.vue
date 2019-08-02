<template>
<div id = "cmt">
  <v-layout>
    <v-flex>
      <v-form ref="form">
        <v-container>
          <v-flex>
            <v-text-field
            v-model="text"
            label="댓글을 써주세요"
            required
            >
            </v-text-field>
          </v-flex>
          <v-flex>
            <v-btn color="success" @click="submit">
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

export default{
    name : "comment",
    data:() => ({
      id:"",
      fk:"",
      text: "",
      writer:""

    }),
    mounted() {
      this.comments();
    },
    methods: {
      submit(){
        FirebaseService.comments(
          this.id,
          this.fk,
          this.text,
          this.writer
        );
         location.href = "psDetail";
      }
    }


}


</script>
