<template>
<div>
    <div v-if="totalCompanies">
        <fusioncharts :type="totalCompanies.type" :width="totalCompanies.width" :height="totalCompanies.height" :dataformat="totalCompanies.dataFormat" :dataSource="totalCompanies.dataSource"></fusioncharts>
    </div>
    <div v-if="totalJobs">
        <fusioncharts :type="totalJobs.type" :width="totalJobs.width" :height="totalJobs.height" :dataformat="totalJobs.dataFormat" :dataSource="totalJobs.dataSource"></fusioncharts>
    </div>
</div>
</template>

<script>
    import Vue from 'vue';
    import VueFusionCharts from 'vue-fusioncharts';
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

    import { mapGetters } from 'vuex'

    export default {
        name: 'Dashboard',
        computed:{
            ...mapGetters({
                totalCompanies: 'getChartRankingCompanies',
                totalJobs: 'getChartTotalJobs'
            }),
        },
        created(){
            this.$store.dispatch('companiesLoad')
        }
    }
</script>