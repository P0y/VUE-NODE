<template>
  <table cellspacing="0" role="presentation">
    <tbody>
    <tr>
      <td class="login_form_header_label"><label for="email">Adresse e-mail</label></td>
      <td class="login_form_header_label"><label for="pass">Mot de passe</label></td>
    </tr>
    <tr>
      <td><input type="email" class="login_form_input_box" name="email" id="email" data-testid="royal_email">
      </td>
      <td><input type="password" class="login_form_input_box" name="pass" id="pass" data-testid="royal_pass">
      </td>
      <td><label class="login_form_login_button" id="loginbutton" for="u_0_2"><input
        class="button btn btn-sm" style="padding-top: 5px; font-size: 9px" value="Connexion" aria-label="Se connecter" data-testid="royal_login_button" type="submit" id="u_0_2"></label>
      </td>
    </tr>
    <tr>
      <td class="login_form_label_field"></td>
      <td class="login_form_label_field">
        <div><a class="login_form_label_field" href="#">Informations de compte
          oubliées&nbsp;?</a></div>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
    export default {
        name: "login",
        components: {

        }
    };
</script>

<style>
  td.login_form_header_label {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    font-family: inherit;
    color: #fff;
    font-weight: normal;
    font-size: 12px;
  }
  td.login_form_label_field :nth-child(1n) {
    font-size: 12px;
    font-family: inherit;
    color: #353535;
    text-decoration: none;
  }
  label.login_form_login_button {
    margin-bottom: 0;
  }
  .button {
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 5px;
    letter-spacing: 4px;
    position: relative;
    background-color: #00bfff;
    border: none;
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

  .button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }

  .button:focus { outline:0; }
</style>
