<template>
    <div class="container" style="max-width: 100%">
      <div class="row fixedHeader">
        <div class="col-lg-12 d-flex justify-content-lg-around" id="other-link">
          <router-link id="main-link" class="navbar-brand text-white" :to="{ name: 'homeIntroduction' }" style="padding-top: 35px">
              EKIN
          </router-link>
          <router-link class="navbar-brand text-white" :to="{ name: 'homeIntroduction' }" style="padding-top: 35px">
            Introduction
          </router-link>
          <router-link class="navbar-brand text-white" :to="{ name: 'homeTournament' }" style="padding-top: 35px">
            Tournament
          </router-link>
          <LoginForm v-if="this.user.isLoggedIn === false" class="loginDesktop"/>
          <button v-if="this.user.isLoggedIn === false" class="loginMobile">HERE MOBILE</button>
          <router-link v-if="this.user.isLoggedIn === true" class="navbar-brand text-white" :to="{ name: 'profile' }" style="padding-top: 35px">
            <i class="fa fa-user"></i> Profile
          </router-link>
          <Loggout v-if="this.user.isLoggedIn === true" />
        </div>
      </div>
    </div>
</template>
<script>
    import LoginForm from "@/view/Login";
    import Profile from "@/view/Profile";
    import Loggout from "./Loggout";

    export default {
        name: "poyHeader",
        components: {
            Loggout,
            LoginForm,
            Profile
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    };
</script>
<style>
  #main-link {
    background-color: black;
    padding: 30px;
    font-style: italic;
    font-weight: 600;
    font-family: inherit;
  }
  #other-link {
    background-color: black;
    padding-right: 150px;
  }
  .fixedHeader {
    position:static; /* fixing the position takes it out of html flow - knows nothing about where to locate itself except by browser coordinates */
    left:0;           /* top left corner should start at leftmost spot */
    top:0;            /* top left corner should start at topmost spot */
    width:100vw;      /* take up the full browser width */
    z-index:200;  /* high z index so other content scrolls underneath */
    height:100px;     /* define height for content */
  }
  .loginMobile {
    display: none;
  }
  @media all and (max-width: 1024px)
  {
    .loginDesktop
    {
      display: none;
    }
    .loginMobile
    {
      display: block;
    }
  }
</style>
