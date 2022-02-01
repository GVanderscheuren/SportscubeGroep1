<template>
  <q-page >
    <div class="flex" style="margin-left: 60px">
      <q-btn
        :to="`/UserList?groupgameID=${user.groepsgameId}`"
        flat
        round
        icon="arrow_back"
        style="font-size: 25px; height: 100%; margin-top: 38px"
      />
      <h1 style="font-size: 40px">Welkom {{ user.naam }}</h1>
    </div>

    <div style="margin-top: 26.8px">
      <!-- <q-tabs v-model="tab"> </q-tabs> -->
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="MijnSpellen" style="" label="Mijn spellen" />
        <q-tab name="MijnScores" label="Mijn scores" />
      </q-tabs>

      <q-tab-panels
        style="margin-left: 70px; margin-right: 70px"
        v-model="tab"
        animated
      >
        <q-tab-panel name="MijnSpellen">
          <div class="row">
            <q-btn
              v-for="challenge in challenges"
              :key="challenge.toestelId"
              :to="`/ScoreDetail?userID=${user.groepsgameUsersId}&challengeID=${challenge.challengeId}`"
              class="spel col-3"
              style="
                padding-top: 15px;
                margin-top: 20px;
                margin-bottom: 40px;
                margin-right: 215px;
              "
            >
              <img
                style="width: 400px; height: 400px; object-fit: cover"
                src="~assets/Nintendo_switch.png"
              />

              <q-card-section>
                <div class="text-h6">{{ challenge.toestel.naam }}</div>
                <div class="text-h7">{{ challenge.categorie.naam }}</div>
              </q-card-section>
            </q-btn>
          </div>
        </q-tab-panel>

        <q-tab-panel name="MijnScores">
          <div class="row">
            <q-list class="row">
              <ListScores />
            </q-list>
          </div>
        </q-tab-panel>

      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import ListScores from "components/ListScores.vue";

const ScoreList = [
  {
    name: "Nintendo ring fit",
    score: "score: 1250",
    avatar: "Nintendo_switch.png",
  },
  {
    name: "Nintendo ring fit",
    score: "score: 1250",
    avatar: "Nintendo_switch.png",
  },
  {
    name: "Nintendo ring fit",
    score: "score: 1250",
    avatar: "Nintendo_switch.png",
  },
  {
    name: "Nintendo ring fit",
    score: "score: 1250",
    avatar: "Nintendo_switch.png",
  },
];


import axios from "axios";
import { useRoute } from "vue-router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "DetailUser",

  components: {
    ListScores,
  },

  setup() {
    // Search for userID
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
          let groupGameID = response.data[0].groepsgameId;
          let userID = response.data[0].groepsgameUsersId;
          // console.log(response.data[0]);
          // console.log(groupGameID);
          getGroupChallenges(groupGameID);
          getUserChallenges(userID);
        })
        .catch((error) => {
          // console.log("There was an error" + error.response);
        });
    }

    function getGroupChallenges(groupGameID) {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetGroupChallenge/${groupGameID}?code=1&clientId=Default`
        )
        .then((response) => {
          challenges.value = response.data;
          console.log(challenges.value);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    function getUserChallenges(userID){
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetUserChallenge/${userID}?code=1&clientId=Default`
        )
        .then((response) => {
          // UserChallenges.value = response.data;
          console.log("user challenge:", UserChallenges.value);
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
      // ListScore: ScoreList,
      // ListScoresOthers: ScoresOthersList,
      tab: ref("MijnSpellen"),

      options: [
        "Nintendo switch",
        "Makey Makey doolhof",
        "EXR Roeigame",
        "Virtual reality",
        "Lü",
        "Cyclobeat",
      ],
    };
  },
});
</script>

<style>
.q-tab__label {
  font-size: 20px;
}

.spel {
  width: 100%;
  max-width: 500px;
}
</style>
