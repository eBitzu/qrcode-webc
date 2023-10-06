import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'qrcode-webc',
      formats: ['es', 'umd'],
      fileName: (format) => `qr-wc.${format}.js`
    }
  }
});
