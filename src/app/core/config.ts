export const Settings = {
  links: {
    AboutUrl: 'https://gabrjesus.vercel.app'
  },
  counterTabs: {
    pomodoro: {
      id: 'pomodoro',
      label: 'Pomodoro',
      initialTime: 25
    },
    short_break: {
      id: 'short_break',
      label: 'Short Break',
      initialTime: 5
    },
    long_break: {
      id: 'long_break',
      label: 'Long Break',
      initialTime: 10
    },
  },
  iconSizeMap: {
    sm: '1.2rem',
    md: '1.5rem',
    lg: '2rem',
  },
} as const