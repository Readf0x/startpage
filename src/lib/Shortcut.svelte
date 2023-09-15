<script>
  export let icon = "font";
  export let iconName = "bi-link-45deg";
  export let link = "about:blank";
  </script>
  
  <template lang="pug">
    a.shortcut(href="{link}")
      +if("icon == 'font'")
        i.bi(class="{iconName}")
      +if("icon == 'img'")
        img(src="{iconName}")
  </template>
  
  <style lang="scss">
    @use "sass:map";
    @import "../boiler.scss";
  
    a.shortcut {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: inherit;
      }
      &:visited {
        color: inherit;
      }
      font-size: 22px;
      background: map.get($dark, "mantle");
      padding: 10px;
      border-radius: 50px;
      width: 22px;
      height: 22px;
    }
  </style>