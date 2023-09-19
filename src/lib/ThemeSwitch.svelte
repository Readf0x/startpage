<script>
  import jquery from "jquery";
  import { onMount } from "svelte";
  // const { setTimeout } = require('timers/promises');

  $: checked = localStorage.getItem("theme") != null ? localStorage.getItem("theme") == "true" : window.matchMedia('(prefers-color-scheme: light)').matches;

  function themeMatch() {
    if (checked) {
      document.body.classList.add("light");
      // @ts-ignore
      localStorage.setItem("theme", true);
    } else {
      document.body.classList.remove("light");
      // @ts-ignore
      localStorage.setItem("theme", false);
    }
  }

  onMount(() => {
    themeMatch();
  })
</script>

<template lang="pug">
  label.switch
    input(type="checkbox", name="theme" bind:checked="{checked}" on:change="{themeMatch}")
    span.slider
      i.bi.bi-moon-stars
      i.bi.bi-sun
</template>

<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  /* The switch - the box around the slider */
  .switch {
    margin: 15px;
    position: relative;
    width: 70px;
    height: 34px;
    float: right;
    /* Hide default HTML checkbox */
    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background-color: map.get($light, "mantle");
        &:before {
          -webkit-transform: translateX(36px);
          -ms-transform: translateX(36px);
          transform: translateX(36px);
          background: map.get($light, "surface0");
          outline: 1px solid map.get($light, "text");
        }
        .bi {
          &-moon-stars {
            color: map.get($light, "surface1");
          }
          &-sun {
            color: map.get($light, "text");
          }
        }
      }
    }
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: map.get($dark, "mantle");
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    display: flex;
    align-items: center;
    &:before {
      position: absolute;
      content: "";
      height: 34px;
      width: 34px;
      background-color: map.get($dark, "surface0");
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }
    .bi {
      position: relative;
      font-size: 20px;
      transition: 0.4s;
      width: 20px;
      height: 20px;
      line-height: 20px;
      &:before {
        width: 20px;
        height: 20px;
        line-height: 20px;
      }
      &-moon-stars {
        left: 6px;
        color: map.get($dark, "text");
      }
      &-sun {
        left: 23px;
        color: map.get($dark, "surface1");
      }
    }
  }
</style>
