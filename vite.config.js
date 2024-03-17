// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "./shop.html"),
                detail: resolve(__dirname, "./datail-product.html"),
                cart: resolve(__dirname, "./cart.html"),
                checkout: resolve(__dirname, "./checkout.html"),
                pay: resolve(__dirname, "./pay-product.html"),
                login: resolve(__dirname, "./login.html"),
            },
        },
    },
});