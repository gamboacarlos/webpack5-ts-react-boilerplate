declare module '*.scss'
declare module '*.css'
declare module '*.png' {
    const content: string;
    export default content;
  }