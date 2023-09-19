<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let type = "font";
  export let icon = "link-45deg";
  export let link = "https://example.com";
</script>

<template lang="pug">
  .modal-cover
  .modal
    h1.title Create Shortcut:
    input#link(name="link" placeholder="Enter Link..." bind:value="{link}")
    p Icon Type:
    select#type(name="type" bind:value="{type}")
      option(value="font") Font
      option(value="img") Image
      option(value="char") Unicode
    input#icon(name="icon" placeholder="Enter Icon Name..." bind:value="{icon}")
    +if("type == 'font'")
      p.info Should be a bootstrap icon (without the #[code bi-])
    +if("type == 'img'")
      p.info Should be #[code auto] or a link to an image
    +if("type == 'char'")
      p.info Should be a single character or an html symbol
    button#submit(on:click!="{() => dispatch('submit', [type, icon, link])}") Add
    button#cancel(on:click!="{() => dispatch('cancel')}") Cancel
</template>

<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  .modal-cover {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 4;
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: map.get($dark, "base");
    padding: 20px;
    border-radius: 20px;
    z-index: 5;
    min-width: 16vw;
    .title {
      margin-top: 0;
    }
    input {
      display: block;
      width: 100%;
      box-sizing: border-box;
      background: map.get($dark, "mantle");
      border: none;
      padding: 4px 6px;
      border-radius: 5px;
      outline: none;
      color: map.get($dark, "text");
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      &::placeholder {
        color: map.get($dark, "subtext0");
      }
    }
    select {
      width: 100%;
      margin-bottom: 10px;
      background: map.get($dark, "mantle");
      color: map.get($dark, "text");
      border: none;
      padding: 4px 6px;
      border-radius: 5px;
      outline: none;
    }
    p {
      margin: 0 3px 10px;
      code {
        background: map.get($dark, "overlay0");
        border-radius: 5px;
        padding: 0 2px;
      }
      &.info {
        font-size: 12px;
      }
    }
    button {
      background: map.get($dark, "mantle");
      border: none;
      box-sizing: content-box;
      padding: 4px 6px;
      border-radius: 5px;
      &#submit {
        float: right;
        color: map.get($dark, "green");
      }
      cursor: pointer;
      &:hover {
        background: map.get($dark, "surface0");
      }
    }
  }
</style>
