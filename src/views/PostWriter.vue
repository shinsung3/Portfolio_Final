<template>
  <div class="py-3">
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <!-- title -->
            <v-flex px10 py10>
              <v-text-field
                v-model="title"
                :counter="30"
                :rules="titleRules"
                label="제목"
                required
              >
              </v-text-field>
            </v-flex>
            <!-- body -->
            <v-flex px10 py10>
              <markdown-editor v-model="body"></markdown-editor>
            </v-flex>
            <v-flex align-center justify-end row fill-height right>
              <v-btn color="success" @click="submit">
                업로드<img
                  src="https://image.flaticon.com/icons/svg/261/261868.svg"
                  width="35px"
                />
              </v-btn>
              <v-btn @click.stop="reset()" class="buttonWriter" href="/Post">
                취소
              </v-btn>
            </v-flex>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import "../CSS/DokdoFont.css";

export default {
  name: "PostWriter",
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "입력해주세요!",
      v => (v && v.length <= 30) || "30자 이내로 입력해주세요!"
    ],
    body: "",
    post: []
  }),
  components: {
    // ImgBanner
  },
  created() {
    var auth = this.$store.state.userauth;
    if (auth != "관리자" && auth != "팀원") {
      alert("글을 작성할 권한이 없습니다.");
      this.$router.push("/Post");
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getBody(msg) {
      this.body = msg;
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async getPosts() {
      this.post = await FirebaseService.getPosts();
    }
  }
};
</script>

<style>
.buttonWriter {
  float: right;
}

.input_css {
  display: none;
}
</style>
