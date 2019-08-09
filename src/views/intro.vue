<template>
  <div>
    <ImgBanner
      :check="2"
      imgSrc="https://cdn.clien.net/web/api/file/F01/6952088/6288e96812d908.jpg?w=780&h=30000"
    >
      <h3
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '30px',
          maxFontSize: '100px',
          delay: 200
        }"
        slot="text"
        id=".font-weight-regular.font-italic"
        class="typing DokdoFont"
      >
        말은 쉽지, 코드를 보여줘.
      </h3>
      <br />
      <div
        class="typing DokdoSubTitle"
        slot="text"
        id=".font-weight-regular.font-italic"
      >
        Talk is cheap. Show me the code.
      </div>
    </ImgBanner>
  </div>
</template>

<script>
import "../CSS/FontColor.css";
import ImgBanner from "../components/Function/ImgBanner";
import PortfolioList from "../components/Portfolio/PortfolioList";
import PostList from "../components/Post/PostList";
import RepositoryList from "../components/Repository/RepositoryList";
import "../CSS/ellipsis.css";
import "../CSS/DokdoFont.css";
import Translate from "@/services/Translate";
import EventBus from "../eventBus.js";
// import "../CSS/notofont.css";

export default {
  name: "HomePage",
  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList
  },
  data: () => ({
    output: {
      introduce: "",
      original: ""
    },
    content: {
      introduce:
        "안녕하세요. 저희는 <strong>할할놀놀</strong>이라는 팀이구요.<br>나원 Park은 Python천재입니다.<br>녹구 Kim은 새로운 팀으로 이직했구요.<br>현일 Kim은 백준 순위가 젤 높습니다.<br>훈석 Choi는 나이 is the bigger than everybody<br>신성 Jo는 Java 할 줄 알아요.",
      original:
        "안녕하세요. 저희는 <strong>할할놀놀</strong>이라는 팀이구요.<br>나원 Park은 Python천재입니다.<br>녹구 Kim은 새로운 팀으로 이직했구요.<br>현일 Kim은 백준 순위가 젤 높습니다.<br>훈석 Choi는 나이 is the bigger than everybody<br>신성 Jo는 Java 할 줄 알아요."
    },
    items: [
      {
        id: 1,
        name: "조신성",
        body:
          "저는 12조가 너무 마음에 들구요. 이번에 Best Member로 뽑혔어욬ㅋㅋ",
        enbody:
          " I really like our team and I was chosen as the Best Member last time. haha"
      },
      {
        id: 2,
        name: "박나원",
        body:
          "저는 삽질을 많이하지만 그러다보면 실력이 좋아지지 않을까 믿고 있습니다! ...",
        enbody:
          "I messed up a lot, but I believe I'll improve my skills soon! ..."
      },
      {
        id: 3,
        name: "최훈석",
        body: "저는 오래걸리지만 확실하게 알고 넘어갑니다!!",
        enbody:
          "It takes me a long time to work, but I know exactly what I'm going to do!!"
      },
      {
        id: 4,
        name: "김현일",
        body:
          "열정에 비해 실력은 많이 모자라지만 이번 기회를 통해 실력을 많이 성장시키고자 합니다 화이팅~~!!",
        enbody:
          "I'm not good enough for my passion, but I want to use this opportunity to improve my skills. Fighting!"
      },
      {
        id: 5,
        name: "김녹구",
        body: "새로운 회사로 이직...",
        enbody: "Move to a new company..."
      }
    ],
    title: "Simple Title",
    options: { body: "Simple piece of body text.\nSecond line of body text :)" }
  }),
  mounted() {
    this.output = this.content;
    registration.showNotification(this.title, this.options);
  },
  created() {
    EventBus.$on("translate", language => {
      if (language == "original") {
        this.lang = language;
        this.output.introduce = this.content.original;
      } else {
        this.lang = language;
        Translate.translate(language, this.content.original).then(res => {
          this.output.introduce = res;
        });
      }
    });
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    }
  }
};
</script>

<style>
#postColor {
  background-color: #ffe3b1;
}

#gitColor {
  background-color: ##aaebcb;
}

.typing {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
