<template>
  <v-container>
    <v-flex v-for="user in users">
      <div>
        <span>{{ user.email }}</span> &nbsp &nbsp <span v-if="user.auth == 1111">방문자</span> &nbsp &nbsp <v-btn @click="modifyAuthorization(user.email, '팀원')">변경</v-btn>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
  import FirebaseService from "@/services/FirebaseService";

  export default {
    name: "UserList",
    data() {
      return {
        users: []
      };
    },
    mounted() {
      this.getUserList();
    },
    methods: {
      async getUserList() {
        this.users = await FirebaseService.getAuthorization();
      },
      modifyAuthorization(email, auth) {
        if(auth == "방문자")
          FirebaseService.modifyAuthorization(email, 1111);
        else if(auth == "팀원")
          FirebaseService.modifyAuthorization(email, 2222);
        else if(auth == "관리자")
          FirebaseService.modifyAuthorization(email, 3333);
      }
    }
  }

</script>
