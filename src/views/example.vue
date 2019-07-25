<template>
  <div>
    <ImgBanner>
      <div class="slogan" :class="$mq" style="line-height:1.2em;" slot="text">{{ImgBanner_text.introduce}}</div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5>
        <v-flex xs12 class="about_me_txt" :class="$mq">
          <v-menu offset-y>
            <v-btn slot="activator" color="info" dark>About Me ▼</v-btn>
            <v-list>
              <v-list-tile v-for="(item, index) in items" :key="index" @click=''>
                <v-list-tile-title @click="Change(item.name, index)">{{ item.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
            <p class="mr-4" v-model="output" style="padding:30px;" v-html="output.introduce"></p>
        </v-flex>
        <v-flex xs12 sm6 md4 class="about_me_img" :class="$mq">
          <v-img :src="getImgUrl(this.imgname)" aspect-ratio="0.8"/>
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center"><router-link :to="{ name: 'portfolio' }" tag="none">Portfolio</router-link></h2>
          <PortfolioList></PortfolioList>
        </v-flex>

      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center"><router-link :to="{ name: 'post' }" tag="none">Post</router-link></h2>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>

      <!--contributors-->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Members</h2>
          <GitContributors></GitContributors>
        </v-flex>
      </v-layout>

      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Project</h2>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>

      <!--Git Graph-->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">GitGraph</h2>
          <GitGraph></GitGraph>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>

import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'

import GitlabService from '@/services/GitlabService'
import GitContributors from '@/components/GitContributors'
import GitGraph from '@/components/GitGraph'
import Translate from '@/services/Translate'
import EventBus from "../eventBus.js"

export default {
  name: 'HomePage',
  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList,
    GitContributors,
    GitGraph
  },
  data() {
    return {
      gitlabData: {},
      lang : 'original',
      languages :
      {
        original:['한글','영어','일본어','중국어'],
        korean:['한글','영어','일본어','중국어'],
        english:['korean','english','japanese','chinese'],
        japanese:['韓国語','英語','日本','中国'],
        chinese:['朝鲜的','英语','日本','中国'],
      },
      ImgBanner_text :
      {
        introduce:'Where do you want to go today?',
        original : 'Where do you want to go today?',
      },
      inx : 0,
      output:
        {introduce: '',
        original : '',
        },
      newSrc: '',
      items: [
        { name: '백진선' },
        { name: '정준영' },
        { name: '류승환' },
        { name: '정우빈' },
        { name: '차상권' }
      ],
      content:[
        {introduce:'안녕하세요. 웹개발자를 준비하고있는 백진선입니다. <br><br><전공><br> 컴퓨터 통계학<br> <언어> <br> Java(중), JavaScript(중), JQuery(중),Vue.js(하), R(중)<br> <DB> MySql(중)<br> <통계><br> SPSS(상), SAS(중)<br> <br> 알고리즘을 굉장히 좋아하고 잘합니다.  SQL Query를 잘 다루고, Spring을 이용한 프로젝트를 진행하였습니다. <br><br> e-mail : mse1163@hanmail.net',
        original : '안녕하세요. 웹개발자를 준비하고있는 백진선입니다. <br><br><전공><br> 컴퓨터 통계학<br> <언어> <br> Java(중), JavaScript(중), JQuery(중),Vue.js(하), R(중)<br> <DB> MySql(중)<br> <통계><br> SPSS(상), SAS(중)<br> <br> 알고리즘을 굉장히 좋아하고 잘합니다.  SQL Query를 잘 다루고, Spring을 이용한 프로젝트를 진행하였습니다. <br><br> e-mail : mse1163@hanmail.net',
        },
        {introduce:'안녕하세요 웹 개발자 정준영입니다. Java와 Spring에 자신이 있습니다. <br><br> 학교 : 조선대학교 컴퓨터공학과 졸업 <br> 교육이수 : 삼성 청년 소프트웨어 아카데미 1기 <br> 언어 : Java, Spring, Vue.js, jsp, jQuery 등 <br> 특징 : 학점머신 <br><br>e-mail : enter4836@naver.com',
        original : '안녕하세요 웹 개발자 정준영입니다. Java와 Spring에 자신이 있습니다. <br><br> 학교 : 조선대학교 컴퓨터공학과 졸업 <br> 교육이수 : 삼성 청년 소프트웨어 아카데미 1기 <br> 언어 : Java, Spring, Vue.js, jsp, jQuery 등 <br> 특징 : 학점머신 <br><br>e-mail : enter4836@naver.com',
        },
        {introduce:'안녕하세요. 류승환입니다.<br><br> < 언어 ><br> - Java(중상), JavaScript(중하), python(하), Vue.js(하), html(하), jsp(하), CSS(하) <br><br>< DB ><br>- MySQL(하), MyBatis(하)<br><br>< 사용 가능 툴 ><br>Spring Framework, eclipse, github<br><br>저는 알고리즘과 자료구조에 대한 역량이 있고 자바를 기반으로 하는 프로그래밍에 특히 자신 있습니다.<br><br>e-mail : shr2833@naver.com',
        original : '안녕하세요. 류승환입니다.<br><br> < 언어 ><br> - Java(중상), JavaScript(중하), python(하), Vue.js(하), html(하), jsp(하), CSS(하) <br><br>< DB ><br>- MySQL(하), MyBatis(하)<br><br>< 사용 가능 툴 ><br>Spring Framework, eclipse, github<br><br>저는 알고리즘과 자료구조에 대한 역량이 있고 자바를 기반으로 하는 프로그래밍에 특히 자신 있습니다.<br><br>e-mail : shr2833@naver.com',
        },
        {introduce:'안녕하세요 웹 개발자 정우빈입니다. Java언어를 주력으로 개발하고 있습니다. <br><br> 학교 : 광주대학교 컴퓨터공학과 졸업 <br> 교육이수 : 삼성 청년 소프트웨어 아카데미 1기 <br> 언어 : Java, Spring, Vue.js, jsp, jQuery 등 <br> 프로젝트 : 유니티를 이용한 2D 게임 개발, 식품영양소 웹 사이트 프로젝트<br><br>e-mail : emerald6227@naver.com',
        original : '안녕하세요 웹 개발자 정우빈입니다. Java언어를 주력으로 개발하고 있습니다. <br><br> 학교 : 광주대학교 컴퓨터공학과 졸업 <br> 교육이수 : 삼성 청년 소프트웨어 아카데미 1기 <br> 언어 : Java, Spring, Vue.js, jsp, jQuery 등 <br> 프로젝트 : 유니티를 이용한 2D 게임 개발, 식품영양소 웹 사이트 프로젝트<br><br>e-mail : emerald6227@naver.com',
        },
        {introduce:'안녕하세요. CHA SAN GWON입니다.<br><br>< 언어 > - python(중상), JavaScript(중), CSS(중), Vue.js(중), html(중), C(하), java(하)<br><br>< DB > - MySQL(하)<br><br>< 사용 가능 툴 > - Cloud9, npm, pip, GitHub<br><br>저는 개발자로써 알고리즘 역량과 다양한 지식을 갖추고 있습니다. 웹크롤링과 api를 활용한 개발경험을 가지고 있습니다. <br><br> e-mail : ck2570@naver.com',
        original : '안녕하세요. CHA SAN GWON입니다.<br><br>< 언어 > - python(중상), JavaScript(중), CSS(중), Vue.js(중), html(중), C(하), java(하)<br><br>< DB > - MySQL(하)<br><br>< 사용 가능 툴 > - Cloud9, npm, pip, GitHub<br><br>저는 개발자로써 알고리즘 역량과 다양한 지식을 갖추고 있습니다. 웹크롤링과 api를 활용한 개발경험을 가지고 있습니다. <br><br> e-mail : ck2570@naver.com',
        },
      ],
      imgname:'백진선.jpg'
    }
  },
  mounted() {
    this.output = this.content[0]
  },
  created(){
    EventBus.$on("translate",(language) => {
      if (language == "original") {
        this.lang = language
        this.output.introduce = this.content[this.inx].original
        this.ImgBanner_text.introduce = this.ImgBanner_text.original
      }
      else {
        this.lang = language
        Translate.translate(language,this.content[this.inx].original)
        .then((res) => {
          this.output.introduce = res
        })
        Translate.translate(language,this.ImgBanner_text.original)
        .then((res) => {
          this.ImgBanner_text.introduce = res
        })
      }
    })
  },
  methods: {
    Change(name, index){
      if (this.lang == "original") {
        this.output.introduce = this.content[index].original
      }
      else {
        Translate.translate(this.lang,this.content[index].original)
        .then((res) => {
          this.output.introduce = res
        })
      }
      this.inx = index
      this.imgname= name+'.jpg';
    },
    getImgUrl(img) {
      return require('../assets/' + img)
    },
    top(){
      window.scrollTo(0,0);
    },
  }
}
</script>

<style>
.about_me_txt.mobile{
  text-align: center;
}
.about_me_img.mobile{
  display: none;
}
.slogan.mobile{
  font-size : 0.7em;
}
.slogan.tablet{
  font-size : 0.8em;
}
</style>
