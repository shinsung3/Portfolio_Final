<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <PostList :limits="12" :load-more="true" :column="3"></PostList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import "../CSS/DokdoFont.css";

export default {
  name: "PostPage",
  components: {
    PostList
  }
};
</script>
