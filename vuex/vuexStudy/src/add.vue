<template>
  <button @click="changec">+</button>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
    }
  },
  methods:{
    changec(){
      // this.$store.commit("change",1);
      this.$store.dispatch("asyncChange",1)
    }
  }
}
</script>

<style>

</style>
