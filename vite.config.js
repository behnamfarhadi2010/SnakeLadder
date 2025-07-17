import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/snakeladder/', // Replace with your repository name for GitHub Pages
});