import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import rspack from '@rspack/core'
import { withZephyr } from 'zephyr-repack-plugin'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import pkg from './package.json' with { type: 'json' };
/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default withZephyr()(env => {
  return {
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions(),
  },
  module: {
    rules: [
      ...Repack.getJsTransformRules(),
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [
    new Repack.RepackPlugin(),
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'Profile',
      filename: 'Profile.container.js.bundle',
      dts: false,
      exposes: {
        './ProfileNavigator': './src/navigation/ProfileNavigator',
      },
      shared: Object.fromEntries(
        Object.entries(pkg.dependencies).map(([dep, version]) => {
          return [
            dep,
            {
              singleton: true,
              eager: true,
              requiredVersion: version,
              version: version.replace('^', ''),
            },
          ]
        }),
      ),
    }),
    new rspack.IgnorePlugin({
      resourceRegExp: /^@react-native-masked-view/,
    }),
  ]
};
});
