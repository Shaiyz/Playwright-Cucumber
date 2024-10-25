
module.exports = {
    default: [
      '--require-module ts-node/register',
      '--require regression/**/*.steps.ts',
      'regression/**/*.feature',
    ].join(' '),
    single: [
        '--require-module ts-node/register',
        '--require regression/**/*.steps.ts',
      ].join(' ')
  };
  
