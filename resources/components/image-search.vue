<template>
  <div class="image-search">
    <camera></camera>
    <loader></loader>
  </div>
</template>

<script>
  import Camera from '_components/camera.vue';
  import Loader from '_components/loader.vue';

  export default {
    components: {
      Camera,
      Loader
    }
  }
</script>

<style lang="sass" scoped>

</style>


