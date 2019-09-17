<template>
  <div>
    <div id="showTournaments">
        <button v-if="showBtn === true" type="button" @click="getTournaments" class="btn btn-primary btn-lg btn-block">
          Show tournaments
        </button>
    </div>
    <div>
    <table v-if="tournaments" class="table table-hover table-dark">
    <thead>
      </thead>
      <tbody>
      <tr v-for="(tournament, index) in tournaments">
        <td><a v-bind:href="url" @click="getDetailsTournament(index)">{{tournament}}</a></td>
      </tr>
      </tbody>
    </table>
    </div>
    <p class="error" v-if="errors"></p>
  </div>
</template>

<script>
    import {HTTP} from '../http-constants'

    export default {
        name: 'ShowTournaments',
        data () {
            return {
                tournaments: null,
                errors: '',
                showBtn: true,
                url: '#',
                d: ''
            }
        },
        methods: {
            getTournaments: function () {
                HTTP.get('http://localhost:3000/tournaments')
                    .then(response => {
                        this.tournaments = response.data.message.fulfillmentValue
                        this.showBtn = false;
                    })
                    .catch(e => {
                        this.errors = e
                    })
            },
            getDetailsTournament: function (id) {
                HTTP.get('http://localhost:3000/details/' + id)
                    .then(response => {
                        this.details = response.data.message.fulfillmentValue;
                        this.d = 'details/' + id;
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
