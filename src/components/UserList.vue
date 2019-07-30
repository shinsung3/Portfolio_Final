<template>
  <v-container>
    <v-flex v-for="user in users">
      <div>
        <span>{{ user.email }}</span> &nbsp &nbsp <span v-if="user.auth == 1111">방문자</span> &nbsp &nbsp
        <div class="text-xs-center">
          <v-menu offset-y>
            <v-btn slot="activator" color="primary" dark>{{ selauth }}</v-btn>
            <v-list>
              <v-list-tile v-for="authority in authorities" :key="index" @click="selauth = authority">
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
        authorities: ["방문자", "팀원", "관리자"],
        selauth: ''
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
