import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    copy({
      targets: [
        { src: 'src/styles/main.scss', dest: 'dist/styles' }
      ]
    })
  ],
  external: ['react', 'react-dom', 'prop-types']
};
