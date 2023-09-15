<script>
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
  import Search from "./lib/Search.svelte";
  import Shortcut from "./lib/Shortcut.svelte";

  let shortcuts = [
    {
      link: "https://github.com",
      type: "font",
      icon: "github"
    },
    {
      link: "https://wiki.hyprland.org",
      type: "img",
      icon: "auto"
    },
    {
      link: "https://wiki.archlinux.org",
      type: "img",
      icon: "auto"
    },
    {
      link: "https://youtube.com",
      type: "font",
      icon: "youtube"
    },
    {
      link: "https://x.com",
      type: "char",
      icon: "&Xopf;"
    }
  ];
  let dropdown;
</script>

<template lang="pug">
  .center
    Time
    Search(bind:dropdown)
    .shortcut-list
      +each("shortcuts as shortcut")
        Shortcut(
          link="{shortcut.link}"
          type="{shortcut.type}"
          icon="{shortcut.icon}"
        )

  Weather

  ThemeSwitch

  p {dropdown}
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .shortcut-list {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 66vw;
    width: fit-content;
    flex-wrap: wrap;
  }
</style>
