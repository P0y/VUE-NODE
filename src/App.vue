<template>
  <div id="app">
      <PoyHeader />
    <router-view></router-view>
    <PoyFooter />
  </div>
</template>

<script>
    import PoyHeader from "@/components/PoyHeader";
    import PoyFooter from "@/components/PoyFooter";
    import Home from "./view/Home";
    import Profile from "./view/Profile";

    export default {
        name: "App",
        components: {
            PoyHeader,
            PoyFooter,
            Home,
            Profile
        }
    };
</script>

<style>
  body {
    background-color: #fffff5;
  }
  #introduction {
    background-color: whitesmoke;
  }
</style>
