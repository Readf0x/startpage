<script>
  export let dropdown;
  export let search;
  export let items;

  function itemClick(x) {
    localStorage.setItem("search", x);
    dropdown = !dropdown;
    search = x;
  }
</script>

<template lang="pug">
  .dropdown-menu(class:enabled="{dropdown}")
    +each("items as item, i")
      button.dropdown-item(
        class!="{item[0]}"
        on:click!="{() => {itemClick(i)}}"
      ) #[svg(xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18" fill="none") #[use(href="search.svg#{item[0]}")]] {item[1]}
</template>

<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  .dropdown-menu {
    list-style: none;
    background: map.get($dark, "mantle");
    border: 1px solid map.get($dark, "mantle");
    padding: 10px 15px;
    border-radius: 20px;
    transform: translateY(-110%);
    position: absolute;
    margin-top: 6px;
    margin-left: 1px;
    transition: 0.4s;
    z-index: 2;
    opacity: 0;
    &.enabled {
      animation: slideDown 0.4s ease-in-out;
      transform: translateY(0%);
      opacity: 1;
    }
    .dropdown-item {
      border: none;
      background: none;
      display: block;
      cursor: pointer;
      width: 100%;
      text-align: left;
      color: map.get($dark, "text");
      &:hover {
        color: map.get($dark, "subtext0");
      }
      svg {
        position: relative;
        top: 1px;
      }
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-110%);
    }
    to {
      transform: translateY(0%);
    }
  }
</style>
