import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
     VitePWA({
      registerType: 'autoUpdate', // Automatically update the service worker
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'], // Files to cache
      manifest: {
        name: 'Your App Name', // Your full app name
        short_name: 'App',      // Short name for home screen
        description: 'A short description of your app',
        theme_color: '#ffffff',  // Theme color for the browser UI
        icons: [
          {
            src: '/icons/icon-192x192.png', // Path in the 'public' folder
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        display: 'standalone', // Makes the app open in its own window
        start_url: './',       // Where the app starts
      },
    }),
  ],
});