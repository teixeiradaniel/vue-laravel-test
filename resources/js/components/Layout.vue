<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />
  </v-app>
</template>

<script>
    import DashboardCoreAppBar from './core/AppBar'
    import DashboardCoreDrawer from './core/Drawer'
    import DashboardCoreView from './core/View'

    export default {
        components:{
            DashboardCoreAppBar,
            DashboardCoreDrawer,
            DashboardCoreView
        }
    }
</script>