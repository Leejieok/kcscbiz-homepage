import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 서버 배포 경로 설정 (루트 경로면 '/' 사용)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
