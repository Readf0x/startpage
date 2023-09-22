<script>
  import { onMount } from "svelte";
  import { defaultShortcuts, sleep } from "./lib/default";
  import Sortable from "sortablejs";
  import Time from "./lib/Time.svelte";
  import Weather from './lib/Weather.svelte';
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
  import Search from "./lib/Search.svelte";
  import Shortcut from "./lib/Shortcut.svelte";
  import Dropdown from "./lib/Dropdown.svelte";
  import Modal from "./lib/Modal.svelte";
  import jquery from "jquery";

  let dropdown, shortcutList;
  let shortcuts = [];
  let modal = false;
  let search = 0;
  const searchItems = [
    ["google", "Google", "https://google.com/search?q="],
    ["duck", "DuckDuckGo", "https://duckduckgo.com/?q="],
    ["bing", "Bing", "https://bing.com/search?q="],
    ["ask", "Ask", "https://www.ask.com/web?q="]
  ];
  $: order = Array.from(Array(shortcuts.length).keys());
  
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
  
  onMount(async () => {
    // @ts-ignore
    search = localStorage.getItem("search") != null ? localStorage.getItem("search") : 0;
    shortcuts = localStorage.getItem("shortcuts") != null ? JSON.parse(localStorage.getItem("shortcuts")) : defaultShortcuts();
    const sortable = new Sortable(shortcutList, {
      group: {
        name: "shortcutList",
        pull: false,
        put: false
      },
      animation: 200,
      forceFallback: true,
      handle: ".shortcut",
      fallbackClass: "ghost-fallback",
      ghostClass: "shortcut-ghost",
      chosenClass: "shortcut-chosen",
      dragClass: "shortcut-drag",
      
      onSort: (ev) => {
        shortcuts.splice(ev.newIndex, 0, shortcuts.splice(ev.oldIndex, 1)[0]);
        localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
        sortable.sort(order, false);
        shortcuts = JSON.parse(localStorage.getItem("shortcuts"));
        console.log(sortable.option("disabled"));
      }
    });
    await new Promise(r => setTimeout(r, 250));
    jquery(".no-transition").removeClass("no-transition");
  });
</script>

<template lang="pug">
  .center
    .above-search
      Time
      Search(bind:dropdown bind:search items="{searchItems}")
    .beneath-search
      Dropdown(bind:dropdown bind:search items="{searchItems}")
      .shortcut-wrapper
        .shortcut-list(bind:this="{shortcutList}")
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
  .shortcut-wrapper {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 66vw;
    width: 100%;
    .shortcut-list {
      display: flex;
      gap: 20px;
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
  }
</style>
