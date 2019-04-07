<template>
  <div>
    <h1>Hi {{account.user.firstName}}!</h1>
    <p>You're logged into the Ecosistem of Gaia</p>

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
    <router-link
      v-if="$route.path !== '/time-entries'"
      to="time-entries"
      class="btn btn-primary"
    >Time Entries</router-link>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      account: state => state.account
    })
  },
  created() {},
  methods: {}
};
</script>