
<template>
    <div>
      <div class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">
              <i class="glyphicon glyphicon-time"></i>
              KSCM
            </a>
          </div>
          <ul class="navbar-nav nav">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/time">Time</router-link></li>
            <li><router-link to="/example">Example</router-link></li>
            <li><router-link to="/selectcontract">contract</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
