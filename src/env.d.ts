/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly PUBLIC_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }