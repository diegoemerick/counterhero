<template>

  <v-container id="app" grid-list-md text-xs-center>
   
    <v-layout row wrap>
      <v-flex xs12>
        <img src="./assets/img/boy.png" height="250">
      </v-flex>
    </v-layout>

     <v-layout row wrap>
      <v-flex xs12>
         <router-view/>
      </v-flex>
    </v-layout>
    
    <v-footer class="pa-3 logo-footer" height="auto">
       <v-layout row wrap align-center justify-center fill-height>
         <v-flex xs12>
          <div>&copy; {{ new Date().getFullYear() }} counter | developed by diegoemerick</div>
         </v-flex>
       </v-layout>
   </v-footer>

  </v-container>
</template>

<script>
require('./assets/css/style.css');

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
