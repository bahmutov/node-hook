'use strict';

console.log('checking terminal resolution');
console.log('is terminal?', process.stdout.isTTY);
if (process.stdout.isTTY) {
  console.log('terminal window size',
    process.stdout.getWindowSize());
}
