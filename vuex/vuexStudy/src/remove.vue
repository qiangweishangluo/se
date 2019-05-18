<template>
  <button @click="change">-</button>
</template>

<script>
export default {
  name: 'remove',
  data () {
    return {
    }
  },
  methods:{
    change(){
      this.$store.commit("change",-1);
    }
  }
}
</script>

<style>

</style>