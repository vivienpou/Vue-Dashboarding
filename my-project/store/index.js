import API from '@/api';

export const strict = false

export const state = () => ({
  drawer: true,
  drawerRightSettings: false,
  drawerRightWidgets: false,
  widgetIndexEditing: null,
  widgets: [
    {
      id: 1,
      type: 'miniStatistic',
      icon: "fa fa-facebook",
      title: "100+",
      subTitle: "Likes",
      color: "indigo"
    },
    {
      id: 2,
      type: 'miniStatistic',
      icon: "fa fa-google",
      title: "150+",
      subTitle: "Connections",
      color: "red"
    },
    {
      id: 3,
      type: 'echart',
      title: "Site Traffic",
      chartType: "bar",
      data: API.getMonthVisit
    }, {
      id: 4,
      type: 'echart',
      title: "Top location",
      chartType: "pie",
      data: API.getLocation
    }, {
      id: 5,
      type: 'chart',
      title: "Trending",
      subTitle: "10%",
      chartType: "line",
      data: API.getLocation
    }, {
      id: 6,
      type: 'statistic',
      title: "Sales",
      subTitle: "Sales increase",
      value: 15
    }, {
      id: 7,
      type: 'statistic',
      title: "Orders",
      subTitle: "Increase",
      value: 10
    }, {
      id: 8,
      type: 'statistic',
      title: "Costs reduce",
      subTitle: "Reduce",
      value: 25
    },

  ]
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
    state.drawerRightWidgets = !state.drawerRightWidgets
  },
  drawerRightWidgets(state, val) {
    state.drawerRightWidgets = val
  },

  getWidgets(state, val) {
    state.widgets = val
  },

  widgetIndexEditing(state, val) {
    state.widgetIndexEditing = val
  }
}
