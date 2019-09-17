<template>
    <div class="container" style="max-width: 100%">
      <div class="row">
        <div class="col-lg-3 d-flex align-self-center justify-content-md-center" id="main-link">
          <router-link class="navbar-brand text-white" :to="{ name: 'homeIntroduction' }">
            EKIN
          </router-link>
        </div>
        <div class="col-lg-9 d-flex justify-content-around align-self-center" id="other-link">
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
    border: 1px solid #000000;
    background-color: deepskyblue;
    padding: 10px;
  }
  #other-link {
    border-radius: 13px 13px 13px 13px;
    -moz-border-radius: 13px 13px 13px 13px;
    -webkit-border-radius: 13px 13px 13px 13px;
    border: 1px solid #000000;

    background-color: deepskyblue;
    padding: 2px;
  }
</style>
