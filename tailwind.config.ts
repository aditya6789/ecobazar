import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // 'background-image': `url('/background.svg')`,
        'box-banner':`url('/images/best_deals.png')`,
        'box-banner2':`url('/images/fat_free.png')`,
        'box-banner3':`url('/images/summer_sale.png')`,
        'link-background':`url('/images/link_background.png')`,
        'footer-bg':`url('/icons/BG.png')`


      }),
      colors :{
        successDark :"#2C742F"
      }
    },
  },
  plugins: [],
}
export default config
