<template>
  <div>
    <v-container id="size1">
      <v-layout>
        <v-flex xs12>
          <PortfolioList :limits="8" :load-more="true"></PortfolioList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PortfolioList from "../components/PortfolioList";
import "../CSS/DokdoFont.css";
export default {
  name: "PortfolioPage",
  components: {
    PortfolioList
  }
};
</script>
