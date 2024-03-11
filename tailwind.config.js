/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px', // iPhone X
      sm: '640px', // iPhone 6/7/8/SE
      md: '768px', // 平板
      lg: '1024px', // 桌面
      xl: '1280px', // 大桌面
      xxl: '1440px', // 大屏幕
      '3xl': '1600px', // 更大的屏幕
      // 添加更多自定义屏幕尺寸
    },
    extend: {},
  },
  plugins: [],
};
