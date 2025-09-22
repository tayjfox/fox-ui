// /* eslint-disable @typescript-eslint/no-var-requires */
// require('ts-node/register');

/**
 * This file contains the configuration for Metro, the JavaScript bundler used by Expo.
 */
/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const path = require('path');

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;

module.exports = (() => {
  const config = getDefaultConfig(projectRoot);

  // 1. Watch all files within the monorepo
  // config.watchFolders = [...workspaceRoot];
  // 2. Let Metro know where to resolve packages, and in what order
  // config.resolver.nodeModulesPaths = [
  //   path.resolve(projectRoot, 'node_modules'),
  //   path.resolve(workspaceRoot, 'node_modules'),
  // ];
  // 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
  // config.resolver.disableHierarchicalLookup = true;

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return withNativeWind(config, {
    input: './src/global.css',
    inlineRem: 16,
  });
})();
