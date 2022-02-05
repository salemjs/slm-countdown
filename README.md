# &lt;slm-countdown&gt; element

This lightweight (606byte min+gzip) and simple-to-use vanilla js web component will display the amount of time left or passed relative to a date with a variable refresh rate to take less resource. No additional dependencies are required.

![Countdown](https://c.tenor.com/pioJTCSFe78AAAAC/the-simpsons-homer.gif)

## How the refresh rate works?

The variable refresh rate is based on the time relative to the date-time set:
-   the default refresh rate is 30secs as it doesn't need to be that accurate to update hours, weeks, months and years
-   when the difference is less than an hour, the refresh rate is 1 sec to show up to date values

## What is shown, and how is calculated?

The web component doesn't show and calculate frictional values to keep this lightweight. It only indicates the seconds, minutes, hours, days, weeks, months, and years incrementally. For example, when the difference is "1 week and one day", it will show "1 week", and when it is less than a week, it will be "6 days".

## Usage

To to show the relative time

`<slm-countdown datetime='2022-01-01 01:00:00' />`

## Options

| Attribute | Description                                                                                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `datetime`   | To see the supported date formats click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) |

## Browser support

Browsers with native custom element support. I do not offer IE11 support, but you may be able to make it work with polyfills.

-   Chrome
-   Firefox
-   Safari
-   Microsoft Edge

## License

Distributed under the MIT license. See LICENSE for details.
