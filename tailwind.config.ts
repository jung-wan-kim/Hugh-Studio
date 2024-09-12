import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // 다크 모드 설정 추가
  theme: {
    extend: {
      // 여기에 테마 확장 설정을 추가할 수 있습니다.
    },
  },
  plugins: [],
};

export default config;
