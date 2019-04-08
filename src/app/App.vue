<template>
  <div id="wrapper">
    <nav v-if="user" class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/time-entries"><a>Time Entries</a></router-link>
          <router-link tag="li" to="/login"><a>Logout</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div v-if="user" class="col-sm-3">
        <sidebar :time="0"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Sidebar from '../logTime/Sidebar'
// import store from './store';

export default {
    name: 'app',
    components: {'sidebar': Sidebar},
    computed: {
      ...mapState({
        user: state => state.account.user
      })
    },
    // methods: {
    //     ...mapActions({
    //         clearAlert: 'alert/clear' 
    //     })
    // },
    // watch: {
    //     $route (to, from){
    //         // clear alert on location change
    //         this.clearAlert();
    //     }
    // } 
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