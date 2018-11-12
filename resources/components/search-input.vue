<template>
  <div class="search-input">
    <video id="player" controls autoplay></video>
    <button id="capture" @click="takePicture">Capture</button>
    <canvas id="snapshot" width=320 height=240></canvas>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        player: null,
        context: null,
        snapshotCanvas: null,
        videoTracks: null
      }
    },
    mounted() {
      this.openCam();
    },
    methods: {
      openCam() {
        this.player = document.getElementById('player');
        const handleSuccess = (stream) => {
          this.player.srcObject = stream;
          this.videoTracks = stream.getVideoTracks();
        };

        navigator.mediaDevices.getUserMedia({video: true})
          .then(handleSuccess);
      },

      stopCam() {
        this.videoTracks.forEach((track) => track.stop());
      },

      takePicture() {
        this.context = snapshot.getContext('2d');
        this.snapshotCanvas = document.getElementById('snapshot');

        this.context.drawImage(player, 0, 0, this.snapshotCanvas.width, 
          this.snapshotCanvas.height);
        
        this.stopCam();
      }
    }
  }
</script>
<style lang="sass" scoped>

</style>


