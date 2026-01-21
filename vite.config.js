import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
    plugins: [react()],
    server: {
        host: true
    },
    preview: {
        allowedHosts: [
            "inquisitive-emmye-miljanaa-0c55bd32.koyeb.app"
        ]
    }
})