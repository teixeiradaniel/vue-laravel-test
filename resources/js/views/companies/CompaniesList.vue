<template>
    <div class="container">
        <v-main grid-list-sm class="px-0 py-0">
            <v-layout wrap justify-end>
                <v-flex sm12 md12>
                    <v-btn @click="newCompany" color="primary darken-3" class="mb-1">Cadastrar Empresa</v-btn>
                </v-flex>
            </v-layout>
        </v-main>

        <v-data-table :headers="headers" :items="companies" :load="load" :search="search" :footer-props="{'items-per-page-options': [10, 20, 30, 40, 50]}">
            <template v-slot:item.actions="{ item }">
                    <v-btn small color="primary" @click="editCompany(item)">
                        <v-icon dark >mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn small color="error" @click="deleteItem(item)">
                        <v-icon dark >mdi-delete</v-icon>
                    </v-btn>
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
                        text: 'Empresa',
                        align: 'left',
                        value: 'name'
                    },
                    {
                        text: 'E-mail',
                        align: 'left',
                        value: 'email'
                    },
                    {
                        text: 'Site',
                        align: 'left',
                        value: 'website'
                    },
                    {
                        text:'Ações',
                        align:'justify',
                        value: 'actions'
                    }
                ],
                load: true,
                search: '',
            }
        },
        computed:{
            ...mapGetters({
                companies: 'getCompanies'
            })
        },
        methods:{
            ...mapActions({
                setCompany: 'setCompany',
                companyDestroy: 'companyDestroy'
            }),
            newCompany(){
                this.setCompany({})
                this.$router.push({name:'empresas.create'})
            },
            editCompany(company){
                this.setCompany(company)
                this.$router.push({
                    name:'empresas.edit',
                    params: {
                        id: company.id
                    }
                })
            },
            async deleteItem(company){
                try{
                    const request = await this.companyDestroy(company)
                }catch (e){
                    console.log(e)
                }
            }
        },
        created(){
            this.$store.dispatch('companiesLoad')
        }
    }
</script>

<style scoped>
</style>