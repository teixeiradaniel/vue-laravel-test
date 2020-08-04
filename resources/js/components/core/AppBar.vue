<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-toolbar-title v-text="$route.name" />
  </v-app-bar>
</template>

<script>
  export default {
    name: 'DashboardCoreAppBar'
  }
</script>
