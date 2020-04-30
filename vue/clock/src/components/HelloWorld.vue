<template>
  <div>    
    <h1 class="display">{{ time }}</h1>      
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: this.alteraData(),
    }
  },

  methods: {
    alteraData() {
      setInterval(() => {
        return this.time = new Date().toLocaleTimeString('pt-br')
      },1000)
    }
  }
}
</script>

<style>
  .display {
    font-size: 5.2em;
    border: 5px dotted #000;
    display: inline-block;
    padding: 25px;
  }
</style>