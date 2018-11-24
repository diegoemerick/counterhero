<template>

  <div class="counter">

      <div class="iCountUp">
       <ICountUp
        :startVal="startVal"
        :endVal="endVal"
        :decimals="decimals"
        :duration="duration"
        :options="options"
        @ready="onReady"
      />
    </div>

  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
  name: 'Counter',
   components: {
      ICountUp
    },
  data() {
    return {
      startVal: 0,
        endVal: 0,
        decimals: 0,
        duration: 3.5,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
    };
  },
  mounted () {
    // call your service here
     this.endVal = 1234567;
  }
};

</script>

