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
            ></v-select>
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
      colors: ['red', 'blue', 'yellow'],
      icons: ['fa fa-facebook', 'fa fa-google'],
      form: null,
      valid: true
    }),
    computed: {
      getWidgetInfo : {
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
    watch: {
      form(newValue) {
        console.log('new value form :', newValue);
      }
    },
    methods: {
      submit () {
        console.log('submit');
        this.getWidgetInfo = this.form;
      },
      cancel () {
        console.log('cancel');
      }
    }

  }

</script>

<style scoped>

</style>
