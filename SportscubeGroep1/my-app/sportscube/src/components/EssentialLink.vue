<template>
  <q-item class="c-menulinks" active-class="activelink" clickable exact :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon
        :name="icon"
        class=""
        active-class=""
        style="font-size: 40px; margin-bottom: 0px; margin-left: 20px"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        style="
          font-size: 20px;
          margin-top: 20px;
          margin-left: 20px;
          margin-bottom: 20px;
        "
        >{{ title }}</q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
.c-menulinks {
  color: #44c8f5;
}
.activelink{
  color: #000000;
}
</style>
