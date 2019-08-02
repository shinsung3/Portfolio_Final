<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
    >
      <template v-slot:items="props">
        <td>{{ props.item.email }}</td>
        <td>
          <span v-if="props.item.auth == 1111">&nbsp방문자</span>
          <span v-else-if="props.item.auth == 2222">&nbsp팀원</span>
          <span v-else-if="props.item.auth == 3333">&nbsp관리자</span>
        </td>
        <td>
          <v-menu>
            <v-chip slot="activator" color="green" dark mx-2>
              <span v-if="props.item.auth == 1111">방문자 <i class="fas fa-caret-down"></i></span>
              <span v-else-if="props.item.auth == 2222">팀원 <i class="fas fa-caret-down"></i></span>
              <span v-else-if="props.item.auth == 3333">관리자 <i class="fas fa-caret-down"></i></span>
            </v-chip>
            <v-list>
              <v-list-tile v-for="authority in authorities" @click="modifyAuthorization(props.item.email, authority)">
                <v-list-tile-title>{{ authority }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import FirebaseService from "@/services/FirebaseService";

  export default {
    name: "UserList",
    data() {
      return {
        users: [],
        authorities: ['방문자', '팀원', '관리자'],
        search: '',
        headers: [
          { text: 'User ID', value: 'email' },
          { text: 'Authority', value: 'auth' },
          { text: 'Change Auth', value: 'auth' },
        ],
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
