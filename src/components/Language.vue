<template>
  <v-menu class="position-right-bottom">
    <v-btn class="mx-2" fab slot="activator" color="warning"><i class="fas fa-language fa-2x"></i></v-btn>
    <v-list>
      <v-list-tile v-for="(language, index) in languages" :key="index" @click=''>
        <v-list-tile-title @click="tr_click(index)">{{ language }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import EventBus from "../eventBus.js"
export default {
  data:()=>({
    lang : 'original',
    languages:['원본','한국어','영어','일본어','중국어'],
    mini: false,
    right: null
  }),
  methods:{
    tr_click(index){
      if (index==0){
        this.lang = "original"
        EventBus.$emit('translate', this.lang)
      }
      else if (index==1){
        this.lang = "ko"
        EventBus.$emit('translate', this.lang)
      }
      else if (index==2){
        this.lang = "en"
        EventBus.$emit('translate', this.lang)
      }
      else if (index==3){
        this.lang = "ja"
        EventBus.$emit('translate', this.lang)
      }
      else if (index==4){
        this.lang = "zh-TW"
        EventBus.$emit('translate', this.lang)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
