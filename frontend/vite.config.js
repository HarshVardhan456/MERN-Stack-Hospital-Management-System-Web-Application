import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


import crypto from 'crypto-browserify';

export default defineConfig({
  // other configurations
  plugins: [react()],
  define: {
    'global': {},
  },
  optimizeDeps: {
    include: ['crypto-browserify'],
  },
});
