<template v-slot:body="props">
  <div class="row">
    <q-list v-for="group in groups" :key="group.groepsgameId">
      <div class="col-6">
        <q-btn
          :to="`/UserList?groupgameID=${group.groepsgameId}`"
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
              {{ group.naam.substring(0, 1) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label
              :data="group.groepsgameUsersId"
              style="margin-left: -60px; font-size: 18px; color: #44c8f5"
              >{{ group.naam }}</q-item-label
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

export default {
  // method: function viewUserDetails(groups) {
  //   this.$router.push({
  //     name: "detailUsers",
  //     params: {
  //       id: groups.userId,
  //     },
  //   });
  // },

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
      groups,
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
