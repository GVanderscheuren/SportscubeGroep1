<template>
  <q-page style="margin-left: 70px">
    <h1 style="font-size: 40px">Group User list</h1>
    <!-- <ul id="v-for-object">
      <li v-for="user in users" :key="user.userId">
        {{user.naam}}
      </li>
    </ul> -->
    <div class="row">
      <q-list class="row">
        <ListUser />
      </q-list>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios';
// import useAPI from "../composables/useNetwork";
import ListUser from "components/ListGroupsUsers.vue";

const UsersList = [
  {
    letter: "NC",
    name: "Nathan Coppens",
  },
];

import { ref } from "vue";
export default {
  // data() {
  //   return {
  //     users: [],
  //     search: "",
  //   };
  // },

  // created() {
  //   axios
  //     .get(
  //       "https://sportscubeapp.azurewebsites.net/api/GetAdmin?code=1&clientId=Default"
  //     )
  //     .then((response) => {
  //      (users = response.data);
  //     })
  //     .catch((error) => {
  //       console.log("There was an error" + error.response);
  //     });
  // },

  // computed: {
  //   filteredUsers: function () {
  //     return this.users.filter((user) => {
  //       return user.name.match(this.search);
  //     });
  //   },
  // },

  // data() {
  //   return {
  //     users: [],
  //   };
  // },

  components: {
    ListUser,
  },

  setup() {
    const groups = ref([]);
    function getData() {
      axios
        .get(
          "https://sportscubeapp.azurewebsites.net/api/GetGroups?code=1&clientId=Default"
        )
        .then((response) => {
          groups.value = response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }
    getData();

    return {
      // data,
      ListUser: groups,
      model: ref(""),

      // options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },

  computed: {},
};
</script>

<style></style>
