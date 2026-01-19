import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    preview: {
        host: true,
        port: 8080,
        allowedHosts: ['https://inquisitive-emmye-miljanaa-0c55bd32.koyeb.app/']
    }
})
