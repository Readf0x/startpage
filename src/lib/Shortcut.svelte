<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let type = "font";
  export let icon = "link-45deg";
  export let link = "about:blank";
  export let id = -1;
  let self;

  function checkChar(char) {
    if(new RegExp("&(#(\d{1,}|x[0-9a-fA-F]{1,})|[a-zA-Z]{1,});").test(char)) return char;
    else return char.substring(0, 1);
  }

  function autoIcon() {
    if(icon.endsWith("-nofilter")) {
      if(icon == "auto-nofilter" && type == "img") return "https://s2.googleusercontent.com/s2/favicons?domain_url=" + link
      else return icon.slice(0, -9)
    } else {
      if(icon == "auto" && type == "img") return "https://s2.googleusercontent.com/s2/favicons?domain_url=" + link
      else return icon
    };
  }
</script>
  
<template lang="pug">
  .shortcut-container(bind:this="{self}" data-id="{id}")
    a(href="{link}")
      .shortcut
        +if("type == 'font'")
          i.bi(class="bi-{icon}")
        +if("type == 'img'")
          img(src="{autoIcon()}" alt="link to {link}" class:nofilter="{icon.endsWith('-nofilter')}" draggable="false")
        +if("type == 'char'")
          span.char {@html checkChar(icon)}
    button.remove(on:click!="{() => dispatch('remove', id)}")
      i.bi.bi-x
</template>
  
<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  .shortcut {
    display: flex;
    i, .char {
      color: map.get($dark, "text");
    }
    img {
      width: 22px;
      &:not(.nofilter) {
        filter: brightness(0) saturate(100%) invert(88%) sepia(4%) saturate(2257%) hue-rotate(194deg) brightness(97%) contrast(98%);
      }
    }
    .char {
      font-family: initial;
    }
    font-size: 22px;
    background: map.get($dark, "mantle");
    padding: 10px;
    border-radius: 50px;
    width: 22px;
    height: 22px;
    transition: 0.4s;
    border: 1px solid map.get($dark, "mantle");
    justify-content: center;
    align-items: center;
    line-height: 1;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: inherit;
    }
    &:visited {
      color: inherit;
    }
  }
  .remove {
    background: none;
    color: transparent;
    border: none;
    font: inherit;
    width: 22px;
    height: 22px;
    font-size: 22px;
    border-radius: 50px;
    cursor: pointer;
    outline: inherit;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: 30px;
    margin-top: -8px;
    transition: 0.4s;
    i:before {
      line-height: 22px !important;
      width: 22px;
      height: 22px;
    }
  }
  .shortcut-container {
    display: flex;
    &:hover .remove {
      background: map.get($dark, "overlay0");
      color: map.get($dark, "text");
    }
    border-radius: 50%;
    user-select: none;
  }
</style>