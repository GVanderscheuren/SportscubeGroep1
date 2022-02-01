<template v-slot:body="props">
  <div class="row">
    <q-list v-for="user in users" :key="user.groepsgameUsersId">
      <div class="col-6">
        <q-btn
          :to="`/DetailUser?userID=${user.groepsgameUsersId}`"
          :props="props"
          outline
          class="q-pa-md"
          style="
            width: 400px;
            margin-right: 20px;
            margin-top: 20px;
            color: lightgrey;
          "
        >
          <q-item-section letter>
            <q-avatar class="c-background-color" text-color="white">
              {{ user.naam.substring(0, 1) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label
              :data="user.userId"
              style="margin-left: -60px; font-size: 18px; color: #44c8f5"
              >{{ user.naam }}</q-item-label
            >
          </q-item-section>
        </q-btn>
      </div>
    </q-list>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

export default {
  method: function viewUserDetails(users) {
    this.$router.push({
      name: "detailUsers",
      params: {
        id: users.userId,
      },
    });
  },

  setup() {
    const route = useRoute();
    console.log(route.query.groupgameID);
    let ID = route.query.groupgameID;

    const users = ref([]);
    function getData() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetUsersPerGroup/${ID}?code=1&clientId=Default`
        )
        .then((response) => {
          users.value = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }
    getData();

    return {
      users,
    };
  },

  // props: {
  //   user: Object,
  // },
};

// import { defineComponent } from "vue";

// export default defineComponent({
//   name: "ListUser",
//   props: {
//     letter: {
//       type: String,
//       default: "",
//     },
//     name: {
//       type: String,
//       default: "",
//     },
//     avatar: {
//       type: String,
//       default: "",
//     },
//   },
// });
</script>

<style>
.c-color {
  color: #44c8f5;
}
.c-background-color {
  background-color: #44c8f5;
}
</style>
