<script>

  import jquery from "jquery";

</script>
<template lang="pug">
  .search
    .provider-icon
      i.bi.bi-google
    .provider-dropdown
      i.bi.bi-caret-down-fill
    label.search-box
      input(placeholder="Start Typing...")
    .submit
      i.bi.bi-search
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
    }
    .provider-icon {
      padding: 0 4px 0 8px;
      border-radius: 30px 4px 4px 30px;
    }
    .search-box {
      width: 100%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      cursor: text;
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
</style>