<template>
  <div
    class="row justify-center"
    style="
      padding-top: 15px;
      margin-top: 20px;
    "
  >
    <q-list
      v-for="challenge in UserChallenges"
      :key="challenge.challengeId"
      v-bind="challenge"

    >
      <div class="spel">
        <q-card class="my-card col-4" style="margin-bottom: 30px; margin-right: 20px">
          <img :src="require(`../assets/${challenge.toestel.afbeelding}`)" />

          <q-card-section>
            <div class="text-h6">{{ challenge.naam }}</div>
            <div class="text-h7">
              {{ challenge.toestel.naam }} - {{ challenge.categorie.naam }}
            </div>
            <div class="text-subtitle2">Score: {{ challenge.score.score }}</div>
          </q-card-section>
        </q-card>
      </div>
    </q-list>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const route = useRoute();
    // console.log(route.query.userID);
    let ID = route.query.userID;

    const user = ref([]);
    const challenges = ref([]);
    const UserChallenges = ref([]);

    function getUserData() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetGroupsgameUserDetail/${ID}?code=1&clientId=Default`
        )
        .then((response) => {
          user.value = response.data[0];
          // let groupGameID = response.data[0].groepsgameId;
          let userID = response.data[0].groepsgameUsersId;
          // console.log(userID);
          // console.log(groupGameID);
          // getGroupChallenges(groupGameID);
          getUserChallenges(userID);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    // function getGroupChallenges(groupGameID) {
    //   axios
    //     .get(
    //       `https://sportscubeapp.azurewebsites.net/api/GetGroupChallenge/${groupGameID}?code=1&clientId=Default`
    //     )
    //     .then((response) => {
    //       challenges.value = response.data;
    //       console.log(challenges.value);
    //     })
    //     .catch((error) => {
    //       console.log("There was an error" + error.response);
    //     });
    // }

    function getUserChallenges(userID) {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetUserChallenge/${userID}?code=1&clientId=Default`
        )
        .then((response) => {
          UserChallenges.value = response.data;
          // console.log(UserChallenges.value);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    getUserData();

    return {
      user,
      challenges,
      UserChallenges,
    };
  },

  name: "ListScores",
  props: {
    name: {
      type: String,
      default: "",
    },
    score: {
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

.spel {
  width: 100%;
  max-width: 500px;
}
</style>
