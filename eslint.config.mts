import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

import pathsPlugin from "eslint-plugin-paths"; 

export default defineConfig([
  // 1. Target all JavaScript/TypeScript files
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  
  // 2. Load the official TypeScript-ESLint recommended configurations
  ...tseslint.configs.recommended,

  // 3. Inject the path alias plugin and rule to enforce @ paths
  {
    plugins: {
      "paths": pathsPlugin
    },
    rules: {
      // Forces relative paths like '../../core/xyz' to map to '@core/xyz'
      // This is fully autofixable when running eslint --fix
      "paths/alias": "error" 
    }
  }
]);
