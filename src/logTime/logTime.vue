<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input type="date" class="form-control" v-model="timeEntry.date" placeholder="Date">
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="Hours">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input type="text" class="form-control" v-model="timeEntry.comment" placeholder="Comment">
      </div>
    </div>
    <button class="btn btn-primary" v-on:click="save()">Save</button>
    <router-link v-bind:to="'/time-entries/'">
      <a class="btn btn-primary">Cancel</a>
    </router-link>
    <hr>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
//import store from "../store";
export default {
  data() {
    return {
      timeEntry: {},
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  methods: {
    ...mapActions("timeEntries", ["saveTimeEntry"]),
    save() {
      /*if (Object.keys(timeEntry).length > 1) {
        store.commit("timeUpdate", timeEntry);
      } */

      this.saveTimeEntry({
        date: this.timeEntry.date,
        totalTime: this.timeEntry.totalTime,
        comment: this.timeEntry.comment,
        user: this.user.user
      });
      /* this.$store.dispatch("saveTimeEntry", {
        date: this.timeEntry.date,
        totalTime: this.timeEntry.totalTime,
        comment: this.timeEntry.comment
      }); */
    }
  },
  computed: {
    ...mapState({
      account: state => state.account,
      users: state => state.users.all
    })
  }
};
</script>