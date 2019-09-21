<template>
  <div class="container" id="introduction" style="max-width: 100%">
    <div class="row">
      <div class="col-lg-10 text-white" style="padding: 20px">BREADCRUMBS</div>
      <div class="col-lg-8" style="padding: 20px">
        <router-link class="navbar-brand text-dark" :to="{ name: 'homeIntroduction' }">
          Introduction
        </router-link>
        <router-link class="navbar-brand text-dark" :to="{ name: 'homePicture' }">
          Picture
        </router-link>
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
