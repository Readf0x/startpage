<script>
  import { afterUpdate } from "svelte";
  import jquery from "jquery";

  export let dropdown = false;
  export let search;
  export let items;

  let value;
  let searchURL = [];

  function submit() {
    location.href = items[search][2] + encodeURIComponent(value);
    value = "";
  }
</script>

<template lang="pug">
  .search
    button.provider-icon(on:click!="{() => {dropdown = !dropdown}}")
      +each("items as item, i")
        svg(xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style:display="{search == i ? 'initial' : 'none'}")
          use(href="search.svg#{item[0]}")
    button.dropdown-button(on:click!="{() => {dropdown = !dropdown}}")
      i.bi.bi-caret-down-fill
    label.search-box
      form(name="search" on:submit|preventDefault="{submit}")
        input(placeholder="Start Typing..." bind:value)
    button.submit(on:click="{submit}")
      i.bi.bi-search
</template>

<style lang="scss">
  .search {
    display: flex;
    width: 66vw;
    margin: auto;
    height: 30px;
    transition: 0.4s;
    & > * {
      background: var(--mantle);
      border-radius: 2px;
      height: 100%;
      display: flex;
      align-items: center;
      transition: 0.4s;
      border: 1px solid var(--mantle);
      box-sizing: content-box;
      outline: none;
    }
    .provider-icon {
      padding: 0 4px 0 8px;
      border-radius: 30px 4px 4px 30px;
      cursor: pointer;
      color: var(--text);
    }
    .dropdown-button {
      border: 1px solid var(--mantle);
      padding: 0;
      color: var(--text);
      &:hover {
        cursor: pointer;
        color: var(--subtext0);
      }
      i.bi {
        font-size: 12px;
        width: 12px;
        justify-content: center;
        display: flex;
      }
    }
    .search-box {
      width: 100%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      cursor: text;
      form {
        width: 100%;
      }
      input {
        background: none;
        border: none;
        color: var(--text);
        width: 100%;
        font-size: 14px;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: var(--subtext0);
          font-style: italic;
        }
      }
    }
    .submit {
      padding: 0 8px 0 4px;
      border-radius: 4px 30px 30px 4px;
      cursor: pointer;
      color: var(--text);
    }
    i.bi {
      font-size: 18px;
      width: 18px;
      height: 18px;
      line-height: 18px;
      &:before {
        width: 18px;
        height: 18px;
        line-height: 18px;
      }
    }
    align-items: flex-start;
    gap: 2px;
    flex-shrink: 0;
  }
</style>
