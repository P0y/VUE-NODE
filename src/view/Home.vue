<template>
  <div class="container" id="introduction" style="max-width: 100%">
    <div class="row">
      <div class="homeContent col-lg-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
    import HomeIntroduction from "./home/HomeIntroduction";
    import HomePicture from "./home/HomePicture";

    export default {
        components: {
            HomePicture,
            HomeIntroduction
        }
    }
</script>
<style>
  .homeContent {
    padding: 0;
  }
</style>
