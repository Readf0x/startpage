<script>
  export let type = "font";
  export let icon = "bi-link-45deg";
  export let link = "about:blank";
</script>
  
<template lang="pug">
  a(href="{link}")
    .shortcut
      +if("type == 'font'")
        i.bi(class="bi-{icon}")
      +if("type == 'img'")
        img(src="{icon}" height="22" width="22")
</template>
  
<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  .shortcut {
    display: flex;
    i {
      align-self: center;
      color: map.get($dark, "text");
    }
    font-size: 22px;
    background: map.get($dark, "mantle");
    padding: 10px;
    border-radius: 50px;
    width: 22px;
    height: 22px;
    transition: 0.4s;
    border: 1px solid map.get($dark, "mantle");
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
</style>