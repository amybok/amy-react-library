import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// import packageJson from "./package.json" assert { type: "json" };
const packageJson = require("./package.json");


export default [
    {
        input: "src/index.ts",
        output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
        ],
        plugins: [
            resolve(),
            typescript({ tsconfig: "./tsconfig.json" }),
            commonjs(),
        
        ],
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/types.d.ts", format: "es" }],
        plugins: [dts.default()],
    },
];
