<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">Total Time</h1>   
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ totalTime }} hours</h1>
      <!-- <h1 class="text-center">0 hours</h1> -->

      
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    props: ['time'],
    computed: {
        ...mapState('timeEntries', ['totalTime'])
    },
  }
</script>