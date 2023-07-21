import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        svgr({ exportAsDefault: true }),
        react()
    ],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' }
        ]
    },
    define: {
        IS_DEV: JSON.stringify(true),
        API: JSON.stringify('http://localhost:8000'),
        PROJECT: JSON.stringify('frontend')
    },
    css: {
        modules: {
            generateScopedName: '[path][name]__[local]--[hash:base64:5]'
        }
    }
})
