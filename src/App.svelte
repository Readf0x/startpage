<script>
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
  import Search from "./lib/Search.svelte";
  import Shortcut from "./lib/Shortcut.svelte";
  import Dropdown from "./lib/Dropdown.svelte";
  import { onMount } from "svelte";

  let shortcuts = [
    {
      link: "https://github.com",
      type: "font",
      icon: "github"
    },
    {
      link: "https://wiki.hyprland.org",
      type: "img",
      icon: "https://hyprland.org/ico/favicon-32x32.png"
    },
    {
      link: "https://wiki.archlinux.org",
      type: "img",
      icon: "https://wiki.installgentoo.com/images/f/f9/Arch-linux-logo.png"
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
  let search = 0;
  let offset;
  const items = [["google", "Google", "https://google.com/search?q="], ["duck", "DuckDuckGo", "https://duckduckgo.com/search?q="], ["bing", "Bing", "https://bing.com/search?q="]];

  onMount(() => {
    search = localStorage.getItem("search") != null ? localStorage.getItem("search") : 0;
  });
</script>

<template lang="pug">
  .center
    Time
    Search(bind:dropdown bind:search items="{items}")
    .beneath-search
      Dropdown(bind:search bind:dropdown items="{items}")
      .shortcut-list
        +each("shortcuts as shortcut")
          Shortcut(
            link="{shortcut.link}"
            type="{shortcut.type}"
            icon="{shortcut.icon}"
          )

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
    width: fit-content;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .beneath-search {
      display: flex;
      align-self: start;
      width: 100%;
    }
  }
  .shortcut-list {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 66vw;
    width: 100%;
    flex-wrap: wrap;
  }
</style>
