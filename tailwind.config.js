/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing: require('./src/theme/spacing'),
    inset: require('./src/theme/spacing'),
    colors: require('./src/theme/colors'),
    fontWeight: require('./src/theme/fontWeight'),
    fontSize: require('./src/theme/fontSize'),
    borderRadius: require('./src/theme/borderRadius'),
    lineHeight: require('./src/theme/lineHeight'),
    zIndex: require('./src/theme/zIndex'),
    container: require('./src/theme/container'),
    maxWidth: require('./src/theme/spacing'),
    minWidth: require('./src/theme/spacing'),
    maxHeight: require('./src/theme/spacing'),
    minHeight: require('./src/theme/spacing'),
    display: require('./src/theme/display'),
  },
  plugins: [],
};
