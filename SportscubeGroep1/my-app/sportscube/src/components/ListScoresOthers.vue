<template>
  <div class="q-pa-md" style="width: 400px; margin-left: -15px;">
    <q-list bordered>
      <div class="col-6" >
      <q-item class="q-my-sm">
        <q-item-section letter>
          <q-avatar color="primary" text-color="white">
            {{ letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section style="margin-left:-100px;">
          <q-item-label style="font-size:18px;">{{ name }}</q-item-label>
          <q-item-label style="font-size:16px;" caption lines="1">{{ score }}</q-item-label>
        </q-item-section>
      </q-item></div>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListScoresOthers",
  props: {
    name: {
      type: String,
      default: "",
    },
    score: {
      type: String,
      default: "",
    },
    letter: {
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