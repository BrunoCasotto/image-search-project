<template>
  <div class="overlay">
    <div class="loader">
      <div class="loader-icon"></div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    background: black;
    opacity: .6;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 50;
  }

  .loader {
      left: 50%;
      top: 50%;
      position: absolute;
      transform: translate(-50%, -50%);

    &-icon {
      background-image: url('/static/images/loading.svg');
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-size: contain;
      animation: spin 1s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
    }

  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>

