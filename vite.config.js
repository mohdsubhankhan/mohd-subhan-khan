import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/


export default defineConfig({
  base: "/mohd-subhan-khan/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})

// export default {
//   build: {
//     outDir: 'dist', // This should match the directory specified in Netlify    
//   },
// };
