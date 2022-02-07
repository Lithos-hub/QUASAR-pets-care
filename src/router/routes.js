const routes = [
  {
    path: "/",
    component: () => import("layouts/Navbar.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      {
        path: "/newPet",
        name: "New Pet",
        component: () => import("pages/Pet-New.vue"),
      },
      {
        path: "/petDetails",
        name: "Pet Details",
        component: () => import("pages/Pet-Details.vue"),
      },
      {
        path: "/myPets",
        name: "My Pets",
        component: () => import("pages/MyPets.vue"),
      },
      {
        path: "/myReports",
        name: "My Reports",
        component: () => import("pages/MyPets.vue"),
      },
      {
        path: "/calendar",
        name: "Calendar",
        component: () => import("pages/MyPets.vue"),
      },
      {
        path: "/myAccount",
        name: "My Account",
        component: () => import("pages/MyAccount.vue"),
      },
      {
        path: "/help",
        name: "Help",
        component: () => import("pages/Help.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
