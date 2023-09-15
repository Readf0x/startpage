<script>
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
  import Search from "./lib/Search.svelte";
  import Shortcut from "./lib/Shortcut.svelte";
</script>

<template lang="pug">
  .center
    Time
    Search
    .shortcut-list
      Shortcut(link="https://github.com/" iconName="github")
      Shortcut(link="https://youtube.com" iconName="youtube")
      Shortcut(link="https://twitch.tv" iconName="twitch")
      Shortcut(link="https://wiki.hyprland.org" iconName="favicon-32x32.png" icon="img")

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
  .shortcut-list {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
</style>
