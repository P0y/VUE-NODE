import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/Home";
import Profile from "../view/Profile";
import HomeIntroduction from "../view/home/HomeIntroduction";
import HomeTournaments from "../view/home/HomeTournament";
import ProfileView from "../view/profile/ProfileView";
import ProfileSetting from "../view/profile/ProfileSetting";

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
        }
      ]
    },
    {
      path: '/profile',
      name: "profile",
      component: Profile,
      children: [
        {
          path: "",
          name: "profileView",
          component: ProfileView,
        },
        {
          path: "profile-setting",
          name: "profileSetting",
          component: ProfileSetting
        }
      ]
    }
  ]
})
