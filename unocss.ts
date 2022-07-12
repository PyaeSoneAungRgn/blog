import presetWebFonts from 'https://esm.sh/@unocss/preset-web-fonts@0.42.0'
import presetUno from 'https://esm.sh/@unocss/preset-uno@0.42.0'

export const unocss_opts: any = {
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