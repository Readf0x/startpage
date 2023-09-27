<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let theme = {};

  function keyPressHandler(ev) {
    if(ev.key == "Escape") dispatch("submit");
  }
</script>

<template lang="pug">
  .modal-cover
  .modal-outer
    h1.title Custom Theme:
    .modal-inner-wrapper
      .modal-inner
        h3 Dark:
        +each("Object.entries(theme.dark) as [color]")
          label(for="{color}") {color}
          input(
            name="{color}"
            placeholder="Hex value"
            bind:value="{theme.dark[color]}"
            style:border-bottom="1px solid {theme.dark[color]}"
          )
      .modal-inner
        h3 Light:
        +each("Object.entries(theme.light) as [color]")
          label(for="{color}") {color}
          input(
            name="{color}"
            placeholder="Hex value"
            bind:value="{theme.light[color]}"
            style:border-bottom="1px solid {theme.light[color]}"
          )
    button#submit(on:click!="{() => dispatch('submit')}") Done
    span.warning #[b Warning:] jank
    //- Insert button here if neccessary
</template>
<!-- Button:
  button#cancel(on:click!="{() => dispatch('cancel')}") Cancel 
-->

<svelte:window on:keydown={keyPressHandler} />

<style lang="scss">
  .modal-cover {
    width: 100%;
    height: 100%;
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
      padding: 20px;
    }
    &-inner {
      min-width: 16vw;
      max-height: 66vh;
      overflow-y: auto;
      padding-right: 10px;
      margin-bottom: 10px;
      &:not(:first-child) {
        margin-left: 20px;
      }
      &-wrapper {
        display: flex;
      }
    }
  }
  .title {
    margin-top: 0;
  }
  .warning {
    font-size: 12px;
    b {
      color: var(--red);
    }
  }
  h3 {
    margin: 0 0 5px;
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
    font-family: monospace;
    font-size: 14px;
    &::placeholder {
      color: var(--subtext0);
    }
    &:not(:last-child) {
      margin-bottom: 10px;
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
</style>
