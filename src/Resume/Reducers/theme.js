export default function counter(state = 'dark', action) {
    switch (action.type) {
      case 'SET_DARK_THEME':
        return state = 'dark'
      case 'SET_LIGHT_THEME':
        return state = 'light'
      default:
        return state
    }
  }