<script>
  import jquery from "jquery";
  import { onMount, afterUpdate } from "svelte";

  export let customTheme;

  let checked =
    localStorage.getItem("theme") != null
      ? localStorage.getItem("theme") == "true"
      : window.matchMedia("(prefers-color-scheme: light)").matches;

  let theme = customTheme.dark;

  function themeMatch() {
    if (checked) {
      document.body.classList.add("light");
      theme = customTheme.light;
      // @ts-ignore
      localStorage.setItem("theme", true);
    } else {
      document.body.classList.remove("light");
      theme = customTheme.dark;
      // @ts-ignore
      localStorage.setItem("theme", false);
    }
  }

  $: jquery(":root").css({
    "--rosewater": theme.rosewater,
    "--flamingo": theme.flamingo,
    "--pink": theme.pink,
    "--mauve": theme.mauve,
    "--red": theme.red,
    "--maroon": theme.maroon,
    "--peach": theme.peach,
    "--yellow": theme.yellow,
    "--green": theme.green,
    "--teal": theme.teal,
    "--sky": theme.sky,
    "--sapphire": theme.sapphire,
    "--blue": theme.blue,
    "--lavender": theme.lavender,
    "--text": theme.text,
    "--subtext1": theme.subtext1,
    "--subtext0": theme.subtext0,
    "--overlay2": theme.overlay2,
    "--overlay1": theme.overlay1,
    "--overlay0": theme.overlay0,
    "--surface2": theme.surface2,
    "--surface1": theme.surface1,
    "--surface0": theme.surface0,
    "--base": theme.base,
    "--mantle": theme.mantle,
    "--crust": theme.crust
  });

  onMount(() => {
    themeMatch();
  });
  afterUpdate(() => {
    themeMatch();
  });
</script>

<template lang="pug">
  label.switch
    input(type="checkbox", name="theme" bind:checked="{checked}" on:change="{themeMatch}")
    span.slider
      i.bi.bi-moon-stars
      i.bi.bi-sun
</template>

<style lang="scss">
  /* The switch - the box around the slider */
  .switch {
    margin: 15px;
    position: relative;
    width: 70px;
    height: 34px;
    // right: 25px;
    /* Hide default HTML checkbox */
    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background-color: var(--mantle);
        &:before {
          -webkit-transform: translateX(36px);
          -ms-transform: translateX(36px);
          transform: translateX(36px);
          background: var(--surface0);
          outline: 1px solid var(--overlay2);
        }
        .bi {
          &-moon-stars {
            color: var(--surface1);
          }
          &-sun {
            color: var(--text);
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
    background-color: var(--mantle);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    display: flex;
    align-items: center;
    &:before {
      position: absolute;
      content: "";
      height: 34px;
      width: 34px;
      background-color: var(--surface0);
      -webkit-transition: 0.4s;
      transition: 0.4s;
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
        color: var(--text);
      }
      &-sun {
        left: 23px;
        color: var(--surface1);
      }
    }
  }
</style>
