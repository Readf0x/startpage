<script>
  import { createEventDispatcher } from 'svelte';
  import { variants } from "@catppuccin/palette";
  const dispatch = createEventDispatcher();

  export let custom = {
    rosewater: { hex: variants.mocha.rosewater.hex },
    flamingo: { hex: variants.mocha.flamingo.hex },
    pink: { hex: variants.mocha.pink.hex },
    mauve: { hex: variants.mocha.mauve.hex },
    red: { hex: variants.mocha.red.hex },
    maroon: { hex: variants.mocha.maroon.hex },
    peach: { hex: variants.mocha.peach.hex },
    yellow: { hex: variants.mocha.yellow.hex },
    green: { hex: variants.mocha.green.hex },
    teal: { hex: variants.mocha.teal.hex },
    sky: { hex: variants.mocha.sky.hex },
    sapphire: { hex: variants.mocha.sapphire.hex },
    blue: { hex: variants.mocha.blue.hex },
    lavender: { hex: variants.mocha.lavender.hex },
    text: { hex: variants.mocha.text.hex },
    subtext1: { hex: variants.mocha.subtext1.hex },
    subtext0: { hex: variants.mocha.subtext0.hex },
    overlay2: { hex: variants.mocha.overlay2.hex },
    overlay1: { hex: variants.mocha.overlay1.hex },
    overlay0: { hex: variants.mocha.overlay0.hex },
    surface2: { hex: variants.mocha.surface2.hex },
    surface1: { hex: variants.mocha.surface1.hex },
    surface0: { hex: variants.mocha.surface0.hex },
    base: { hex: variants.mocha.base.hex },
    mantle: { hex: variants.mocha.mantle.hex },
    crust: { hex: variants.mocha.crust.hex }
  };

  function keyPressHandler(ev) {
    if(ev.key == "Escape") dispatch("cancel");
  }
</script>

<template lang="pug">
  .modal-cover
  .modal
    h1.title Custom Theme:
    +each("Object.entries(custom) as [color, value]")
      p test
    button#submit(on:click!="{() => dispatch('submit')}") Done
    button#cancel(on:click!="{() => dispatch('cancel')}") Cancel
</template>

<!-- <svelte:window on:keydown={keyPressHandler} /> -->

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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--base);
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
</style>
