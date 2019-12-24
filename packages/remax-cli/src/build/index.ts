import * as rollup from 'rollup';
import * as path from 'path';
import * as fs from 'fs';
import API from '../API';
import winPath from '../winPath';
import esm from 'esm';
import rollupConfig from './rollupConfig';
import getConfig from '../getConfig';
import { Context } from '../types';
import runWatcher from './watcher';
import { output } from './utils/output';

export default async (argv: any, context?: Context) => {
  const options = {
    ...getConfig(),
    ...(context ? context.config : {}),
  };

  API.installAdapterPlugins(argv.target);

  if (
    !fs.existsSync(winPath(path.join(__dirname, `./adapters/${argv.target}`)))
  ) {
    output(`\n🚨 平台 ${argv.target} 暂不支持`, 'red');
    process.exit(1);
  }

  // eslint-disable-next-line
  require = esm(module, {
    cjs: {
      dedefault: true,
    },
  });
  const targetConfig = require(`./adapters/${argv.target}`);

  const rollupOptions: rollup.RollupOptions = rollupConfig(
    options,
    argv,
    targetConfig,
    context
  );

  if (argv.watch) {
    runWatcher(options, rollupOptions, argv, context);
    try {
      require('remax-stats').run();
    } catch (e) {
      // ignore
    }
  } else {
    try {
      output('🚀 开始 build...', 'blue');
      const bundle = await rollup.rollup(rollupOptions);
      await bundle.write(rollupOptions.output as rollup.OutputOptions);
      output('💡 完成', 'green');
    } catch (error) {
      const name = error.code === 'PLUGIN_ERROR' ? error.plugin : error.code;
      output(`\n🚨 [${name}]: ${error.message}`, 'red');
      throw error;
    }
  }
};
