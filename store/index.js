export const state = () => ({
  pages: {
    // Home Page
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
    // Leadership Retreats
    retreats: {
      header: {
        headerTexts: {
          primaryText: 'Leadership Retreats',
          secondaryText: 'Get away to get clarity.',
        },
        headerVideo: 'Casa-Patron-Splash-1.mp4',
      },
      features: {
        header: 'Core Values',
        image: 'valley-view-1.jpg',
        featuresList: [
          {
            title: 'Relationships',
            description: `Exceptional Relationships Built on a Foundation of Servant Leadership: We provide outstanding
              service and support by being fully engaged with customers, clients, other stakeholders, and team
              members, listening closely to what is communicated by them to see how best to assist them to
              achieve their goals.`,
          },
          {
            title: 'Sustainability',
            description: `We build our organization and people with an acknowledgment that what we
              leave behind will be stronger than today.`,
          },
          {
            title: 'Respect',
            description: `We recognize and value that each of us has unique attributes, skills, and
            experiences.`,
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
    shortTermRentals: {
      header: {
        headerTexts: {
          primaryText: 'Short Term Rentals',
          secondaryText: 'Get away to get clarity.',
        },
        headerImage: 'niche.jpg',
      },
    },
  },
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}
