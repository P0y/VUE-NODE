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
          <router-link class="navbar-brand text-white" :to="{ name: 'homePicture' }" style="padding-top: 35px">
            Picture
          </router-link>
          <LoginForm />
        </div>
      </div>
    </div>
</template>
<script>
    import LoginForm from "@/view/Login";
    export default {
        name: "poyHeader",
        components: {
            LoginForm
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
</style>
