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
                    <v-btn color="primary darken-1" @click="save">Salvar</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </div>
</template>

<script>
    // import { required, minLength } from 'vuelidate/lib/validators'
    import { mapGetters,mapActions } from 'vuex'
    export default {
        props:[],
        data(){
            return{
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
                    await this.$store.dispatch('companyCreate', this.company)
                    this.$router.push({name:'empresas'})
                }catch (e){
                }
            }
        }
    }
</script>