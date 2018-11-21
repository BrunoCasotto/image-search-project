<template>
  <div class="home">
    <div class="home__content">
      <div class="home__title">
        <h1 class="title ">Buscador de imagens</h1>
      </div>
      <a href="/image-search" class="btn home__btn">Abrir Camera</a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  @import '~_styles/commons';
  .home {
    height: 100vh;
    width: 100vw;
    position: relative;
    background-image: url(/static/images/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 10;
      text-align: center;
    }

    &__title {
      margin: 20px 25px;
      width: calc(100% - 50px);
      padding: 10px;
      background: white;
      opacity: 0.85;
      border-radius: 3px;
    }

    &__btn {
      margin: 0 auto;
    }
  }
</style>

