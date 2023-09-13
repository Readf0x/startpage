<script>
  import { onMount } from "svelte";

  let localTime = new Date();
  let api;
  $: time = Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(localTime);
  $: date = Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  }).format(localTime);

  onMount(() => {
    const interval = setInterval(() => {
      localTime = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  })
</script>

<template lang="pug">
  p.time {time}
  p.date {date}
</template>

<style lang="scss">
  @use "sass:map";
  @import "../boiler.scss";

  .time {
    font-variant-numeric: oldstyle-nums tabular-nums;
    font-family: Noto Serif;
    font-size: 4.5vw;
    font-variant: all-small-caps;
    letter-spacing: 12px;
    margin: 10px;
  }
  .date {
    font-family: Noto Sans;
    font-size: 15px;
    letter-spacing: 4.5px;
    color: map.get($dark, "subtext0");
  }
</style>
