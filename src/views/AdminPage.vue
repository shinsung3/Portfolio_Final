<template>
  <div>
    <v-container>
      <center>
        <h1
          class="DokdoList mt-2"
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '15px',
            maxFontSize: '50px',
            delay: 200
          }"
        >
        관리자 페이지 <i class="fas fa-users-cog"></i>
        </h1>
      </center>
      <v-flex>
        <PostsCount></PostsCount>
      </v-flex>
      <v-flex width="100%">
        <UserList></UserList>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
  import UserList from "../components/UserList";
  import PostsCount from "../components/PostsCount";


  export default {
    name: "Adminpage",
    components: {
      UserList,
      PostsCount
    }
  }
</script>
