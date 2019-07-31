<template>
  <v-container align-center>
    <v-flex align-center>
      <v-simple-table fixed-header>
        <thead>
          <tr>
            <th class="text-left">User ID</th>
            <th class="text-left">Authority</th>
            <th class="text-left">Change Auth</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.email">
            <td class="text-xs-center" width="400px">{{ user.email }}</td>
            <td class="text-xs-center" width="400px">
              <span v-if="user.auth == 1111">방문자</span>
              <span v-else-if="user.auth == 2222">팀원</span>
              <span v-else-if="user.auth == 3333">관리자</span>
            </td>
            <td class="text-xs-center" width="400px">
              <v-menu>
                <v-btn slot="activator" color="primary" dark mx-2>
                  <span v-if="user.auth == 1111">방문자 <i class="fas fa-caret-down"></i></span>
                  <span v-else-if="user.auth == 2222">팀원 <i class="fas fa-caret-down"></i></span>
                  <span v-else-if="user.auth == 3333">관리자 <i class="fas fa-caret-down"></i></span>
                </v-btn>
                <v-list>
                  <v-list-tile v-for="authority in authorities" @click="modifyAuthorization(user.email, authority)">
                    <v-list-tile-title>{{ authority }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
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

<style media="screen">
  v-simple-table {
    width:100%;
    height:300px;
    table-layout:fixed;
    border-collapse: collapse;
  }

  th, td {
    border-bottom:1px dotted;
    padding:5px;
  }
</style>
