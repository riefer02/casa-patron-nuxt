export const state = () => ({
  counter: 0,
  pages: {
    home: {
      header: {
        headerTexts: {
          primaryText: 'Casa Patron',
          secondaryText: "Explore New Mexico's Enchantments.",
        },
        headerVideo: 'Casa-Patron-Splash-1.mp4',
      },
      about: {},
      features: {},
      events: {},
      gallery: {},
    },
    retreats: {
      header: {
        headerTexts: {
          primaryText: 'Business Retreats',
          secondaryText: 'Get away to get clarity.',
        },
        headerVideo: 'Casa-Patron-Splash-1.mp4',
      },
      features: {},
      about: {},
    },
  },
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}
