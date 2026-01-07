// Add TextEncoder/TextDecoder polyfills for Node environment
const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
