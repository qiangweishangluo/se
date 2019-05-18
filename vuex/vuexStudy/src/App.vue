<template>
  <div id="app">
    <add></add>
    {{getcount}}
    <remove></remove>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed:{
    getcount(){
      return this.$store.state.count;
    }
  },
  mounted(){

    axios.get("/v2/movie/top250").then((res)=>{
      console.log(res.data);
    })
  }
}
</script>

<style>

</style>
