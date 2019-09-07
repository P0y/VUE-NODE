<template>
  <div>
    <button @click="getUsers">Get Users</button>
    <h1 v-if="users">{{ users }}</h1>
    <p class="error" v-if="errors"></p>
  </div>
</template>

<script>
    import {HTTP} from '../http-constants'

    export default {
        name: 'ShowUsers',
        data () {
            return {
                users: null,
                errors: ''
            }
        },
        methods: {
            getUsers: function () {
                HTTP.get('http://localhost:3000/users')
                    .then(response => {
                        this.users = response.data
                        console.log(this.users)
                    })
                    .catch(e => {
                        this.errors = e
                    })
            }
        }
    }
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
