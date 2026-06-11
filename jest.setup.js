/* eslint-env node */
/ eslint-disable no-redeclare */

const { TextEncoder, TextDecoder } = require('util')

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
