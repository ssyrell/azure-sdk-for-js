import nodeResolve from "rollup-plugin-node-resolve";
import multiEntry from "rollup-plugin-multi-entry";
import cjs from "rollup-plugin-commonjs";

/**
 * @type {import('rollup').RollupFileOptions}
 */

const pkg = require("./package.json");
const version = pkg.version;
const production = process.env.NODE_ENV === "production";
const banner = [
  "/*!",
  " * Copyright (c) Microsoft and contributors. All rights reserved.",
  " * Licensed under the MIT License. See License.txt in the project root for",
  " * license information.",
  " * ",
  ` * Azure KeyVault Secrets SDK for JavaScript - ${version}`,
  " */"
].join("\n");

const depNames = Object.keys(pkg.dependencies);

export function nodeConfig(test = false, production = false) {
  const externalNodeBuiltins = ["url"];
  const baseConfig = {
    input: "dist-esm/src/index.js",
    external: depNames.concat(externalNodeBuiltins),
    output: {
      file: "dist/index.js",
      format: "cjs",
      name: "Azure.Keyvault.Secrets",
      sourcemap: true,
      banner: banner
    },
    plugins: [nodeResolve({ preferBuiltins: true }), cjs()]
  };

  if (test) {
    // entry point is every test file
    baseConfig.input = ["dist-esm/*.spec.js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));

    // different output file
    baseConfig.output.file = "dist-test/index.node.js";

    // mark assert as external
    baseConfig.external.push("assert", "fs", "path");

    baseConfig.context = "null";
  } else if (production) {
    baseConfig.plugins.push(uglify());
  }

  return baseConfig;
}

export function browserConfig(test = false, production = false) {
  const baseConfig = {
    input: "dist-esm/src/index.js",
    output: {
      file: "browser/index.js",
      format: "umd",
      name: "Azure.Keyvault.Secrets",
      sourcemap: true,
      globals: {
        "@azure/core-http": "Azure.Core.HTTP"
      },
      banner: banner
    },
    plugins: [
      nodeResolve({
        preferBuiltins: false,
        browser: true,
        module: true
      }),
      cjs()
    ]
  };

  if (test) {
    baseConfig.input = ["dist-esm/test/*.spec.js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));
    baseConfig.output.file = "dist-test/index.browser.js";
    // mark fs-extra as external
    baseConfig.external = ["fs-extra"];

    baseConfig.context = "null";
  } else if (production) {
    baseConfig.output.file = "browser/azure-keyvault-secrets.min.js";
    baseConfig.plugins.push(
      uglify({
        output: {
          preamble: banner
        }
      })
      // Comment visualizer because it only works on Node.js 8+; Uncomment it to get bundle analysis report
      // visualizer({
      //   filename: "./statistics.html",
      //   sourcemap: true
      // })
    );
  }

  return baseConfig;
}
