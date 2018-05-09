import Vue from "vue";
import Router from "vue-router";
import Listing from "@/components/Listing";
import Preview from "@/components/Preview";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Listing",
      component: Listing
    },
    {
      path: "/coin/:name",
      name: "Coin",
      component: Preview
    }
  ]
});
