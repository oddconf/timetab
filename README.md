# TimeTab

The programmer's clock.

## About
TimeTab does one thing: it shows you the time in whatever format you want. The home page ([timetab.huggins.io/](timetab.huggins.io/)) will prompt you to enter a format string. The default is `h:mm:ss A`, which will display something similar to `3:57:54 PM`. TimeTab uses the Dynamic Routing feature of NextJS to display whatever format you choose: for example, [timetab.huggins.io/h:mm:ss%20A](timetab.huggins.io/h:mm:ss%20A).

## Usage
TimeTab uses Moment.js to format the current time. You can view the full list of formatting tokens on the [Moment.js docs](https://momentjs.com/docs/#/displaying/format/). Here are some of the more important tokens:

| Description | Token | Output          |
|-------------|-------|-----------------|
| Hour        | H     | 0 1 ... 22 23   |
|             | HH    | 00 01 ... 22 23 |
|             | h     | 1 2 ... 11 12   |
|             | hh    | 01 02 ... 11 12 |
|             | k     | 1 2 ... 23 24   |
|             | kk    | 01 02 ... 23 24 |
| Minute      | m     | 0 1 ... 58 59   |
|             | mm    | 00 01 ... 58 59 |
| Second      | s     | 0 1 ... 58 59   |
|             | ss    | 00 01 ... 58 59 |