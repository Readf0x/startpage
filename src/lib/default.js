import { variants } from "@catppuccin/palette";

export function defaultApi() {
  return JSON.parse(
    '{\
      "latitude":34.95994,\
      "longitude":-90.03964,\
      "generationtime_ms":0.1310110092163086,\
      "utc_offset_seconds":-18000,\
      "timezone":"America/Chicago",\
      "timezone_abbreviation":"CDT",\
      "elevation":90.0,\
      "hourly_units":{\
        "time":"iso8601",\
        "temperature_2m":"°F",\
        "weathercode":"wmo code"\
      },\
      "hourly":{\
        "time":[\
          "2023-09-18T00:00",\
          "2023-09-18T01:00",\
          "2023-09-18T02:00",\
          "2023-09-18T03:00",\
          "2023-09-18T04:00",\
          "2023-09-18T05:00",\
          "2023-09-18T06:00",\
          "2023-09-18T07:00",\
          "2023-09-18T08:00",\
          "2023-09-18T09:00",\
          "2023-09-18T10:00",\
          "2023-09-18T11:00",\
          "2023-09-18T12:00",\
          "2023-09-18T13:00",\
          "2023-09-18T14:00",\
          "2023-09-18T15:00",\
          "2023-09-18T16:00",\
          "2023-09-18T17:00",\
          "2023-09-18T18:00",\
          "2023-09-18T19:00",\
          "2023-09-18T20:00",\
          "2023-09-18T21:00",\
          "2023-09-18T22:00",\
          "2023-09-18T23:00",\
          "2023-09-19T00:00",\
          "2023-09-19T01:00",\
          "2023-09-19T02:00",\
          "2023-09-19T03:00",\
          "2023-09-19T04:00",\
          "2023-09-19T05:00",\
          "2023-09-19T06:00",\
          "2023-09-19T07:00",\
          "2023-09-19T08:00",\
          "2023-09-19T09:00",\
          "2023-09-19T10:00",\
          "2023-09-19T11:00",\
          "2023-09-19T12:00",\
          "2023-09-19T13:00",\
          "2023-09-19T14:00",\
          "2023-09-19T15:00",\
          "2023-09-19T16:00",\
          "2023-09-19T17:00",\
          "2023-09-19T18:00",\
          "2023-09-19T19:00",\
          "2023-09-19T20:00",\
          "2023-09-19T21:00",\
          "2023-09-19T22:00",\
          "2023-09-19T23:00",\
          "2023-09-20T00:00",\
          "2023-09-20T01:00",\
          "2023-09-20T02:00",\
          "2023-09-20T03:00",\
          "2023-09-20T04:00",\
          "2023-09-20T05:00",\
          "2023-09-20T06:00",\
          "2023-09-20T07:00",\
          "2023-09-20T08:00",\
          "2023-09-20T09:00",\
          "2023-09-20T10:00",\
          "2023-09-20T11:00",\
          "2023-09-20T12:00",\
          "2023-09-20T13:00",\
          "2023-09-20T14:00",\
          "2023-09-20T15:00",\
          "2023-09-20T16:00",\
          "2023-09-20T17:00",\
          "2023-09-20T18:00",\
          "2023-09-20T19:00",\
          "2023-09-20T20:00",\
          "2023-09-20T21:00",\
          "2023-09-20T22:00",\
          "2023-09-20T23:00",\
          "2023-09-21T00:00",\
          "2023-09-21T01:00",\
          "2023-09-21T02:00",\
          "2023-09-21T03:00",\
          "2023-09-21T04:00",\
          "2023-09-21T05:00",\
          "2023-09-21T06:00",\
          "2023-09-21T07:00",\
          "2023-09-21T08:00",\
          "2023-09-21T09:00",\
          "2023-09-21T10:00",\
          "2023-09-21T11:00",\
          "2023-09-21T12:00",\
          "2023-09-21T13:00",\
          "2023-09-21T14:00",\
          "2023-09-21T15:00",\
          "2023-09-21T16:00",\
          "2023-09-21T17:00",\
          "2023-09-21T18:00",\
          "2023-09-21T19:00",\
          "2023-09-21T20:00",\
          "2023-09-21T21:00",\
          "2023-09-21T22:00",\
          "2023-09-21T23:00",\
          "2023-09-22T00:00",\
          "2023-09-22T01:00",\
          "2023-09-22T02:00",\
          "2023-09-22T03:00",\
          "2023-09-22T04:00",\
          "2023-09-22T05:00",\
          "2023-09-22T06:00",\
          "2023-09-22T07:00",\
          "2023-09-22T08:00",\
          "2023-09-22T09:00",\
          "2023-09-22T10:00",\
          "2023-09-22T11:00",\
          "2023-09-22T12:00",\
          "2023-09-22T13:00",\
          "2023-09-22T14:00",\
          "2023-09-22T15:00",\
          "2023-09-22T16:00",\
          "2023-09-22T17:00",\
          "2023-09-22T18:00",\
          "2023-09-22T19:00",\
          "2023-09-22T20:00",\
          "2023-09-22T21:00",\
          "2023-09-22T22:00",\
          "2023-09-22T23:00",\
          "2023-09-23T00:00",\
          "2023-09-23T01:00",\
          "2023-09-23T02:00",\
          "2023-09-23T03:00",\
          "2023-09-23T04:00",\
          "2023-09-23T05:00",\
          "2023-09-23T06:00",\
          "2023-09-23T07:00",\
          "2023-09-23T08:00",\
          "2023-09-23T09:00",\
          "2023-09-23T10:00",\
          "2023-09-23T11:00",\
          "2023-09-23T12:00",\
          "2023-09-23T13:00",\
          "2023-09-23T14:00",\
          "2023-09-23T15:00",\
          "2023-09-23T16:00",\
          "2023-09-23T17:00",\
          "2023-09-23T18:00",\
          "2023-09-23T19:00",\
          "2023-09-23T20:00",\
          "2023-09-23T21:00",\
          "2023-09-23T22:00",\
          "2023-09-23T23:00",\
          "2023-09-24T00:00",\
          "2023-09-24T01:00",\
          "2023-09-24T02:00",\
          "2023-09-24T03:00",\
          "2023-09-24T04:00",\
          "2023-09-24T05:00",\
          "2023-09-24T06:00",\
          "2023-09-24T07:00",\
          "2023-09-24T08:00",\
          "2023-09-24T09:00",\
          "2023-09-24T10:00",\
          "2023-09-24T11:00",\
          "2023-09-24T12:00",\
          "2023-09-24T13:00",\
          "2023-09-24T14:00",\
          "2023-09-24T15:00",\
          "2023-09-24T16:00",\
          "2023-09-24T17:00",\
          "2023-09-24T18:00",\
          "2023-09-24T19:00",\
          "2023-09-24T20:00",\
          "2023-09-24T21:00",\
          "2023-09-24T22:00",\
          "2023-09-24T23:00"\
        ],\
        "temperature_2m":[\
          64.9,\
          63.8,\
          61.7,\
          60.4,\
          58.0,\
          57.4,\
          56.0,\
          55.0,\
          58.9,\
          66.8,\
          72.2,\
          76.8,\
          79.1,\
          80.5,\
          81.6,\
          82.6,\
          82.9,\
          82.2,\
          80.9,\
          75.9,\
          71.9,\
          68.4,\
          65.9,\
          64.8,\
          63.3,\
          61.9,\
          60.7,\
          60.1,\
          59.5,\
          59.4,\
          59.8,\
          58.3,\
          63.8,\
          70.4,\
          76.0,\
          80.4,\
          82.9,\
          84.7,\
          86.0,\
          86.5,\
          86.4,\
          85.9,\
          84.4,\
          78.7,\
          74.7,\
          72.0,\
          69.3,\
          66.7,\
          65.1,\
          63.6,\
          66.2,\
          64.7,\
          63.8,\
          63.3,\
          62.6,\
          62.4,\
          67.4,\
          74.4,\
          80.2,\
          84.2,\
          87.6,\
          90.1,\
          91.5,\
          90.3,\
          89.4,\
          89.9,\
          86.1,\
          80.7,\
          76.8,\
          75.9,\
          75.2,\
          76.2,\
          75.7,\
          75.2,\
          75.3,\
          75.0,\
          71.9,\
          71.0,\
          70.3,\
          69.0,\
          73.2,\
          79.1,\
          82.5,\
          87.2,\
          90.8,\
          92.4,\
          93.2,\
          92.4,\
          93.2,\
          90.8,\
          88.8,\
          85.2,\
          78.2,\
          75.7,\
          73.4,\
          71.9,\
          70.8,\
          70.8,\
          73.7,\
          73.7,\
          72.5,\
          68.1,\
          66.5,\
          68.1,\
          70.8,\
          77.1,\
          83.1,\
          86.9,\
          90.1,\
          92.1,\
          93.0,\
          93.2,\
          92.8,\
          91.9,\
          89.2,\
          82.2,\
          77.9,\
          75.9,\
          75.2,\
          76.8,\
          77.1,\
          75.7,\
          73.5,\
          70.4,\
          68.1,\
          67.5,\
          67.8,\
          68.9,\
          70.6,\
          73.1,\
          76.4,\
          81.4,\
          87.2,\
          91.5,\
          93.4,\
          93.9,\
          93.2,\
          91.0,\
          87.8,\
          84.9,\
          83.1,\
          81.7,\
          80.2,\
          78.5,\
          76.7,\
          74.6,\
          71.9,\
          69.0,\
          67.2,\
          67.6,\
          69.1,\
          70.3,\
          69.9,\
          69.2,\
          70.3,\
          75.0,\
          81.4,\
          86.5,\
          89.4,\
          91.0,\
          90.8,\
          88.2,\
          83.8,\
          79.5,\
          75.5,\
          71.6,\
          68.4,\
          66.4\
        ],\
        "weathercode":[\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          2,\
          1,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          1,\
          0,\
          0,\
          0,\
          0,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          2,\
          3,\
          3,\
          0,\
          3,\
          2,\
          0,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          1,\
          2,\
          1,\
          0,\
          2,\
          2,\
          0,\
          0,\
          0,\
          2,\
          3,\
          2,\
          3,\
          3,\
          3,\
          0,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          0,\
          3,\
          0,\
          0,\
          0,\
          0,\
          0,\
          1,\
          3,\
          3,\
          2,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          2,\
          2,\
          2,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          3,\
          2,\
          3,\
          3,\
          3,\
          51,\
          51,\
          51,\
          51,\
          51,\
          51,\
          51,\
          51,\
          51,\
          51,\
          51,\
          51,\
          2,\
          1,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0,\
          0\
        ]\
      }\
    }'
  );
}

export function defaultShortcuts() {
  localStorage.setItem(
    "shortcuts",
    JSON.stringify([
      {
        link: "https://github.com",
        type: "font",
        icon: "github",
      },
      {
        link: "https://stackoverflow.com/",
        type: "font",
        icon: "stack-overflow",
      },
      {
        link: "https://news.ycombinator.com",
        type: "char",
        icon: "Y",
      },
      {
        link: "https://youtube.com",
        type: "font",
        icon: "youtube",
      },
      {
        link: "https://wiki.archlinux.org",
        type: "img",
        icon: "https://wiki.installgentoo.com/images/f/f9/Arch-linux-logo.png",
      },
    ])
  );
  return JSON.parse(localStorage.getItem("shortcuts"));
}

export function defaultTheme() {
  localStorage.setItem(
    "customtheme",
    JSON.stringify({
      dark: {
        rosewater: variants.mocha.rosewater.hex,
        flamingo: variants.mocha.flamingo.hex,
        pink: variants.mocha.pink.hex,
        mauve: variants.mocha.mauve.hex,
        red: variants.mocha.red.hex,
        maroon: variants.mocha.maroon.hex,
        peach: variants.mocha.peach.hex,
        yellow: variants.mocha.yellow.hex,
        green: variants.mocha.green.hex,
        teal: variants.mocha.teal.hex,
        sky: variants.mocha.sky.hex,
        sapphire: variants.mocha.sapphire.hex,
        blue: variants.mocha.blue.hex,
        lavender: variants.mocha.lavender.hex,
        text: variants.mocha.text.hex,
        subtext1: variants.mocha.subtext1.hex,
        subtext0: variants.mocha.subtext0.hex,
        overlay2: variants.mocha.overlay2.hex,
        overlay1: variants.mocha.overlay1.hex,
        overlay0: variants.mocha.overlay0.hex,
        surface2: variants.mocha.surface2.hex,
        surface1: variants.mocha.surface1.hex,
        surface0: variants.mocha.surface0.hex,
        base: variants.mocha.base.hex,
        mantle: variants.mocha.mantle.hex,
        crust: variants.mocha.crust.hex,
      },
      light: {
        rosewater: variants.latte.rosewater.hex,
        flamingo: variants.latte.flamingo.hex,
        pink: variants.latte.pink.hex,
        mauve: variants.latte.mauve.hex,
        red: variants.latte.red.hex,
        maroon: variants.latte.maroon.hex,
        peach: variants.latte.peach.hex,
        yellow: variants.latte.yellow.hex,
        green: variants.latte.green.hex,
        teal: variants.latte.teal.hex,
        sky: variants.latte.sky.hex,
        sapphire: variants.latte.sapphire.hex,
        blue: variants.latte.blue.hex,
        lavender: variants.latte.lavender.hex,
        text: variants.latte.text.hex,
        subtext1: variants.latte.subtext1.hex,
        subtext0: variants.latte.subtext0.hex,
        overlay2: variants.latte.overlay2.hex,
        overlay1: variants.latte.overlay1.hex,
        overlay0: variants.latte.overlay0.hex,
        surface2: variants.latte.surface2.hex,
        surface1: variants.latte.surface1.hex,
        surface0: variants.latte.surface0.hex,
        base: variants.latte.base.hex,
        mantle: variants.latte.mantle.hex,
        crust: variants.latte.crust.hex,
      },
    })
  );
  return JSON.parse(localStorage.getItem("customtheme"));
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
