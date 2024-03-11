const commonroute = [
  {
    path: "/commonroute",
    name: "commonroute",
    component: () => import("@/views/CommonRoute/CommonRoute.vue"),
  },
  {
    path: "/ElementUI/Steps",
    name: "ElementUI-Steps",
    component: () => import("@/views/ElementUI/StepsView.vue"),
  },
  {
    path: "/ElementUI/Radio",
    name: "ElementUI-Radio",
    component: () => import("@/views/ElementUI/RadioView.vue"),
  },
];
export default commonroute;
