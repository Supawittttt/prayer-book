// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url'; // ใช้ node:url สำหรับการทำงานกับ path ที่เป็นมาตรฐาน ES Module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ใช้ fileURLToPath และ new URL เพื่อกำหนดเส้นทางที่ถูกต้อง
      'lucide-react/icons': fileURLToPath(new URL('./node_modules/lucide-react/dist/esm/icons', import.meta.url)),

      // ตัวอย่างการเพิ่ม alias ทั่วไป (ถ้ามี)
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});