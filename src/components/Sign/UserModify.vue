<template>
  <v-dialog v-model="dialogModify" persistent max-width="600px">
    <template v-slot:activator="{ on }" class="DokdoHeader2 mt-3 mr-2">
      <v-btn id="signupval" round color="#ADD8E6" dark v-on="on">
        <b>{{ this.$store.state.user.displayName }}</b>
      </v-btn>

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
              > {{ this.$store.state.user.email }} </span>
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
    </template>
  </v-dialog>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import "../../CSS/DokdoFont.css";

export default {
  name: "UserModify",
  data() {
    return {
      dialogModify: false
    }
  },
  methods: {
    async modify() {
      FirebaseService.modify(this.email, this.password, this.username);
      this.email = "";
      this.password = "";
      this.dialogSignUp = false;
      this.$router.push("/");
    }
  }
}
</script>

<style>
#modaltitle {
  font-size: 250%;
}
#signupval {
  width: 4%;
  color: #2a7189;
}
</style>
