import presetWebFonts from 'https://esm.sh/@unocss/preset-web-fonts'
import presetUno from 'https://esm.sh/@unocss/preset-uno'

export const unocss_opts = {
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        'padauk': ['Padauk'],
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
        p {
          font-family: 'padauk';
          line-height: 1.8;
        }
      `
    }
  ]
}