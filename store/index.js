export const state = () => ({
  pages: {
    home: {
      header: {
        headerTexts: {
          primaryText: 'Casa Patron',
          secondaryText: "Explore New Mexico's Enchantments.",
        },
        headerVideo: 'Casa-Patron-Splash-1.mp4',
      },
      about: {
        header: 'Welcome to Casa Patron',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta: { label: 'Learn More', linkUrl: '' },
        image: 'backdoor.jpg',
      },
      features: {
        header: 'Why Casa Patron?',
        image: 'master-bedroom-1.jpg',
        featuresList: [
          {
            title: 'Accessibility',
            description:
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            title: 'Modular',
            description:
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            title: 'Activities',
            description:
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
        ],
      },
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
      features: {
        header: 'Core Values',
        image: 'valley-view-1.jpg',
        featuresList: [
          {
            title: 'Accessibility',
            description:
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            title: 'Modular',
            description:
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          {
            title: 'Activities',
            description:
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
        ],
      },
      about: {
        header: 'Our Mission',
        paragraph:
          'The Mission of Casa Patron is to create a getaway environment that provides the appropriate resources where owners of small businesses and executive directors of nonprofit organizations advance their respective organizations.',
        cta: { label: 'Core Values', linkUrl: '' },
        image: 'stairwell.jpg',
      },
    },
  },
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}
