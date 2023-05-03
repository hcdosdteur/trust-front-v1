// vite.config.ts
import { defineConfig } from "file:///mnt/c/Users/HomeNote/Desktop/TRUST/trust-front-v1/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/HomeNote/Desktop/TRUST/trust-front-v1/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgrPlugin from "file:///mnt/c/Users/HomeNote/Desktop/TRUST/trust-front-v1/node_modules/vite-plugin-svgr/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "/mnt/c/Users/HomeNote/Desktop/TRUST/trust-front-v1";
var vite_config_default = defineConfig({
  plugins: [react(), svgrPlugin({ svgrOptions: {} })],
  server: {
    port: 3e3,
    watch: {
      usePolling: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "#": path.resolve(__vite_injected_original_dirname, "."),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/component"),
      "@css": path.resolve(__vite_injected_original_dirname, "./src/scss")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvSG9tZU5vdGUvRGVza3RvcC9UUlVTVC90cnVzdC1mcm9udC12MVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL0hvbWVOb3RlL0Rlc2t0b3AvVFJVU1QvdHJ1c3QtZnJvbnQtdjEvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL0hvbWVOb3RlL0Rlc2t0b3AvVFJVU1QvdHJ1c3QtZnJvbnQtdjEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHN2Z3JQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBzdmdyUGx1Z2luKHsgc3Znck9wdGlvbnM6IHt9IH0pXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB1c2VQb2xsaW5nOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHByb3h5OiB7XHJcbiAgICAgICcvYXBpJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgJyMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLicpLFxyXG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50JyksXHJcbiAgICAgICdAY3NzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3Njc3MnKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1UsU0FBUyxvQkFBb0I7QUFDclcsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFlBQVksVUFBVTtBQUh0QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNsRCxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBVSxhQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxLQUFVLGFBQVEsa0NBQVcsR0FBRztBQUFBLE1BQ2hDLGVBQW9CLGFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsTUFDeEQsUUFBYSxhQUFRLGtDQUFXLFlBQVk7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
