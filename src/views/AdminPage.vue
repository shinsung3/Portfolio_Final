<template>
  <div>
    <v-container>
      <center>
        <h1
          class="DokdoList"
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '15px',
            maxFontSize: '50px',
            delay: 200
          }"
        >
          <img
            src="https://image.flaticon.com/icons/svg/78/78948.svg"
            width="50px"
          />
          &nbsp 관리자 페이지
        </h1>
      </center>
      <v-flex width="100%">
        <UserList></UserList>
      </v-flex>
      <v-flex>
        <PostsCount></PostsCount>
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
