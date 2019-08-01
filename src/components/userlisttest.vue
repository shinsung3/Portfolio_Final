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
              <v-chip slot="activator" color="green" dark mx-2>
                <span v-if="user.auth == 1111">방문자 <i class="fas fa-caret-down"></i></span>
                <span v-else-if="user.auth == 2222">팀원 <i class="fas fa-caret-down"></i></span>
                <span v-else-if="user.auth == 3333">관리자 <i class="fas fa-caret-down"></i></span>
              </v-chip>
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
