<template>
  <q-page style="margin-left: 70px">
    <h1 style="font-size: 40px">Admin create group</h1>
    <q-form
    v-on:submit.prevent="addGroup"
    method="post">
    <q-input
      style="width: 475px; margin-bottom: 30px"
      outlined
      v-model="group.Naam"
      label="Groepnaam"
      name="Naam"
      id="Naam"
    />
    <q-select
      style="width: 475px; margin-bottom: 30px"
      outlined
      v-model="group.Aantal"
      label="Aantal deelnemers"
      multiple
      :options="options"
      name="Aantal"
      id="Aantal"
    />
    <q-btn
      type="submit"
      style="
        background-color: #44c8f5;
        color: white;
        width: 100px;
        margin-left: 375px;
      "
      label="Create"
    />
    </q-form>
  </q-page>
</template>

<script>
import axios from 'axios';
import { ref } from "vue";

const options = [];
for (let i = 0; i <= 20; i++) {
  options.push(i);
};

export default {
  name: "GroupCreate",
  data(){
    return{
      group:{
        Naam: '',
        Aantal: null,
      }
    };
  },

  methods:{
    addGroup(){
      this.group.Aantal = parseInt(this.group.Aantal[0])
    axios
      .post(
        `https://sportscubeapp.azurewebsites.net/api/AddGroup?code=1&clientId=Default`,
        this.group
      )
      .then((response) => this.$router.push("/Group")
      )
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error, this.group);
      });
    }
  },

  setup() {

    // const Group = { Naam: "De sukkelaars", Aantal: 14 };
    // function addGroup(){
    // axios
    //   .post(
    //     `https://sportscubeapp.azurewebsites.net/api/AddGroup?code=1&clientId=Default`,
    //     group
    //   )
    //   .then((response) => (this.articleId = response.data.id))
    //   .catch((error) => {
    //     this.errorMessage = error.message;
    //     console.error("There was an error!", error);
    //   });
    // }

    return {
      Groepnaam: ref(""),
      Deelnemers: ref(null),
      options,
    };
  },
};
</script>
