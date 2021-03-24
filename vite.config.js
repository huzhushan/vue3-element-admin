import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default env => {
  // console.log(111, env);

  return defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        mockPath: "mock", // 指定mock目录中的文件全部是mock接口
        localEnabled: env.mode === "mock", // 指定在mock模式下才启动mock服务（可以在package.json的启动命令中指定mode为mock）
        supportTs: false, // mockPath目录中的文件是否支持ts文件，现在我们不使用ts，所以设为false
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "http://dev.erp.com",
          changeOrigin: true,
        },
      },
    },
  });
};