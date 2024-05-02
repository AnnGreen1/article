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
  {
    path: "/ElementUI/StylePenetration",
    name: "ElementUI-StylePenetration",
    component: () => import("@/views/StylePenetration/IndexView.vue"),
  },
  {
    path: "/ElementUI/UniqueClass",
    name: "ElementUI-UniqueClass",
    component: () => import("@/views/UniqueClass/IndexView.vue"),
  },
  {
    path: "/ElementUI/CSSModules",
    name: "ElementUI-CSSModules",
    component: () => import("@/views/CSSModules/IndexView.vue"),
  },
];
export default commonroute;
