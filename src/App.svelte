<script>
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
  import Search from "./lib/Search.svelte";
  import Shortcut from "./lib/Shortcut.svelte";
  import Dropdown from "./lib/Dropdown.svelte";
  import Modal from "./lib/Modal.svelte";
  import { onMount } from "svelte";
  import { defaultShortcuts } from "./lib/default";

  let shortcuts = [];
  let dropdown;
  let modal = false;
  let search = 0;
  let offset;
  const searchItems = [["google", "Google", "https://google.com/search?q="], ["duck", "DuckDuckGo", "https://duckduckgo.com/search?q="], ["bing", "Bing", "https://bing.com/search?q="]];

  async function shortcutRemoveHandler(ev) {
    shortcuts = shortcuts.toSpliced(ev.detail, 1);
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  };

  function shortcutAddHandler(ev) {
    console.log(ev.detail);
    modal = !modal;
    shortcuts.push({
      "link": ev.detail[2],
      "icon": ev.detail[1],
      "type": ev.detail[0]
    });
    shortcuts = shortcuts;
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  }

  onMount(() => {
    // @ts-ignore
    search = localStorage.getItem("search") != null ? localStorage.getItem("search") : 0;
    shortcuts = localStorage.getItem("shortcuts") != null ? JSON.parse(localStorage.getItem("shortcuts")) : defaultShortcuts();
  });
</script>

<template lang="pug">
  .center
    .above-search
      Time
      Search(bind:dropdown bind:search items="{searchItems}")
    .beneath-search
      Dropdown(bind:dropdown bind:search items="{searchItems}")
      .shortcut-list
        +each("shortcuts as shortcut, i")
          Shortcut(
            link="{shortcut.link}"
            type="{shortcut.type}"
            icon="{shortcut.icon}"
            id="{i}"
            on:remove="{shortcutRemoveHandler}"
          )
        button.add-shortcut(on:click!="{() => modal = !modal}")
          i.bi.bi-plus

  Weather

  ThemeSwitch

  +if("modal")
    Modal(on:submit="{shortcutAddHandler}" on:cancel!="{() => modal = !modal}")
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
