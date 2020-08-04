export default {
    getCompanies(state){
        return state.companies
    },
    getCompany(state){
        return state.company
    },
    // Dashboard
    getChartTotalJobs(state){
        let totalJobs = state.companies.map(company => {
            return {'label': company.name, 'value': company.jobs.length}
        })

        return {
            "type": "column2d",
            "renderAt": "chart-container",
            "width": "100%",
            "height": "350",
            "dataFormat": "json",
            "dataSource": {
                "chart": {
                    "caption": "Total de Vagas por Empresa",
                    "subCaption": "Vagas cadastradas no sistema",
                    "xAxisName": "Company",
                    "yAxisName": "Jobs",
                    "numberSuffix": "",
                    "theme": "fusion",
                },
               "data": totalJobs
            }
        }
    },
    getChartRankingCompanies(state){
        let companies = state.companies.map(company => {
            return {'label': company.name}
        })

        let newJobs = state.companies.map(company => {
            return {'value': company.jobs.length}
        })

        let hires = state.companies.map(company => {
            return {'value': company.jobs.length - Math.floor(Math.random() * 3)+1}
        })

        return {
            "type": "scrollstackedcolumn2d",
            "width": "100%",
            "height": "350",
            "dataFormat": "json",
            "dataSource": {
                "chart": {
                    caption: "Novas vagas x Contratações",
                    subcaption: "(Informações aleatórias)",
                    yaxisname: "Número de vagas de emprego",
                    flatscrollbars: "1",
                    scrollheight: "8",
                    numvisibleplot: "8",
                    plottooltext: "<b>$dataValue</b> $seriesName em $label",
                    theme: "fusion"
                },
                categories: [
                    {
                      category: companies
                    }
                ],
                dataset: [
                    {
                        seriesname: "Contratações",
                        data: hires
                    },
                    {
                        seriesname: "Novas Vagas",
                        data: newJobs
                    },
                ]
            }
        }
    }
}