<template>
    <div>
        <v-container grid-list-sm class="px-0 py-0">
            <v-layout wrap justify-end>
                <v-flex sm12 md5>
                    <v-toolbar-title class="headline text-uppercase mr-4">
                        <span>Users</span>
                    </v-toolbar-title>
                </v-flex>
                <v-flex sm12 md3>
                    <v-btn @click="newUser" color="primary darken-3" class="mb-1">New</v-btn>
                </v-flex>
                <v-flex sm12 md3>
                    <v-text-field
                            v-model="busca"
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
        <v-data-table :headers="header" :items="users" :load="load" :search="busca" :footer-props="{'items-per-page-options': [10, 20, 30, 40, 50]}" class="elevation-1">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>
                    <v-icon v-if="props.item.ativo" title="User active">Done</v-icon>
                    <v-icon v-else title="User deactive">Clear</v-icon>
                </td>
                <td>
                    <v-icon title="Edit user"
                            class="mr-5"
                            @click="editUser(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon title="Delete user"
                            @click="deleteUser(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return{
                header:[
                    {
                        text: 'Users',
                        align: 'left',
                        value: 'name'
                    },
                    {text:'Active',value:'active'},
                    {text:'Actions', align:'justify'}
                ],
                load: true,
                busca: '',
            }
        },
        computed:{
            ...mapGetters({
                users: 'getUsers'
            })
        },
        methods:{
            ...mapActions({
                setUser: 'setUser',
                deleteUser: 'deleteUser'
            }),
            newUser(){
                this.setUser({})
                this.$router.push({name:'users.user-create'})
            },
            editUser(user){
                this.setUser(user)
                this.$router.push({
                    name:'users.user-edit',
                    params: {
                        id:user.id
                    }
                })
            },
            async deleteUser(user){
                let res = await this.$confirm('Delete?',{
                    title:'Warning',
                    icon:'warning',
                    color:'warning'
                })
                if(res){
                    try{
                        const request = await this.deleteUser(user)
                    }catch (e){
                        console.log(e)
                    }
                }
            }
        },
        created(){
            this.$store.dispatch('usersLoad')
        }
    }
</script>

<style scoped>
</style>