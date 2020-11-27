// implement your own methods in here, if your data is coming from A rest API

import * as User from './user';
import * as Activity from './activity';
import * as Chart from './chart';
import * as Project from './project';
export default {
  // user
  getUser: User.getUser,
  getUserById: User.getUserById,
  // project
  getProject: Project.getProject,
  // activity
  getActivity: Activity.default.getActivity,
  // chart data
  getMonthVisit: Chart.monthVisitData,
  getCampaign: Chart.campaignData,
  getLocation: Chart.locationData,

};
