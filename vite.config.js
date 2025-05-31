// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'
export default defineConfig({
  plugins: [
    tailwindcss(),react()
  ],
  server: {
    host: '0.0.0.0',        
  }

})