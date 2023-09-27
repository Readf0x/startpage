<script>
  import { onMount } from "svelte";
  import { defaultShortcuts, defaultTheme, sleep } from "./lib/default";
  import Sortable from "sortablejs";
  import Time from "./lib/Time.svelte";
  import Weather from "./lib/Weather.svelte";
  import ThemeSwitch from "./lib/ThemeSwitch.svelte";
  import Search from "./lib/Search.svelte";
  import Shortcut from "./lib/Shortcut.svelte";
  import Dropdown from "./lib/Dropdown.svelte";
  import ShortcutModal from "./lib/ShortcutModal.svelte";
  import ThemeModal from "./lib/ThemeModal.svelte";
  import jquery from "jquery";

  let dropdown, shortcutList;
  let shortcuts = [];
  let modal = false;
  let themeModal = false;
  let search = 0;
  let resetCount = 0;
  $: resetText = {
    0: "Reset",
    1: "Are you sure?",
  }[resetCount];
  const searchItems = [
    ["google", "Google", "https://google.com/search?q="],
    ["duck", "DuckDuckGo", "https://duckduckgo.com/?q="],
    ["bing", "Bing", "https://bing.com/search?q="],
    ["yahoo", "Yahoo", "https://search.yahoo.com/search?p="],
    ["startpage", "Startpage", "https://www.startpage.com/sp/search?query="],
    ["qwant", "Qwant", "https://www.qwant.com/?q="],
    ["yandex", "Yandex", "https://yandex.com/search/?text="],
    ["ask", "Ask.com", "https://www.ask.com/web?q="],
    ["baidu", "Baidu", "https://www.baidu.com/#wd="],
    ["ecosia", "Ecosia", "https://www.ecosia.org/search?q="],
  ];
  $: order = Array.from(Array(shortcuts.length).keys());

  let customTheme = 
    localStorage.getItem("customtheme") != null
      ? JSON.parse(localStorage.getItem("customtheme"))
      : defaultTheme();

  function themeHandler() {
    themeModal = !themeModal;
    localStorage.setItem("customtheme", JSON.stringify(customTheme));
  }

  async function shortcutRemoveHandler(ev) {
    shortcuts = shortcuts.toSpliced(ev.detail, 1);
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  }

  function shortcutAddHandler(ev) {
    console.log(ev.detail);
    modal = false;
    shortcuts.push({
      link: ev.detail[2],
      icon: ev.detail[1],
      type: ev.detail[0],
    });
    shortcuts = shortcuts;
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  }

  function resetHandler() {
    switch (resetCount) {
      case 0:
        resetCount = 1;
        setTimeout(() => (resetCount = 0), 5000);
        break;
      case 1:
        localStorage.clear();
        location.reload();
        break;
    }
  }

  onMount(async () => {
    // @ts-ignore
    search =
      localStorage.getItem("search") != null
        ? localStorage.getItem("search")
        : 0;
    shortcuts =
      localStorage.getItem("shortcuts") != null
        ? JSON.parse(localStorage.getItem("shortcuts"))
        : defaultShortcuts();
    const sortable = new Sortable(shortcutList, {
      group: {
        name: "shortcutList",
        pull: false,
        put: false,
      },
      animation: 400,
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
      },
    });
    customTheme = 
      localStorage.getItem("customtheme") != null
        ? JSON.parse(localStorage.getItem("customtheme"))
        : defaultTheme();
    await new Promise((r) => setTimeout(r, 250));
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
        button.add-shortcut(on:click!="{() => modal = true}")
          i.bi.bi-plus

  Weather

  .theme-wrapper
    ThemeSwitch(
      bind:customTheme
    )
    button.openThemeEditor(on:click!="{() => themeModal = !themeModal}") Edit #[i.bi.bi-gear]

  button.reset(on:click="{resetHandler}") {resetText}

  +if("modal")
    ShortcutModal(
      on:submit="{shortcutAddHandler}"
      on:cancel!="{() => modal = !modal}"
    )

  +if("themeModal")
    ThemeModal(
      on:submit!="{themeHandler}"
      bind:theme="{customTheme}"
    )

  p#testing
</template>

<style lang="scss">
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: 100vh;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .above-search {
      z-index: 3;
      transition: 0.4s;
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
      background: var(--mantle);
      color: var(--text);
      transition: 0.4s;
      border: 1px solid var(--mantle);
      font: inherit;
      font-size: 22px;
      height: 44px;
      width: 44px;
      border-radius: 50px;
      cursor: pointer;
      outline: inherit;
    }
  }
  button.reset {
    border: none;
    background: var(--surface0);
    color: var(--red);
    position: absolute;
    bottom: 10px;
    right: 10px;
    box-sizing: border-box;
    padding: 4px 6px;
    opacity: 0;
    transition: 0.4s;
    border-radius: 5px;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
  .theme-wrapper {
    width: fit-content;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    &:hover button.openThemeEditor {
      opacity: 1;
    }
  }
  button.openThemeEditor {
    border: none;
    background: var(--mantle);
    color: var(--text);
    box-sizing: border-box;
    padding: 4px 6px;
    transition: 0.4s;
    border-radius: 5px;
    opacity: 0;
    position: relative;
    bottom: 10px;
    &:hover {
      background: var(--surface0);
      cursor: pointer;
    }
    outline: none;
  }
</style>
