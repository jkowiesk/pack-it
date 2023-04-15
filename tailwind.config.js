/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'mdlg': '0 2px 8px 1px',
        'hov': '0 3px 8px 1px',
      },
    },
  },
  plugins: [],
}

