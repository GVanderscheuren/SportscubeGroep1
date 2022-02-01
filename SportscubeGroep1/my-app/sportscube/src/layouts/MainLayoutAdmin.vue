<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style=" background-color:#44c8f5; padding-top:10px; padding-bottom:10px;">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          style="font-size:20px; "
        />

        <q-toolbar-title style="font-size: 30px;"> Sportscube </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered >
      <div class="flex flex-center">
        <div class="c-logoUsers">
          <q-icon
            name="person"
            style=" margin-top: 50px; font-size: 50px; lightgrey solid; height: 100px; width: 100px; border-radius: 50%; background: whitesmoke"
          />
          <h1 class="c-welcome" style="font-size: 30px; margin-top: -20px; text-align:center;">
            Admin
          </h1>
        </div>
      </div>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-btn @click.prevent="logOut" style="margin-top: 400px; min-width: 299px;" flat>
        <q-icon
          name="logout"
          style="font-size: 40px; margin-left: -30px; color: #44c8f5"
        />
        <h4
          class="c-logout"
          style="font-size: 20px; color: #44c8f5; margin-left: 40px"
        >
          Log out
        </h4>
      </q-btn>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Group",
    icon: "groups",
    link: "/Group",
  },
    {
    title: "Users",
    icon: "recent_actors",
    link: "/GroupListUsers",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayoutAdmin",

  components: {
    EssentialLink,
  },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});


</script>
