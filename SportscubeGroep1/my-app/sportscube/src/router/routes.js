const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("pages/login.vue"),
      },
      {
        path: "/Scorebord",
        component: () => import("pages/Scorebord.vue"),
      },
      
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayoutAdmin.vue"),
    children: [
      { path: "/Group", component: () => import("pages/Group.vue") },
      { path: "/UserEdit", component: () => import("pages/UserEdit.vue") },
      {
        path: "/CreateGroup",
        component: () => import("pages/CreateGroup.vue"),
      },
      { path: "/EditGroup", component: () => import("pages/EditGroup.vue") },
      {
        path: "/AdminChallenges",
        component: () => import("pages/AdminChallenges.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      { path: "/UserList", component: () => import("pages/UserList.vue") },
      { path: "/DetailUser", component: () => import("pages/DetailUser.vue") },
      {
        path: "/ScoreDetail",
        component: () => import("pages/ScoreDetail.vue"),
      },
      {
        path: "/GroupListUsers",
        component: () => import("pages/GroupListUsers.vue"),
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
