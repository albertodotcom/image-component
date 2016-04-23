'use strict';
require('babel-core/register');

function noop() {
  return null;
}
require.extensions['.png'] = noop;
