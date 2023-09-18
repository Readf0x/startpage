<script>
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
  import Search from "./lib/Search.svelte";
  import Shortcut from "./lib/Shortcut.svelte";
  import Dropdown from "./lib/Dropdown.svelte";
  import { onMount } from "svelte";
  import { defaultShortcuts } from "./lib/default";

  let shortcuts = localStorage.getItem("shortcuts") != null ? JSON.parse(localStorage.getItem("shortcuts")) : defaultShortcuts();
  let dropdown;
  let search = 0;
  let offset;
  const items = [["google", "Google", "https://google.com/search?q="], ["duck", "DuckDuckGo", "https://duckduckgo.com/search?q="], ["bing", "Bing", "https://bing.com/search?q="]];

  onMount(() => {
    // @ts-ignore
    search = localStorage.getItem("search") != null ? localStorage.getItem("search") : 0;
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  });
</script>

<template lang="pug">
  .center
    .above-search
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
        button.add-shortcut
          i.bi.bi-plus

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
    .above-search {
      background: map.get($dark, "base");
      z-index: 3;
      transition: 0.4s;
      // width: 100vw;
    }
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
  .add-shortcut {
    background: map.get($dark, "mantle");
    color: map.get($dark, "text");
    transition: 0.4s;
    border: 1px solid map.get($dark, "mantle");
    font: inherit;
    font-size: 22px;
    height: 44px;
    width: 44px;
    border-radius: 50px;
    cursor: pointer;
    outline: inherit;
  }
</style>
