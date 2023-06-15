import { defineConfig } from 'vite'

export default defineConfig((env) => ({
  build: {
    target: 'esnext',
    outDir: 'build',
    lib: {
      name: 'AllTheSources',
      fileName: 'index',
      entry: 'src/index.ts',
      formats: ['es']
    }
  },
  define: env.mode === 'development' ? {} : {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 4561,
      clientPort: 4561
    },
    fs: {
      allow: ['../..']
    }
  }
}))
