<script>
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
</script>

<template lang="pug">
  .center
    Time

  Weather
</template>

<style lang="scss">
  @import "@catppuccin/palette/scss/_mocha.scss";

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
</style>
