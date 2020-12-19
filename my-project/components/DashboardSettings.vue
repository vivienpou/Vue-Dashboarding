<template>
  <v-card>
    <h5>Dashboard settings</h5>
    <p>Number of widgets : {{widgets.length}}</p>

    <h5 v-if="getWidgetInfo">Widget {{getWidgetInfo.type}} : </h5>
    <v-form v-model="valid" v-if="$store.state.widgetIndexEditing && form"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="form.title"
              :counter="10"
              label="Title"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="form.subTitle"
              :counter="10"
              label="SubTitle"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-select
              v-model="form.color"
              :items="colors"
              label="Color"
              required
            >
              <template v-slot:prepend-item>
                <v-list-item>
                  <span class="red">Red item</span>
                </v-list-item>
              </template>
            </v-select>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-select
              v-model="form.icon"
              :items="icons"
              label="Icon"
              required
            ></v-select>
          </v-col>
          <v-btn @click="cancel" color="grey">Cancel</v-btn>
          <v-btn @click="submit" color="orange">Save</v-btn>

        </v-row>
      </v-container>
    </v-form>

  </v-card>


</template>
<script>
  export default {
    name: "DashboardSettings",
    props: {
      widgets: Array,
    },
    data: () => ({
      colors: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
      icons: ['fa fa-facebook', 'fa fa-google'],
      form: null,
      valid: true,
      formWidgetsAtInit: []
    }),
    computed: {
      getWidgetInfo: {
        get() {
          return this.$store.state.widgets.filter(item => item.id === this.$store.state.widgetIndexEditing)[0];
        },
        set(formEdited) {
          return this.$store.state.widgets.filter(item => item.id !== this.$store.state.widgetIndexEditing).push(formEdited);
        }
      },

    },
    updated() {
      this.form = this.getWidgetInfo;
    },
    mounted() {
      this.formWidgetsAtInit = JSON.parse(localStorage.getItem('widgets'));
    },
    methods: {
      submit() {
        localStorage.setItem('widgets', JSON.stringify(this.$store.state.widgets));
        this.$store.state.drawerRightWidgets = false;
      },
      cancel() {
        this.$store.state.widgets = this.formWidgetsAtInit;
        this.$store.state.drawerRightWidgets = false;
      }
    }

  }

</script>

<style scoped>

</style>
