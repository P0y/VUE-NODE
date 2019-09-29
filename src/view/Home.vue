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
    import HomeTournament from "./home/HomeTournament";

    export default {
        components: {
            HomeTournament,
            HomeIntroduction
        }
    }
</script>
<style>
  .homeContent {
    padding: 0;
  }
</style>
