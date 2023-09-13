<script>
  import jquery from "jquery";
  import { onMount } from "svelte";

  function themeMatch() {
    // @ts-ignore
    if (document.querySelector("input[name=theme]").checked) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }

  onMount(() => {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        // @ts-ignore
        document.querySelector("input[name=theme]").checked = true;
        document.body.classList.add("light");
      } else {
        // @ts-ignore
        document.querySelector("input[name=theme]").checked = false;
        document.body.classList.remove("light");
      }
    })
  })
</script>

<template lang="pug">
  label.switch
    input(type="checkbox", name="theme" on:click="{themeMatch}")
    span.slider.round
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
    &:before {
      position: absolute;
      content: "";
      height: 34px;
      width: 34px;
      background-color: map.get($dark, "surface0");
      -webkit-transition: .4s;
      transition: .4s;
    }
    .bi {
      position: relative;
      font-size: 20px;
      top: 3px;
      transition: 0.4s;
      &-moon-stars {
        left: 6px;
        color: map.get($dark, "text");
      }
      &-sun {
        left: 23px;
        color: map.get($dark, "surface1");
      }
    }
    /* Rounded sliders */
    &.round {
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
  }
</style>
