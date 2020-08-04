<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar color="primary darken-2" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                            :error="loginData.error"
                            autofocus
                            name="email"
                            label="e-mail"
                            v-model="loginData.email"
                    ></v-text-field>

                    <v-text-field
                            :error="loginData.error"
                            name="password"
                            type="password"
                            label="Senha"
                            v-model="loginData.password"
                            @keyup.enter="logar(loginData)"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn block color="primary darken-2" @click="logar(loginData)">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return{
                loginData:{
                    email:'teste@oxentejs.com',
                    password:'password',
                    error: false
                },
            }
        },
        methods:{
            ...mapActions({
                makeLogin: 'makeLogin',
            }),
            async logar(userData){
                try{
                    const usuarioLogado = await this.makeLogin(userData)
                    this.loginData.error = false
                    this.$router.push({name:'dashboard'})
                }catch (e) {
                    this.loginData.error = true
                    console.error(e)
                }
            }
        }
    }
</script>