<template>
  <div class="image-search">
    <camera v-bind:predict="predict"></camera>
    <loader v-bind:active="activeLoader"></loader>
  </div>
</template>

<script>
  import Camera from '_components/camera.vue';
  import Loader from '_components/loader.vue';
  import Services from '_resources/services';

  export default {
    data() {
      return {
        activeLoader: false
      }
    },
    components: {
      Camera,
      Loader
    },
    methods: {
      predict() {
        this.activeLoader = true;
        Services.predict(this.imgdata)
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>


