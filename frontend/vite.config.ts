import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escutar em todas as interfaces
    port: 5173,      // Porta do container, não precisa mudar
  },
});