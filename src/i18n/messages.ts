import { defineMessages } from './react';

type Strings = {
  appName: string;
  toLight: string;
  toDark: string;
  language: string;
  hero: { title: string; subtitle: string };
  footer: { developedBy: string };
};

export const messages = defineMessages<Strings>({
  en: {
    appName: 'App Template',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    language: 'Language',
    hero: { title: 'App Template', subtitle: 'React, Vite and MUI PWA template for GitHub Pages.' },
    footer: { developedBy: 'Developed by' },
  },
  es: {
    appName: 'App Template',
    toLight: 'Cambiar a modo claro',
    toDark: 'Cambiar a modo oscuro',
    language: 'Idioma',
    hero: { title: 'App Template', subtitle: 'React, Vite and MUI PWA template for GitHub Pages.' },
    footer: { developedBy: 'Desarrollado por' },
  },
});
