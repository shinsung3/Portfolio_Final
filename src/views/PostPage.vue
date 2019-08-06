<template>
  <div>
    <v-container id="size1">
      <v-layout>
        <v-flex xs12>
          <PostList :limits="15" :load-more="true" :column="3"></PostList>
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

<style>
#size1 {
  width: 1300px;
}
</style>
