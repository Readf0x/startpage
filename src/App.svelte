<script>
  import { onMount } from "svelte";
  import jquery from "jquery";
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';

  let api;

  onMount(() => {
    if(new Date().toISOString().slice(0, 10) != localStorage.getItem("expiry")) {
      // @ts-ignore
      jquery.getJSON("https://api.open-meteo.com/v1/forecast?latitude=34.9554&longitude=-90.0348&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=auto", (json) => {
        localStorage.setItem("api", JSON.stringify(json));
        localStorage.setItem("expiry", new Date().toISOString().slice(0, 10));
      });
    };

    api = JSON.parse(localStorage.getItem("api"));
  });
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
