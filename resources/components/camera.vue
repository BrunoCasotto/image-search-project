<template>
  <div class="camera">
    <video v-show="!showCanvas" class="camera__video" id="player" autoplay></video>
    <canvas v-show="showCanvas" class="camera__canvas" id="snapshot" width=320 height=240></canvas>

    <button v-show="!showCanvas" class="camera__button camera__button--take" id="capture" @click="takePicture"></button>
    <button v-show="showCanvas" class="camera__button camera__button--try" id="capture" @click="toggleCanvas"></button>
    <button v-show="showCanvas" class="camera__button camera__button--ok" id="capture" @click="savePicture"></button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        player: null,
        context: null,
        snapshotCanvas: null,
        videoTracks: null,
        showCanvas: false
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

      savePicture() {
        console.log('saving...');
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

        console.log(this.snapshotCanvas.toDataURL());

        this.toggleCanvas()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .camera {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &__video, &__canvas {
      position: absolute;
      right: 50%;
      bottom: 50%;
      transform: translate(50%, 50%);
      min-width: 100%; 
      min-height: 100%;
    }

    &__button {
      position: absolute;
      border: none;
      width: 50px;
      height: 50px;
      opacity: .8;
      z-index: 10;
      background-repeat: no-repeat;
      background-size: contain;
      background-color: #ff000000;
      bottom: 20px;
      background-color: white;
      border-radius: 15px;
      border-radius: 15px;
      box-shadow: 1px 1px 20px 3px white;

      &--take {
        transform: translateX(-50%);
        left: 50%;
        background-image: url('/static/images/take.png');
      }

      &--try {
        left: 20px;
        background-image: url('/static/images/retry.png');
      }

      &--ok {
        right: 20px;
        background-image: url('/static/images/ok.png');
      }
    }
  }
</style>


