import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: './src/index.ts',
            fileName: () => 'index.js',
            formats: ['es']
        }
        // sourcemap: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
