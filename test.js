const url = require('path');
const assert = require('assert');
const cmacc = require('cmacc-compiler');

describe('helpers_definition_ref_in_def', function () {

  global.fs = require('fs');
  global.fetch = require('node-fetch');

  const opts = {
    base: __dirname
  };

  it('GeneralClauses', function (done) {
    const file = url.join('file://', __dirname, './GeneralClauses.cmacc');

    cmacc.compile(file, opts)
      .catch(done);
    });
});
