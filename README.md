[tests]: 	https://img.shields.io/circleci/project/github/rollup-cabal/log.svg
[tests-url]: https://circleci.com/gh/rollup-cabal/log

[cover]: https://codecov.io/gh/rollup-cabal/log/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/rollup-cabal/log

[chat]: https://img.shields.io/badge/gitter-rollup%2Frollup-brightgreen.svg
[chat-url]: https://gitter.im/rollup/rollup

[size]: https://packagephobia.now.sh/badge?p=log
[size-url]: https://packagephobia.now.sh/result?p=log

# @rollup-cabal/log

[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

<p align="center">
🌳
	<br>
	<img src=".github/screenshot.svg" width="320">
	<br>
</p>

A logger that provides targeted log levels and display options.

_Note: This module requires Node 8.11.0._

## Install

Using npm:

```console
$ npm install @rollup-cabal/log
```

Using yarn:

```console
$ yarn add @rollup-cabal/log
```

## Usage

```js
import { logger } from '@rollup-cabal/log';

const log = logger()

log.info('batman');

//→ ⓡ batman
```

## API

### logger([options])

Each log [instance](#instance) is unique by default. To persist an instance and
fetch it elsewhere, provide an `id` property on `options`.

#### options

Type: `object`

##### id

Type: `string`

A unique identifier for a log instance.

##### level

Type: `string`<br>
Default: `info`<br>
Values: `trace` `debug` `info` `warn` `error`

The minimum log level to display output for. Output for levels above the set
level will be displayed. Log levels shown in _Values_ above are in order of
lowest to highest.

Setting a level of `'info'` will display output for `log.info`,
`log.warn`, and `log.error`. Setting a level of `'error'` will display output
only for `log.error`.

##### preface

Type: `string`

Text to display before each log message.

```js
import { logger } from '@rollup-cabal/log';

const log = logger({ preface: '⋊ batcave ⋉' });

log.info('batman');

//→ ⓡ ⋊ batcave ⋉ batman
```

##### timestamp

Type: `string`<br>
Default: `boolean`

Set to `true` to display a timestamp before each log message.

```js
import { logger } from '@rollup-cabal/log';

const log = logger({ timestamp: true });

log.info('batman');

//→ [00:00:00] ⓡ batman
```

### Instance

#### .info(text: `string`)

Displays output to `stderr` prefaced with `ⓡ` colored blue. Akin to
`console.log`.

#### .warn(text: `string`)

Displays output to `stderr` prefaced with `ⓡ` colored yellow.

#### .error(text: `string`)

Displays output to `stderr` prefaced with `ⓡ` colored blue.

#### .debug(text: `string`)

Displays output to `stdout` prefaced with `ⓡ` colored magenta.

#### .trace(text: `string`)

Displays trace output akin to `console.trace` to `stdout` prefaced with `ⓡ`
colored cyan.

## Meta

[CONTRIBUTING](./.github/CONTRIBUTING)

[LICENSE (MIT)](./LICENSE)
