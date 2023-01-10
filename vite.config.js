import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/IP_Address_Tracker/",
  plugins: [react()],
  root: "src",
});
