<template>
    <div class="container">
        <v-form>
            <v-card>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm4>
                                <v-text-field v-model.trim="company.name" label="Nome"/>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-text-field v-model.trim="company.email" label="E-mail"/>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-text-field v-model.trim="company.website" label="Site"/>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary darken-1" @click="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        props:[],
        data(){
            return{
                id: this.$route.params.id,
                load:false,
                grupoTela: {}
            }
        },
        computed:{
            ...mapGetters({
                companies: 'getCompanies'
            }),
            company: {
                get(){
                    return this.$store.getters.getCompany
                },
                set(company){
                    this.$store.dispatch('setCompany', company)
                }
            },
        },
        methods:{
            async save(){
                try{
                    await this.$store.dispatch('companyUpdate', this.company)
                    this.$router.push({name:'empresas'})
                }catch (e){
                }
            }
        },
        created(){
            this.$store.dispatch('companiesLoad')

            if(!this.company.id && this.id){
                this.$store.dispatch('companyLoad',this.id)
            }
            if(this.company.length <= 0){
                this.$store.dispatch('companyLoad')
            }
        }
    }
</script>