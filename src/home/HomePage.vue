<template>
  <!-- <div>
    <h1>Hi {{account.user.firstName}}!</h1>
    <p>You're logged into the Ecosistem of Gaia</p> -->

    <!-- <em v-if="timeEntries.loading">Loading users...</em>
        <span v-if="timeEntries.error" class="text-danger">ERROR: {{timeEntries.error}}</span>
        <ul v-if="timeEntries.list">
            <li v-for="timeEntry in users.list" :key="timeEntry.id">
                {{timeEntry.date + ' ' + timeEntry.totalTime}}
                <span v-if="timeEntry.deleting"><em> - Deleting...</em></span>
                <span v-else-if="timeEntry.deleteError" class="text-danger"> - ERROR: {{timeEntry.deleteError}}</span>
                <span v-else> - <a @click="deleteTimeEntry(timeEntry.id)" class="text-danger">Delete</a></span>
            </li>
    </ul>-->
    <!-- <router-link
      v-if="$route.path !== '/time-entries'"
      to="time-entries"
      class="btn btn-primary"
    >Time Entries</router-link>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div> -->

  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/"><a>Home</a></router-link>
          <router-link tag="li" to="/time-entries"><a>Time Entries</a></router-link>
          <router-link tag="li" to="/login"><a>Logout</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import Sidebar from '../logTime/Sidebar'

export default {
  components: {'sidebar': Sidebar},
  computed: {
    ...mapState({
      account: state => state.account
    })
  },
  created() {},
  methods: {}
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