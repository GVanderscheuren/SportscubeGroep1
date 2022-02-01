<template>
  <q-page style="margin-left:70px;">
<h1 style="font-size:40px;">Admin Group list</h1>
      <div class="row">
      <q-list class="row">
        <ListGroup
        />
      </q-list>
</div>
    <q-btn
      style="
      display:flex;
      jsutify-content:flex-end;
        background-color: #44c8f5;
        color: white;
        width: 100px;
      "
      to="/CreateGroup"
      label="Add"
    />
  </q-page>
</template>

<script>
import ListGroup from "components/ListGroups.vue";
import UserService from "../services/user.service";

const GroupsList = [
  {
    letter: "TM",
    name: "Team MCT",
  }
];

import axios from 'axios';
import { defineComponent, ref} from "vue";
export default defineComponent({
  name: "Group",

  components: {
    ListGroup,
  },

  data() {
    return {
      content: "",
    };
  },
    mounted() {
    UserService.getAdminBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },


  setup() {
    const groups = ref([]);
    function getData() {
      axios
        .get(
          "https://sportscubeapp.azurewebsites.net/api/GetGroups?code=1&clientId=Default"
        )
        .then((response) => {
          // groups.value = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }
    getData();

    

    return {
      ListGroup: GroupsList,
            model: ref(),

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      
    };
  },
});
</script>
