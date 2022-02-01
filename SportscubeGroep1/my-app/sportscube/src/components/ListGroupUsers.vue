<template>
  <div class="q-pa-md row" style="margin-left: -15px">
    <q-list
      bordered
      v-for="user in users"
      :key="user.groepsgameId"
      :v-bind="user"
      style="margin-top: 15px; margin-right: 15px"
    >
      <div class="col-6">
        <q-item
          class="q-my-sm row"
          style="
            width: 350px;
          
            color: primary;
          ">
          <q-item-section letter>
            <q-avatar class="c-background-color" text-color="white">
              {{ user.naam.substring(0, 1) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-input
              label="Spelersnaam"
              style="margin-left: -80px"
              v-model="user.naam"
            ></q-input>
          </q-item-section>

          <q-item-section side class="c-color">
            <q-btn
              flat
              round
              icon="check"
              @click="editPlayer(user.naam, user.groepsgameUsersId)"
            />
            <q-btn
              flat
              round
              icon="delete"
              @click="deletePlayer(user.groepsgameUsersId)"
            />
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ListGroupUsers",

  methods: {
    editPlayer(naam, ID) {
      // console.log(naam, ID);
      let EditUser = {
        GroepsgameUsersId: ID.toString(),
        Naam: naam,
      };
      console.log(EditUser);
      axios
        .put(
          `https://sportscubeapp.azurewebsites.net/api/EditGroupsgameUser/${ID}?`,
          EditUser
        )
        .then((response) => {
          // console.log(response);
          this.$router.go();
        })
        .catch((err) => {
          console.log("There was an error" + err.response);
        });
    },

    deletePlayer(ID) {
      console.log(ID);
      // let deleteUser={
      //   GroepsgameUsersI: ID.toString()
      // }
      // console.log(deleteUser)
      axios
        .delete(
          `https://sportscubeapp.azurewebsites.net/api/DeleteGroupUser/${ID}?`
        )
        .then((response) => {
          // console.log(response);
          this.$router.go();
        })
        .catch((err) => {
          console.log("There was an error" + err.response);
        });
    },
  },

  setup() {
    const route = useRoute();
    // console.log(route.query.groupID);
    let ID = route.query.groupID;

    const users = ref([]);

    function getData() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetUsersPerGroup/${ID}?code=1&clientId=Default`
        )
        .then((response) => {
          users.value = response.data;
          // console.log(response.data);
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

  props: {
    letter: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.c-color {
  color: #44c8f5;
}
.c-background-color {
  background-color: #44c8f5;
}
</style>
