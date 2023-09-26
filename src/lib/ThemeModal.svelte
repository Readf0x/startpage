<script>
  import { createEventDispatcher } from 'svelte';
  import { variants } from "@catppuccin/palette";
  const dispatch = createEventDispatcher();

  export let custom = {
    rosewater: { hex: variants.latte.rosewater.hex },
    flamingo: { hex: variants.latte.flamingo.hex },
    pink: { hex: variants.latte.pink.hex },
    mauve: { hex: variants.latte.mauve.hex },
    red: { hex: variants.latte.red.hex },
    maroon: { hex: variants.latte.maroon.hex },
    peach: { hex: variants.latte.peach.hex },
    yellow: { hex: variants.latte.yellow.hex },
    green: { hex: variants.latte.green.hex },
    teal: { hex: variants.latte.teal.hex },
    sky: { hex: variants.latte.sky.hex },
    sapphire: { hex: variants.latte.sapphire.hex },
    blue: { hex: variants.latte.blue.hex },
    lavender: { hex: variants.latte.lavender.hex },
    text: { hex: variants.latte.text.hex },
    subtext1: { hex: variants.latte.subtext1.hex },
    subtext0: { hex: variants.latte.subtext0.hex },
    overlay2: { hex: variants.latte.overlay2.hex },
    overlay1: { hex: variants.latte.overlay1.hex },
    overlay0: { hex: variants.latte.overlay0.hex },
    surface2: { hex: variants.latte.surface2.hex },
    surface1: { hex: variants.latte.surface1.hex },
    surface0: { hex: variants.latte.surface0.hex },
    base: { hex: "#ffe0ee" },
    mantle: { hex: "#ffeffe" },
    crust: { hex: "#ffaed3" }
  };

  function keyPressHandler(ev) {
    if(ev.key == "Escape") dispatch("cancel");
  }
</script>

<template lang="pug">
  .modal-cover
  .modal-outer
    .modal-inner
      h1.title Custom Theme:
      +each("Object.entries(custom) as [color, value]")
        p {color}: {value.hex}
      button#submit(on:click!="{() => dispatch('submit')}") Done
      button#cancel(on:click!="{() => dispatch('cancel')}") Cancel
</template>

<svelte:window on:keydown={keyPressHandler} />

<style lang="scss">
  .modal-cover {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
  }

  .modal {
    &-outer {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--base);
      border-radius: 20px;
      z-index: 5;
      overflow: hidden;
    }
    &-inner {
      min-width: 16vw;
      max-height: 66vh;
      overflow-y: auto;
      padding: 20px;
      .title {
        margin-top: 0;
      }
      input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        background: var(--mantle);
        border: none;
        padding: 4px 6px;
        border-radius: 5px;
        outline: none;
        color: var(--text);
        &:not(:last-child) {
          margin-bottom: 10px;
        }
        &::placeholder {
          color: var(--subtext0);
        }
      }
      select {
        width: 100%;
        margin-bottom: 10px;
        background: var(--mantle);
        color: var(--text);
        border: none;
        padding: 4px 6px;
        border-radius: 5px;
        outline: none;
      }
      p {
        margin: 0 3px 10px;
        code {
          background: var(--overlay0);
          border-radius: 5px;
          padding: 0 2px;
        }
        &.info {
          font-size: 12px;
        }
      }
      button {
        background: var(--mantle);
        border: none;
        box-sizing: content-box;
        padding: 4px 6px;
        border-radius: 5px;
        &#submit {
          float: right;
          color: var(--green);
        }
        cursor: pointer;
        &:hover {
          background: var(--surface0);
        }
      }
    }
  }
</style>
