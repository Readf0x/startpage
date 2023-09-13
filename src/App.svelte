<script>
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
</script>

<template lang="pug">
  .center
    Time

  Weather

  ThemeSwitch
</template>

<style lang="scss">
  @use "sass:map";
  @import "./boiler.scss";

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
</style>
