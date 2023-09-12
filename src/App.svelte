<script>
  import { onMount } from "svelte";
  import jquery from "jquery";
  import "@catppuccin/palette/scss/_mocha.scss";

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
    if(localTime.toISOString().slice(0, 10) != localStorage.getItem("expiry")) {
      // @ts-ignore
      jquery.getJSON("https://api.open-meteo.com/v1/forecast?latitude=34.9554&longitude=-90.0348&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=auto", (json) => {
        localStorage.setItem("api", JSON.stringify(json));
        localStorage.setItem("expiry", localTime.toISOString().slice(0, 10));
      });
    };

    api = JSON.parse(localStorage.getItem("api"));

    const interval = setInterval(() => {
      localTime = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });
</script>

<main lang="pug">
  div.center
    p.time {time}
    p.date {date}
</main>

<style lang="scss">
  html {
    p {
      margin: 0;
    }
    // background: $base;
    // color: $text;
    font-family: 'Noto Sans', sans-serif;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    .time {
      text-align: center;
      font-variant-numeric: oldstyle-nums tabular-nums;
      font-family: Noto Serif;
      font-size: 70px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-variant: all-small-caps;
      letter-spacing: 12px;
    }
    .date {
      text-align: center;
      font-family: Noto Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 4.5px;
      // color: $subtext0;
    }
  }
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
      /*margin: 0 0 10px 10px;*/
      min-width: 120px;
      justify-content: center;
      align-items: flex-end;
      gap: 6px;
      i.bi {
        font-size: 60px;
        margin: 0;
        padding: 0;
        position: relative;
        top: 15px;
      }
      p {
        text-align: right;
        width: 100%;
        leading-trim: both;
        text-edge: cap;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .cond {
      text-align: right;
      min-width: 120px;
    }
  }
</style>
