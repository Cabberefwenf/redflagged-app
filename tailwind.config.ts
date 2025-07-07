import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        flagGreen: '#22c55e',
        flagYellow: '#eab308',
        flagRed: '#ef4444',
        flagBlack: '#000000',
        premiumGold: '#fbbf24',
        backgroundDark: '#0f0f0f'
      }
    }
  },
  plugins: []
};

export default config;
