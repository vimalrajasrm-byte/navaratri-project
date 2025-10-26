import { defineConfig } from 'vite'

export default defineConfig(async () => {
  // Dynamically import the plugin to avoid "ESM file cannot be loaded by require" errors
  const reactPlugin = (await import('@vitejs/plugin-react')).default
  return {
    plugins: [reactPlugin()],
    server: {
      port: 5173
    }
  }
})
