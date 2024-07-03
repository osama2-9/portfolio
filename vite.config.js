/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
 
});
