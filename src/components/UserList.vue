<template>
  <v-container>
    <v-flex v-for="user in users">
      <div>
        <span>{{ user.email }}</span>
        &nbsp &nbsp
        <span v-if="user.auth == 1111">방문자</span>
        <span v-else-if="user.auth == 2222">팀원</span>
        <span v-else-if="user.auth == 3333">관리자</span>
        &nbsp &nbsp
        <div class="text-xs-center">
          <v-menu offset-y>
            <v-btn slot="activator" color="primary" dark>
              <span v-if="user.auth == 1111">방문자</span>
              <span v-else-if="user.auth == 2222">팀원</span>
              <span v-else-if="user.auth == 3333">관리자</span>
            </v-btn>
            <v-list>
              <v-list-tile v-for="authority in authorities" @click="modifyAuthorization(user.email, authority)">
                <v-list-tile-title>{{ authority }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
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
        users: [],
        authorities: ['방문자', '팀원', '관리자']
      };
    },
    mounted() {
      this.getUserList();
    },
    methods: {
      async getUserList() {
        this.users = await FirebaseService.getAuthorization();
      },
      async modifyAuthorization(email, auth) {
        if(auth == "방문자")
          FirebaseService.modifyAuthorization(email, 1111);
        else if(auth == "팀원")
          FirebaseService.modifyAuthorization(email, 2222);
        else if(auth == "관리자")
          FirebaseService.modifyAuthorization(email, 3333);
        this.users = await FirebaseService.getAuthorization();
      }
    }
  }

</script>
