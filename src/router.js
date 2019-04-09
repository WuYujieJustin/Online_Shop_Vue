import Vue from "vue";
import Router from "vue-router";
import ProductList from "./views/ProductList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "product-list",
      component: ProductList
    },
    {
      path: "/product-list/:id",
      name: "productdetail",
      component: () => import("./views/ProductDetail.vue"),
      props: true
    },
    {
      path: "/user/:username",
      name: "user",
      component: () => import("./views/User.vue"),
      props: true
    },
    {
      path: "/add-product",
      name: "add",
      component: () => import("./views/AddProduct.vue")
    },
    {
      path: "*",
      component: () => import("./views/Error404")
    }
  ]
});
