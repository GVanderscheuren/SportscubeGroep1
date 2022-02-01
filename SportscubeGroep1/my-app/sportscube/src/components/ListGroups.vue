<template>
  <div class="q-pa-md row" style="margin-left: -15px">
    <q-list
      v-for="group in groups"
      :key="group.groepsgameId"
      bordered
      style="margin-top: 15px; margin-right: 15px"
    >
      <div class="col-6">
        <q-item
          class="q-my-sm"
          style="
            width: 400px;
            margin-right: 20px;
            margin-top: 20px;
            color: primary;
          "
        >
          <q-item-section letter>
            <q-avatar class="c-background-color" text-color="white">
              {{ group.naam.substring(0, 1) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label style="margin-left: -30px">{{
              group.naam
            }}</q-item-label>
          </q-item-section>

          <q-item-section side class="c-color">
            <q-btn
              :to="`/EditGroup?groupID=${group.groepsgameId}`"
              flat
              round
              icon="edit"
            />
          </q-item-section>
          <q-item-section side class="c-color">
            <q-btn
              flat
              round
              icon="delete"
              @click="deleteGroup(group.groepsgameId)"
            />
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ListGroup",
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

  data() {
    return {
      GroupID: {
        groepsgameId: "",
      },
    };
  },

  methods:{
    deleteGroup(GroupID){
      // let DeleteGroup={
      //   groepsgameId: GroupID
      // };
      // console.log(DeleteGroup)
      axios
        .delete(
          `https://sportscubeapp.azurewebsites.net/api/DeleteGroup/${GroupID}?`
        )
        .then((response) => {
          console.log(response);
          this.$router.go()
        })
        .catch((err) => {
          console.log("There was an error" + err.response);
        });
    }
  },

  setup() {
    const groups = ref([]);
    // function deleteGroup(GroupID) {
    //   axios
    //     .get(
    //       "https://sportscubeapp.azurewebsites.net/api/DeleteGroup?code=1&clientId=Default",
    //       GroupID
    //     )
    //     .then((response) => {
    //       console.log(response, GroupID);
    //     })
    //     .catch((err) => {
    //       console.log("There was an error" + err.response, GroupID);
    //     });
    // }

    function getData() {
      axios
        .get(
          "https://sportscubeapp.azurewebsites.net/api/GetGroups?code=1&clientId=Default"
        )
        .then((response) => {
          groups.value = response.data;
          console.log(response.data);
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
