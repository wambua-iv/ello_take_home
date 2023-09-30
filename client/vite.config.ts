import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    //setup for docker image creation

    server:{
      watch: {
        usePolling: true,
      },
      host: true,
      port: 4090
    }
})