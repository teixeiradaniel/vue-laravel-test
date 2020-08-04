<template>
  <v-navigation-drawer dark permanent app width="260" id="core-navigation-drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block :to="'/logout'">
            Logout
          </v-btn>
        </div>
      </template>
  </v-navigation-drawer>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'DashboardCoreDrawer',

        data: () => ({
            user: {},
            items: [
                {
                    icon: 'mdi-view-dashboard',
                    title: 'Dashboard',
                    to: '/',
                },
                {
                    icon: 'mdi-office-building',
                    title: 'Empresas',
                    to: '/empresas',
                },
                {
                    icon: 'mdi-briefcase',
                    title: 'vagas',
                    to: '/vagas',
                },
            ],
        }),
        computed:{
            ...mapGetters({
                loggedUser: 'getLoggedUser'
            })
        },
        created() {
            this.user = {
                name: this.loggedUser.name,
                email: this.loggedUser.email
            }
        }
    }
</script>