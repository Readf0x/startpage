<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import jquery from "jquery";
  // @ts-ignore
  import { defaultApi } from "./default";

  let api = defaultApi();
  $: icon = wmo(api.hourly.weathercode[new Date().getHours()])[1];
  $: temp =
    api.hourly.temperature_2m[new Date().getHours()] +
    api.hourly_units.temperature_2m;
  $: cond = wmo(api.hourly.weathercode[new Date().getHours()])[0];

  async function getApi(reload) {
    if (
      new Date().toISOString().slice(0, 10) != localStorage.getItem("expiry") || reload
    ) {
      // @ts-ignore
      jquery.getJSON(
        "https://api.open-meteo.com/v1/forecast?latitude=34.9554&longitude=-90.0348&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=auto&forecast_days=1",
        (json) => {
          // console.log(json);
          localStorage.setItem("api", JSON.stringify(json));
          localStorage.setItem("expiry", new Date().toISOString().slice(0, 10));
          api = JSON.parse(localStorage.getItem("api"));
        }
      );
    } else {
      api = JSON.parse(localStorage.getItem("api"));
    }
  }

  function wmo(x) {
    return {
      0: ["Clear Sky", "sun"],
      1: ["Mainly Clear", "sun"],
      2: ["Partly Cloudy", "cloud-sun"],
      3: ["Overcast", "clouds"],
      45: ["Fog", "cloud-fog"],
      48: ["Fog", "cloud-fog"],
      51: ["Light Drizzle", "cloud-drizzle"],
      53: ["Moderate Drizzle", "cloud-drizzle"],
      55: ["Dense Drizzle", "cloud-drizzle"],
      56: ["Light Freezing Drizzle", "cloud-sleet"],
      57: ["Dense Freezing Drizzle", "cloud-sleet"],
      61: ["Slight Rain", "cloud-rain"],
      63: ["Moderate Rain", "cloud-rain"],
      65: ["Heavy Rain", "cloud-rain"],
      66: ["Light Freezing Rain", "cloud-sleet"],
      67: ["Heavy Freezing Rain", "cloud-sleet"],
      71: ["Slight Snowfall", "cloud-snow"],
      73: ["Moderate Snowfall", "cloud-snow"],
      75: ["Heavy Snowfall", "cloud-snow"],
      77: ["Snow Grains", "cloud-snow"],
      80: ["Slight Rain Shower", "cloud-rain-heavy"],
      81: ["Moderate Rain Shower", "cloud-rain-heavy"],
      82: ["Violent Rain Shower", "cloud-rain-heavy"],
      85: ["Slight Snow Shower", "cloud-snow"],
      86: ["Heavy Snow Shower", "cloud-snow"],
      95: ["Light Thunderstorm", "cloud-lightning-rain"],
      96: ["Heavy Thunderstorm", "cloud-lightning-rain"],
    }[x];
  }

  onMount(() => {
    getApi();
    console.log("api var update");
    const interval = setInterval(() => {
      getApi();
      console.log("api var update");
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<template lang="pug">
  .weather
    .top
      i.bi(class="bi-{icon}")
      span.temp {temp}
    span.cond {cond}
</template>

<style lang="scss">
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
