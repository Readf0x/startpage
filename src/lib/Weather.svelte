<script>

</script>

<template lang="pug">
  .weather
    .top
      i.bi.bi-sun
      span.temp 78.7°F
    span.cond Mainly Clear
</template>

<style lang="scss">
  @import "@catppuccin/palette/scss/_mocha.scss";

  .weather {
    width: fit-content;
    position: absolute;
    top: 0;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    .top {
      display: flex;
      flex-direction: row;
      justify-content: end;
      min-width: 120px;
      justify-content: center;
      align-items: flex-end;
      gap: 6px;
      i.bi {
        font-size: 60px;
        margin: 0;
        padding: 0;
        position: relative;
        top: 6px;
      }
      span {
        text-align: right;
        width: 100%;
      }
    }
    .cond {
      text-align: right;
      min-width: 120px;
    }
  }
</style>
