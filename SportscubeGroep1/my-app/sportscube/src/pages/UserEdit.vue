<template> 
  <q-page style="margin-left: 70px">

    <h1 style="font-size: 40px">Admin detail user</h1>
    <q-input
      style=" width: 475px; margin-bottom: 30px"
      outlined
      v-model="Voornaam"
      label="Voornaam"
    />
    <q-input
      style=" width: 475px; margin-bottom: 30px"
      outlined
      v-model="Naam"
      label="Naam"
    />
    <q-input
    
      style="width: 475px; margin-bottom: 30px"
      outlined
      v-model="Email"
      label="Email"
    />
    <q-input
      v-model="Password"
      label="Paswoord"
      style="width: 475px; margin-bottom: 30px"
      outlined
      :type="isPwd ? 'password' : 'text'"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn
      style="
        background-color: #44c8f5;
        color: white;
        width: 100px;
        margin-left: 375px;
      "
      to="/UserList"
      label="Edit"
    />
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "UserEdit",
  setup() {
    return {
      Voornaam: ref(""),
      Naam: ref(""),
      Email: ref(""),
      text: ref(""),
      ph: ref(""),
      Password: ref(""),
      isPwd: ref(true),
    };
  },
};
</script>
