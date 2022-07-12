import presetWebFonts from 'https://esm.sh/@unocss/preset-web-fonts'
import presetUno from 'https://esm.sh/@unocss/preset-uno'

export const unocss_opts = {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        'Noto Sans Myanmar': ['Noto+Sans+Myanmar:100,200,300,400,500,600,700,800,900'],
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
        p {
          font-family: 'Noto Sans Myanmar', sans-serif;
          line-height: 1.8;
        }
      `
    }
  ]
}