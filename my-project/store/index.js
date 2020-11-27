export const state = () => ({
  drawer: true,
  drawerRightSettings: false,
  drawerRightWidgets: false
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  toggleDrawerRightSettings(state) {
    state.drawerRightSettings = !state.drawerRightSettings
  },
  drawerRightSettings(state, val) {
    state.drawerRightSettings = val
  },
  toggleDrawerRightWidgets(state) {
    state.drawerRightWidgets= !state.drawerRightWidgets
  },
  drawerRightWidgets(state, val) {
    state.drawerRightWidgets = val
  }
}
