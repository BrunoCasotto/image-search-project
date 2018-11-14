<template>
  <div class="image-search">
    <camera 
      v-bind:predict="predict"
      v-bind:openCam="openCam"
      v-bind:stopCam="stopCam"
      v-bind:takePicture="takePicture"
      v-bind:showCanvas="showCanvas"
      v-bind:uploadFile="uploadFile"
      v-bind:toggleCanvas="toggleCanvas"
    ></camera>
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
        activeLoader: false,
        player: null,
        context: null,
        snapshotCanvas: null,
        videoTracks: null,
        showCanvas: false,
        imgdata: ''
      }
    },
    mounted() {
      Services.getDeviceId(this.openCam)
    },
    methods: {
      openCam(deviceId) {
        this.player = document.getElementById('player');
        const handleSuccess = (stream) => {
          // if (window.webkitURL) { FUTURE
          //   video.src = window.webkitURL.createObjectURL(stream);
          //   localMediaStream = stream;
          // } else if (video.mozSrcObject !== undefined) {
          //   video.mozSrcObject = stream;
          // } else if (video.srcObject !== undefined) {
          //   video.srcObject = stream;
          // } else {
          //   video.src = stream;
          // }})

          this.player.srcObject = stream;
          this.videoTracks = stream.getVideoTracks();
        };

        navigator.mediaDevices.getUserMedia({video: { deviceId }})
          .then(handleSuccess);
      },

      stopCam() {
        this.videoTracks.forEach((track) => track.stop());
      },

      toggleCanvas() {
        this.showCanvas = !this.showCanvas;
      },

      takePicture() {
        this.context = snapshot.getContext('2d');
        this.snapshotCanvas = document.getElementById('snapshot');

        this.snapshotCanvas.width = this.player.videoWidth;
        this.snapshotCanvas.height = this.player.videoHeight;

        this.context.drawImage(player, 0, 0, this.snapshotCanvas.width, 
          this.snapshotCanvas.height);

        this.imgdata = this.snapshotCanvas.toDataURL();
        console.log(this.imgdata)
        this.toggleCanvas()
      },

      uploadFile() {
        console.log('upload')
      },

      predict() {
        this.activeLoader = true;
        Services.predict(this.imgdata)
      }
    },
    components: {
      Camera,
      Loader
    }
  }
</script>

<style lang="sass" scoped>

</style>


