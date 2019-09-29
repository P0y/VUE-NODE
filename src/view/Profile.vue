<template>
  <div class="container" id="introduction" style="max-width: 100%">
    <div class="row">
      <div v-if="this.user.isLoggedIn === true" class="profileContent col-lg-12">
        <router-link class="navbar-brand" :to="{ name: 'profileView' }" style="padding-top: 35px">
          View
        </router-link>
        <router-link class="navbar-brand" :to="{ name: 'profileSetting' }" style="padding-top: 35px">
          Setting
        </router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
    import ProfileView from "./profile/ProfileView";
    import ProfileSetting from "./profile/ProfileSetting";

    export default {
        components: {
            ProfileView,
            ProfileSetting
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>
<style>
  .profileContent {
    padding: 0;
  }
</style>
