
module.exports = {
    default: [
      '--require-module ts-node/register',
      '--require ./world.ts',
      '--require regression/**/*.steps.ts',
      'regression/**/*.feature',
    ].join(' '),
    single: [
        '--require-module ts-node/register',
        '--require regression/**/*.steps.ts',
        '--require ./world.ts',
      ].join(' ')
  };
  
