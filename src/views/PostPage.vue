<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <PostList :limits="limits" :load-more="true" :column="3"></PostList>
        </v-flex>
      </v-layout>
      <v-container>
        <center>
          <v-btn v-if="loadMore" color="info" dark v-on:click="loadMorePosts">
            <v-icon size="25" class="mr-2">fa-plus</v-icon> 더 보기
          </v-btn>
          <v-btn
            v-if="loadLess"
            color="warning"
            dark
            v-on:click="loadLessPosts"
          >
            <v-icon size="25" class="mr-2">fa-angle-double-up</v-icon> 접기
          </v-btn>

          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                id="hot"
                color="red lighten-2"
                dark
                v-on="on"
              >
                <v-icon>border_color</v-icon>&nbsp글쓰기
              </v-btn>
            </template>

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                포스트작성
              </v-card-title>

              <v-card-text>
                <SkillWriter/>
              </v-card-text>

            </v-card>
          </v-dialog>
        </center>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import "../CSS/DokdoFont.css";
import FirebaseService from "@/services/FirebaseService";
import SkillWriter from "../components/SkillWriter";

export default {
  name: "PostPage",
  components: {
    PostList,
    SkillWriter
  },
  props: {
    column: {
      type: Number,
      default: 1
    },
    limits: {
      type: Number,
      default: 13
    },
    loadMore: {
      type: Boolean,
      default: true
    },
    loadLess: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.posts = await FirebaseService.getPosts();
    },
    async loadMorePosts() {
      this.limits = this.posts.length;
      console.log(this.limits)
    },
    async loadLessPosts() {
      this.limits = 13;
    }
  }
};
</script>
