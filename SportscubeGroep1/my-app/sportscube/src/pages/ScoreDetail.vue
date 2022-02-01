<template v-if="loaded == 'ok'">
  <q-page style="margin-left: 70px">
    <div class="flex" style="margin-left: -15px">
      <q-btn
        :to="`/DetailUser?userID=${userID}`"
        flat
        round
        icon="arrow_back"
        style="font-size: 20px; height: 100%; margin-top: 38px"
      />

      <h1 style="font-size: 30px">
        {{ challengeCat }} - {{ challengeSubCat }}
      </h1>
    </div>
    <h4 style="font-size: 18px">{{ challengeNaam }}</h4>
    <q-input
      style="width: 475px; margin-bottom: 30px"
      outlined
      v-model="Score"
      label="Score"
    />
    <q-btn
      @click="
        postScore(
          Score,
          user.groepsgameId,
          challengeInfo.challengeId,
          user.groepsgameUsersId
        )
      "
      style="
        background-color: #44c8f5;
        color: white;
        width: 250px;
        margin-left: 225px;
      "
      label="Bevestig score"
    />
  </q-page>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "ScoreDetail",

  setup() {
    let loaded = "niet ok";
    const result = ref([]);

    // Search for userID
    const route = useRoute();
    // console.log(route.query.userID);
    let userID = route.query.userID;
    let challengeID = route.query.challengeID;
    console.log(userID, challengeID);
    const challengeCat  = ref([]);
    const challengeSubCat = ref([]);
    const challengeNaam = ref([]);


    const user = ref([]);
    const challengeInfo = ref([]);

    function getUserInfo(){
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetGroupsgameUserDetail/${userID}?code=1&clientId=Default`
        )
        .then((response) => {
          user.value = response.data[0];
          // let groupGameID = response.data[0].groepsgameId;
          // let userID = response.data[0].groepsgameUsersId;
          console.log(response.data[0]);
          // console.log(groupGameID);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    function getChallengeInfo() {
      console.log("Dit werkt");
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetOneChallenge/${challengeID}?code=1&clientId=Default`
        )
        .then((response) => {
          challengeInfo.value = response.data[0];
          challengeCat.value = response.data[0].categorie.naam;
          challengeSubCat.value = response.data[0].categorie.subcategorie;
          challengeNaam.value = response.data[0].naam;
          // console.log(challengeCat, challengeSubCat, challenge);
          console.log(response.data[0]);
          loaded = 'ok';
          console.log(loaded);
          // this.$router.go();
        })
        .catch((error) => {
          console.log("There was an error" + error.response.data);
        });
    }
    getUserInfo();
    getChallengeInfo();
    // console.log(challengeInfo.value)

    return {
      challengeInfo,
      userID,
      challengeID,
      loaded,
      challengeCat,
      challengeSubCat,
      challengeNaam,
      user,
    };
  },

  methods: {

    postScore(score, groepID, challengeID, userID) {
      console.log("score:", parseInt(score));
      console.log("groep:", groepID);
      console.log("challenge:", challengeID);
      console.log("user:", userID);

      let postScore = {
        groepsgameUsersId: userID,
        challengeId: challengeID,
        groepsgameId: groepID,
        score: parseInt(score),
      };
      console.log(postScore);

      axios
        .post(
          `https://sportscubeapp.azurewebsites.net/api/addScoreToChallenge?`,
          postScore
        )
        .then((response) => {
          // result.value = response;
          console.log(response.data);
          this.$router.push(`/DetailUser?userID=${userID}`);

        });
    },
  },
};
</script>
