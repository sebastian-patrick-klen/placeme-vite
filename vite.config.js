import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    envPrefix: 'VITE_',
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
