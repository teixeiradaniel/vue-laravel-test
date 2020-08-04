<template>
    <div class="container">
        <v-data-table :headers="headers" :items="jobs" :load="load" :footer-props="{'items-per-page-options': [10, 20, 30, 40, 50]}">
            <template v-slot:item.remote="{ item }">
                    <span v-if="item.remote === 'yes'">Sim</span>
                    <span v-if="item.remote === 'no'">Não</span>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return{
                headers:[
                    {
                        text: 'Título',
                        align: 'left',
                        value: 'title'
                    },
                    {
                        text: 'Local',
                        align: 'left',
                        value: 'local'
                    },
                    {
                        text: 'Remoto',
                        align: 'left',
                        value: 'remote'
                    }
                ],
                load: true,
            }
        },
        computed:{
            ...mapGetters({
                jobs: 'getJobs'
            })
        },
        methods:{
            ...mapActions({
                setJob: 'setJob',
                deleteJob: 'deleteJob'
            }),
            newJob(){
                this.setJob({})
                this.$router.push({name:'jobs.job-create'})
            },
            editJob(job){
                this.setJob(job)
                this.$router.push({
                    name:'jobs.job-edit',
                    params: {
                        id:job.id
                    }
                })
            },
            async deleteJob(job){
                let res = await this.$confirm('Delete?',{
                    title:'Warning',
                    icon:'warning',
                    color:'warning'
                })
                if(res){
                    try{
                        const request = await this.deleteJob(job)
                    }catch (e){
                        console.log(e)
                    }
                }
            }
        },
        watch:{
            senhas(novoValor){
                if(Array.isArray(novoValor)){
                    this.load = false
                }
            }
        },
        created(){
            this.$store.dispatch('jobsLoad')
        }
    }
</script>

<style scoped>
</style>