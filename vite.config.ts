import { defineConfig, type ViteDevServer } from 'vite'
import vue from '@vitejs/plugin-vue'

const prettyLog = () => {
  return {
    name: 'custom-print',
    configureServer(server: ViteDevServer) {
      server.printUrls = () => {
        console.log('\n')
        console.log('  ╔═══════════════════════════════════════════╗')
        console.log('  ║    💻 FORGY ADMIN PANEL                   ║')
        console.log(`  ║    ➜ Local:   http://localhost:${server.config.server.port}        ║`)
        console.log('  ║    ➜ Status:  Online                      ║')
        console.log('  ╚═══════════════════════════════════════════╝')
        console.log('\n')
      }
    }
  }
}

export default defineConfig({
  plugins: [vue(), prettyLog()],
  clearScreen: false,
  server: {
    port: 5174,
    host: true,
    strictPort: true
  }
})