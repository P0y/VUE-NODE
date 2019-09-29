<template>
  <div class="home-introduction">
    <div class="row justify-content-lg-center" style="font-family: inherit">
      <div class="col-lg-6 text-white" style="padding-bottom: 100px">
        <h1>Retrouver vos tournois favoris<br> ici tout les jours</h1>
      </div>
    </div>
    <div class="form-row text-white" style="padding-left: 50px">
      <div class="form-group col-md-6 justify-content-md-around">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName">
      </div>
      <div class="form-group col-md-4">
        <label for="inputCategorie">Categorie</label>
        <select id="inputCategorie" class="form-control">
          <option selected="">Select categorie</option>
          <option>SPORT</option>
          <option>FPS</option>
          <option>RPG</option>
        </select>
      </div>
      <div class="form-group col-md-2" style="padding-top: 35px">
        <label class="buttonSearch" id="loginbutton" for="u_0_2">
        </label>
        <input class="button btn btn-sm" style="padding-top: 5px; font-size: 9px" value="Rechercher"
               aria-label="Se connecter" data-testid="royal_login_button" type="submit" id="u_0_2"
        >
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "homeIntroduction",
        components: {},
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    };
</script>
<style>
  .home-introduction {
    align-content: center;
    padding-top: 150px;
    background-image: url("../../assets/ESL-Background-esport.jpg");
  }

  .button {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 5px;
    letter-spacing: 4px;
    position: relative;
    background-color: #010605;
    border: solid;
    color: #fff;
    padding: 5px;
    transition-duration: 0.4s;
    overflow: hidden;
    box-shadow: 0 5px 15px #193047;
    border-radius: 4px;
  }

  .button:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000;
  }

  .button:after {
    content: "";
    background: #1abc9c;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }
</style>
