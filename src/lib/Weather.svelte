<script>
  import { onMount } from "svelte";
  import jquery from "jquery";

  let api;

  onMount(() => {
    if(new Date().toISOString().slice(0, 10) != localStorage.getItem("expiry")) {
      // @ts-ignore
      jquery.getJSON("https://api.open-meteo.com/v1/forecast?latitude=34.9554&longitude=-90.0348&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit&timezone=auto", (json) => {
        localStorage.setItem("api", JSON.stringify(json));
        localStorage.setItem("expiry", new Date().toISOString().slice(0, 10));
      });
    };

    api = JSON.parse(localStorage.getItem("api"));
  });

  jquery(setInterval(function(){
    function wmo(x) {
      return ({
        0: ["Clear Sky", "bi-sun"],
        1: ["Mainly Clear", "bi-sun"],
        2: ["Partly Cloudy", "bi-cloud-sun"],
        3: ["Overcast", "bi-clouds"],
        45: ["Fog", "bi-cloud-fog"],
        48: ["Fog", "bi-cloud-fog"],
        51: ["Light Drizzle", "bi-cloud-drizzle"],
        53: ["Moderate Drizzle", "bi-cloud-drizzle"],
        55: ["Dense Drizzle", "bi-cloud-drizzle"],
        56: ["Light Freezing Drizzle", "bi-cloud-sleet"],
        57: ["Dense Freezing Drizzle", "bi-cloud-sleet"],
        61: ["Slight Rain", "bi-cloud-rain"],
        63: ["Moderate Rain", "bi-cloud-rain"],
        65: ["Heavy Rain", "bi-cloud-rain"],
        66: ["Light Freezing Rain", "bi-cloud-sleet"],
        67: ["Heavy Freezing Rain", "bi-cloud-sleet"],
        71: ["Slight Snowfall", "bi-cloud-snow"],
        73: ["Moderate Snowfall", "bi-cloud-snow"],
        75: ["Heavy Snowfall", "bi-cloud-snow"],
        77: ["Snow Grains", "bi-cloud-snow"],
        80: ["Slight Rain Shower", "bi-cloud-rain-heavy"],
        81: ["Moderate Rain Shower", "bi-cloud-rain-heavy"],
        82: ["Violent Rain Shower", "bi-cloud-rain-heavy"],
        85: ["Slight Snow Shower", "bi-cloud-snow"],
        86: ["Heavy Snow Shower", "bi-cloud-snow"],
        95: ["Light Thunderstorm", "bi-cloud-lightning-rain"],
        96: ["Heavy Thunderstorm", "bi-cloud-lightning-rain"],
      })[x];
    }
    jquery(".test").text(api.error);
    if(!api.error) {
      jquery(".temp").text(
          api.hourly.temperature_2m[new Date().getHours()] +
          api.hourly_units.temperature_2m);
      jquery(".cond").text(wmo(api.hourly.weathercode[new Date().getHours()])[0]);
      jquery(".weather i").removeClass (function (index, className) {
        return (className.match (/(^|\s)bi-\S+/g) || []).join(' ');
      });
      jquery(".weather i").addClass (wmo(api.hourly.weathercode[new Date().getHours()])[1]);
    } else {
      jquery(".temp").text("error")
      jquery(".cond").text("Error Loading!")
      jquery(".weather i").removeClass (function (index, className) {
        return (className.match (/(^|\s)bi-\S+/g) || []).join(' ');
      });
      jquery(".weather i").addClass ('bi-x-lg');
    }
  }));
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
