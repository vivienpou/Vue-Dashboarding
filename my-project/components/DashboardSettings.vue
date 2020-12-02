<template>
  <v-card>
    <h5>Dashboard settings</h5>
    <p>Number of widgets : {{widgets.length}}</p>

    <h5>Widget {{getWidgetInfo.type}} : </h5>
    <v-form v-model="valid" v-if="$store.state.widgetIndexEditing !== null"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="getWidgetInfo.title"
              :rules="nameRules"
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
              v-model="getWidgetInfo.subTitle"
              :rules="nameRules"
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
              v-model="getWidgetInfo.color"
              :rules="emailRules"
              label="Color"
              required
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="getWidgetInfo.icon"
              :rules="emailRules"
              label="Icon"
              required
            ></v-text-field>
          </v-col>
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
    computed: {
      getWidgetInfo() {
        return this.$store.state.widgets.filter(item => item.id === this.$store.state.widgetIndexEditing)[0];
      }
    }

  }
</script>

<style scoped>

</style>
