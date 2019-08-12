<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-flex id="inline">
            <center>
              <img src="../assets/1.gif" width="150px" />
              <hr id="hrCss" />
              <h1 class="NameFont">Park Nawon</h1>
              <hr id="hrCss" />
              <br />
              <div id="pdSize" class="info1">Python</div>
              <div id="pdSize" class="info1">Vue.js</div>
              <div id="pdSize" class="info1">CSS3</div>
              <div id="pdSize" class="info1">HTML5</div>
              <div id="pdSize" class="info1">Django</div>
              <div id="pdSize" class="info1">Javascript</div>
              <div id="pdSize" class="info1">R</div>
              <div class="my-2">
                <v-btn round depressed large id="but1">
                  Nnnangni
                </v-btn>
              </div>
            </center>
          </v-flex>
          <v-flex id="inline">
            <center>
              <img src="../assets/12.gif" width="150px" />
              <hr id="hrCss1" />
              <h1 class="NameFont">Kim HyunIl</h1>
              <hr id="hrCss1" />
              <br />
              <div id="pdSize" class="info3">JAVA</div>
              <div id="pdSize" class="info3">Javascript</div>
              <div id="pdSize" class="info3">Node.js</div>
              <div id="pdSize" class="info3">Vue.js</div>
              <div id="pdSize" class="info3">C++</div>
              <div id="pdSize" class="info3">CSS3</div>
              <div id="pdSize" class="info3">HTML5</div>
            </center>
            <div class="my-2">
              <v-btn round depressed large id="but2">Gerrad Jr.</v-btn>
            </div>
          </v-flex>
          <v-flex id="inline">
            <center>
              <img src="../assets/23.gif" width="150px" />
              <hr id="hrCss2" />
              <h1 class="NameFont">Jo ShinSung</h1>
              <hr id="hrCss2" />
              <br />
              <div id="pdSize" class="info2">JAVA</div>
              <div id="pdSize" class="info2">Spring Framework</div>
              <div id="pdSize" class="info2">C/C++</div>
              <div id="pdSize" class="info2">Vue.js</div>
              <div id="pdSize" class="info2">CSS3</div>
              <div id="pdSize" class="info2">HTML5</div>
              <div id="pdSize" class="info2">MySql/MyBatis</div>
            </center>
            <div class="my-2">
              <v-btn round depressed large id="but3">Nustar★</v-btn>
            </div>
          </v-flex>
          <v-flex id="inline">
            <center>
              <img src="../assets/4.gif" width="150px" />
              <hr id="hrCss3" />
              <h1 class="NameFont">Choi HunSeok</h1>
              <hr id="hrCss3" />
              <br />
              <div id="pdSize" class="info4">JAVA</div>
              <div id="pdSize" class="info4">HTML5</div>
              <div id="pdSize" class="info4">JQuery</div>
              <div id="pdSize" class="info4">R</div>
              <div id="pdSize" class="info4">Vue.js</div>
              <div id="pdSize" class="info4">Spring Boot</div>
              <div id="pdSize" class="info4">C</div>
            </center>
            <div class="my-2">
              <v-btn round depressed large id="but4">Huuuuulu</v-btn>
            </div>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "InfoPage"
};
</script>

<style>
#inline {
  display: inline-block;
  padding: 60px;
}

#hrCss {
  border: 0;
  height: 6px;
  background: #ccc;
}

#hrCss1 {
  border: 0;
  height: 6px;
  background: cornflowerblue;
}

#hrCss2 {
  border: 0;
  height: 6px;
  background: seagreen;
}

#hrCss3 {
  border: 0;
  height: 6px;
  background: tomato;
}

#pdSize {
  padding: 5px;
}

.info1 {
  color: darkgray;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

.info2 {
  color: seagreen;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

.info3 {
  color: cornflowerblue;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

.info4 {
  color: tomato;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

#but1 {
  background-color: darkgray;
  color: white;
}

#but2 {
  background-color: cornflowerblue;
  color: white;
}

#but3 {
  background-color: seagreen;
  color: white;
}

#but4 {
  background-color: tomato;
  color: white;
}
</style>
