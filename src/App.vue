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

    export default {
        name: "App",
        components: {
            PoyHeader,
            PoyFooter
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
