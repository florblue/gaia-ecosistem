<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input type="date" class="form-control" v-model="currentTimeEntry.date" placeholder="Date">
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input type="number" class="form-control" v-model="currentTimeEntry.totalTime" placeholder="Hours">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input type="text" class="form-control" v-model="currentTimeEntry.comment" placeholder="Comment">
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

export default {
  data() {
    return {
      currentTimeEntry: {}
    };
  },
  methods: {
    ...mapActions("timeEntries", ["saveTimeEntry"]),
    save() {
      this.saveTimeEntry({
        date: this.currentTimeEntry.date,
        totalTime: this.currentTimeEntry.totalTime,
        comment: this.currentTimeEntry.comment
      });
      this.currentTimeEntry = {};
    }
  },
  computed: {
    ...mapState('timeEntries', ['currentTimeEntry'])
  }
};
</script>