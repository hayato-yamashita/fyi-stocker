import auth from '~/plugins/auth'

export default async function({ store, route, redirect }) {
  if (!store.getters['auth/isAuthenticated'] && route.fullPath !== '/sign-in') {
    const user = await auth()
    user ? store.commit('auth/setUser', user) : redirect('/sign-in')
  }
}
