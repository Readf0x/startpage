<script>
  export let dropdown;
  export let search = 0;
  export let items = [["google", "Google"], ["duck", "DuckDuckGo"], ["bing", "Bing"]];
</script>

<template lang="pug">
  .dropdown-menu(class:enabled="{dropdown}")
    +each("items as item, i")
      button.dropdown-item(class!="{item[0]}" on:click!="{() => {search = i}}") {item[1]}
</template>

<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  .dropdown-menu {
    list-style: none;
    background: map.get($dark, "mantle");
    width: fit-content;
    display: none;
    &.enabled {
      display: initial;
    }
    .dropdown-item {
      border: none;
      background: none;
    }
  }
</style>
