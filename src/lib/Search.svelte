<script>
  import jquery from "jquery";

  let value;
  let dorp;
  let dropdown = false;
  let google = true;

  $: if(dorp) offsetCalculate();

  function submit() {
    location.href = "https://www.google.com/search?q=" + encodeURIComponent(value)
    value = "";
  }

  // https://stackoverflow.com/questions/55719056/position-an-element-relative-to-another-that-is-not-its-parent
  function offsetCalculate(){
    var offset = jquery(".provider-dropdown").offset();
    jquery(".dropdown-menu").css({
      "left": offset.left - 80
    }).focus();
  }
</script>
<template lang="pug">
  .search
    .provider-icon(on:click!="{() => {dropdown = !dropdown}}")
      +if("google")
        i.bi.bi-google
    .provider-dropdown(on:click!="{() => {dropdown = !dropdown}}")
      i.bi.bi-caret-down-fill(style="font-size: 12px;")
    label.search-box
      form(name="search" on:submit|preventDefault="{submit}")
        input(placeholder="Start Typing..." bind:value)
    .submit(on:click="{submit}")
      i.bi.bi-search
  +if("dropdown")
    .dropdown-menu(bind:this="{dorp}" on:blur!="{() => {dropdown = !dropdown}}")
      p#google Google
      p#duck DuckDuckGo
      p#bing Bing
</template>

<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  .search {
    display: flex;
    width: 66vw;
    margin: auto;
    height: 30px;
    transition: 0.4s;
    & > * {
      background: map.get($dark, "mantle");
      border-radius: 2px;
      height: 100%;
      display: flex;
      align-items: center;
      transition: 0.4s;
      border: 1px solid map.get($dark, "mantle");
    }
    .provider-icon {
      padding: 0 4px 0 8px;
      border-radius: 30px 4px 4px 30px;
      cursor: pointer;
    }
    .provider-dropdown {
      width: 12px;
      display: flex;
      justify-content: center;
      appearance: none;
      color: inherit;
      cursor: pointer;
      &:active {
        color: map.get($dark, "subtext0");
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
        color: map.get($dark, "text");
        width: 100%;
        font-size: 14px;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: map.get($dark, "subtext0");
          font-style: italic;
        }
      }
    }
    .submit {
      padding: 0 8px 0 4px;
      border-radius: 4px 30px 30px 4px;
      cursor: pointer;
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

  .dropdown-menu {
    width: fit-content;
    padding: 1px 15px;
    border-radius: 20px;
    text-align: left;
    line-height: 0.8;
    background: map.get($dark, "mantle");
    border: 1px solid map.get($dark, "overlay0");
    position: absolute;
    transition: 0.4s;
    top: 170px;
    p {
      transition: 0.4s;
      cursor: pointer;
      &:hover {
        color: map.get($dark, "subtext0");
      }
    }
  }
</style>