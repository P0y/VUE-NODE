import Vue from 'vue'
import Router from 'vue-router'
import ShowUsers from "../components/ShowUsers";
import ShowTournaments from "../components/ShowTournaments";
import TournamentDetails from "../components/TournamentDetails";
import Home from "../view/Home";
import HomeIntroduction from "../view/home/HomeIntroduction";
import HomeTournaments from "../view/home/HomeTournament";
import Login from "../view/Login";
import Setting from "../view/Setting";
import HomePicture from "../view/home/HomePicture";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: "",
          name: "homeIntroduction",
          component: HomeIntroduction
        },
        {
          path: "home-tournament",
          name: "homeTournament",
          component: HomeTournaments
        },
        {
          path: "home-picture",
          name: "homePicture",
          component: HomePicture
        },
      ]
    },
    {
      path: '/login',
      name: "login",
      component: Login
    },
    {
      path: '/setting',
      name: "setting",
      component: Setting
    },
    {
      path: '/users',
      name: 'ShowUsers',
      component: ShowUsers
    },
    {
      path: '/tournaments',
      name: 'ShowTournaments',
      component: ShowTournaments
    },
    {
      path: '/details',
      name: 'TournamentDetails',
      component: TournamentDetails
    }
  ]
})
