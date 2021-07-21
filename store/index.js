export const state = () => ({
  darkMode: false,
})

export const mutations = {
  SET_DARKMODE(state, payload) {
    state.darkMode = payload
  },
}

export const actions = {
  async nuxtClientInit({ commit, dispatch }) {
    let currentTheme = localStorage.getItem('theme')
    if (currentTheme == 'dark') {
      commit('SET_DARKMODE', true)
      document.documentElement.classList.add('dark')
    } else {
      commit('SET_DARKMODE', false)
      document.documentElement.classList.remove('dark')
    }
  },

  toggleDarkMode({ state, commit }) {
    if (state.darkMode) {
      commit('SET_DARKMODE', false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', '')
    } else {
      commit('SET_DARKMODE', true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    const currentTheme = localStorage.getItem('theme')
    console.log(currentTheme)
  },
}
