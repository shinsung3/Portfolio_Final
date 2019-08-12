<template>
  <v-dialog v-model="dialogModify" persistent max-width="600px">
    <template v-slot:activator="{ on }" class="DokdoHeader2">
      <v-btn round color="#ADD8E6" dark v-on="on">
        <b>{{ nickname }}</b>
      </v-btn>
    </template>
      <v-card>
        <v-card-title align-center>
          <span id="modaltitle" class="DokdoList">
            회원정보 수정
            <v-icon size="25" color="black">fa-wrench</v-icon>
          </span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-flex xs12>
              <span
                label="Email*"
              > {{ email }} </span>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Password*"
                type="password"
                required
                v-model="password"
              ></v-text-field>
            </v-flex>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey" flat @click="modify">완료</v-btn>
          <v-btn color="blue-grey" flat @click="cancleModify">취소</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import "../../CSS/DokdoFont.css";

export default {
  name: "UserModify",
  data() {
    return {
      dialogModify: false,
      email: "",
      password: "",
      nickname: ""
    }
  },
  mounted() {
    FirebaseService.loginPersistence();
    this.email = this.$store.state.user.email;
    this.nickname = this.$store.state.user.displayName;
  },
  methods: {
    async modify() {
      FirebaseService.userModify(this.password);
      this.password = "";
      this.dialogModify = false;
      this.$router.push("/");
    },
    cancleModify() {
      this.password = "";
      this.dialogModify = false;
    }
  }
}
</script>

<style>
#signupval {
  width: 4%;
  color: #2a7189;
}
</style>
