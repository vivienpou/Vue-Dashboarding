<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex row v-for="(widget, index) in $store.state.widgets" :key="index">
          <!-- mini statistic start -->
          <v-row-expand-transition lg3 sm6 xs12>
            <mini-statistic v-if="widget.type === widgets['MINI-STATISTIC']"
                            :icon=widget.icon
                            :title=widget.title
                            :sub-title=widget.subTitle
                            :color=widget.color
            >
            </mini-statistic>
          </v-row-expand-transition>

          <!-- mini statistic  end -->

          <!-- echart start -->
          <v-row-expand-transition lg8 sm12 xs12>
            <v-widget v-if="widget.type === widgets.ECHART"
                      :title=widget.title content-bg="white">
              <v-btn icon slot="widget-header-action">
                <v-icon class="text--secondary">refresh</v-icon>
              </v-btn>
              <div slot="widget-content">
                <e-chart v-if="widget.chartType"
                         :path-option="[
                        ['dataset.source', widget.data],
                        ['color', [color.lightBlue.base, color.green.lighten1]],
                        ['legend.show', true],
                        ['xAxis.axisLabel.show', true],
                        ['yAxis.axisLabel.show', true],
                        ['grid.left', '2%'],
                        ['grid.bottom', '5%'],
                        ['grid.right', '3%'],
                        ['series[0].type', 'bar'],
                        ['series[0].areaStyle', {}],
                        ['series[0].smooth', true],
                        ['series[1].smooth', true],
                        ['series[1].type', widget.chartType],
                        ['series[1].areaStyle', {}],
                      ]"
                         height="400px"
                         width="85%"
                >
                </e-chart>
              </div>
            </v-widget>
          </v-row-expand-transition>
          <!-- chart end -->

          <!-- profile card start -->
          <v-row-expand-transition lg4 sm12 xs12>
            <profile-card v-if="widget.type === widgets['PROFILE-CARD']">
            </profile-card>
          </v-row-expand-transition>
          <!-- profile card end -->

          <!-- box chart start -->
          <v-row-expand-transition lg4 sm12 xs12>
            <box-chart v-if="widget.type === widgets.CHART"
                       :card-color=widget.color
                       :title=widget.title
                       :sub-title=widget.subTitle
                       icon="trending_up"
                       :data="siteTrafficData"
                       :chart-color="[color.indigo.lighten1]"
                       :type=widget.chartType
            ></box-chart>

          </v-row-expand-transition>

          <!-- statistic section start -->
          <v-row-expand-transition lg4 sm12 xs12>
            <linear-statistic v-if="widget.type === widgets.STATISTIC"
              :title= widget.title
              :sub-title= widget.subTitle
              :icon= "widget.subTitle ? widget.subTitle.includes('increase') ? 'trending_up' : 'trending_down' : null"
              :color= widget.color
              :value= widget.value
            >
            </linear-statistic>
        </v-row-expand-transition>
          <!-- statistic section end -->
        </v-flex>
        <!-- Circle statistic -->
        <v-flex lg4 sm12 xs12 v-for="(item,index) in trending" :key="'c-trending'+index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          >
          </circle-statistic>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Activities" contentBg="white">
            <div slot="widget-content">
              <ol class="timeline timeline-activity timeline-point-sm timeline-content-right">
                <li class="timeline-block" v-for="(item, index) in activity" :key="index">
                  <div class="timeline-point">
                    <v-circle dot large :color="item.color"></v-circle>
                  </div>
                  <div class="timeline-content">
                    <time datetime="2018" class="subheading">{{item.timeString}}</time>
                    <div class="py-2 text--secondary" v-html="item.text"></div>
                  </div>
                </li>
              </ol>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg7 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import API from '@/api';
  import EChart from '@/components/chart/echart';
  import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';
  import PostListCard from '@/components/widgets/card/PostListCard';
  import ProfileCard from '@/components/widgets/card/ProfileCard';
  import PostSingleCard from '@/components/widgets/card/PostSingleCard';
  import WeatherCard from '@/components/widgets/card/WeatherCard';
  import PlainTable from '@/components/widgets/list/PlainTable';
  import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
  import VWidget from '@/components/VWidget';
  import Material from 'vuetify/es5/util/colors';
  import VCircle from '@/components/circle/VCircle';
  import BoxChart from '@/components/widgets/chart/BoxChart';
  import CircleStatistic from '@/components/widgets/statistic/CircleStatistic';
  import LinearStatistic from '@/components/widgets/statistic/LinearStatistic';
  import {WIDGETS} from "../constants";

  export default {
    layout: 'dashboard',
    components: {
      VWidget,
      MiniStatistic,
      VCircle,
      WeatherCard,
      PostSingleCard,
      PostListCard,
      ProfileCard,
      EChart,
      BoxChart,
      CircleStatistic,
      LinearStatistic,
      PlainTable,
      PlainTableOrder
    },
    data: () => ({
      widgets: WIDGETS,
      color: Material,
      selectedTab: 'tab-1',
      linearTrending: [
        {
          subheading: 'Sales',
          headline: '2,55',
          caption: 'increase',
          percent: 15,
          icon: {
            label: 'trending_up',
            color: 'success'
          },
          linear: {
            value: 15,
            color: 'success'
          }
        },
        {
          subheading: 'Revenue',
          headline: '6,553',
          caption: 'increase',
          percent: 10,
          icon: {
            label: 'trending_down',
            color: 'error'
          },
          linear: {
            value: 15,
            color: 'error'
          }
        },
        {
          subheading: 'Orders',
          headline: '5,00',
          caption: 'increase',
          percent: 50,
          icon: {
            label: 'arrow_upward',
            color: 'info'
          },
          linear: {
            value: 50,
            color: 'info'
          }
        }
      ],
      trending: [
        {
          subheading: 'Email',
          headline: '15+',
          caption: 'email opens',
          percent: 15,
          icon: {
            label: 'email',
            color: 'info'
          },
          linear: {
            value: 15,
            color: 'info'
          }
        },
        {
          subheading: 'Tasks',
          headline: '90%',
          caption: 'tasks completed.',
          percent: 90,
          icon: {
            label: 'list',
            color: 'primary'
          },
          linear: {
            value: 90,
            color: 'success'
          }
        },
        {
          subheading: 'Issues',
          headline: '100%',
          caption: 'issues fixed.',
          percent: 100,
          icon: {
            label: 'bug_report',
            color: 'primary'
          },
          linear: {
            value: 100,
            color: 'error'
          }
        },
      ]
    }),
    computed: {
      activity() {
        return API.getActivity();
      },
      posts() {
        return API.getPost(3);
      },
      siteTrafficData() {
        return API.getMonthVisit;
      },
      locationData() {
        return API.getLocation;
      }
    },
  };
</script>
