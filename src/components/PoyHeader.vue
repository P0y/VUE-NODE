<template>
    <div class="container" style="max-width: 100%">
      <div class="row">
        <div class="col-lg-3 d-flex align-self-center justify-content-md-center" id="main-link">
          <router-link class="navbar-brand text-white" :to="{ name: 'homeIntroduction' }">
            EKIN
          </router-link>
        </div>
        <div class="col-lg-9 d-flex justify-content-lg-end" id="other-link">
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
    background-color: deepskyblue;
    padding: 28.5px;
    font-style: italic;
    font-weight: 600;
    font-family: inherit;
  }
  #other-link {
    background-color: deepskyblue;
    padding-right: 150px;
  }
</style>
