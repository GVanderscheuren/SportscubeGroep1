<template >
  <q-page class="flex flex-center" style="background-color: #44c8f5">
    <div

      class="q-pa-md q-gutter-md"
    >
      <h1
        class="flex flex-center"
        style="color: white; font-size: 125px; margin-bottom: 50px"
      >
        Scorebord
      </h1>
      <div class="flex flex-center">
        <div       v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score"
          style="
            margin-top: 200px;
            align-items: center;
            display: flex;
            flex-direction: column;
          "
        >
          <q-avatar
            size="190px"
            font-size="70px"
            color="white"
            style="color: #009a93"
          >
                      {{ topUsers[1].groepsgameUsers.naam.substring(0, 1) }}
            <q-badge
              floating
              style="
                background-color: #009a93;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                padding-left: 22.5px;
                font-size: 30px;
              "
              label="2"
            />
          </q-avatar>
          <h4 style="color: white; font-size: 40px; margin-top: 25px">
            {{ topUsers[1].groepsgameUsers.naam }}
          </h4>
          <div class="q-gutter-sm">
            <q-chip
              style="
                margin-top: -25px;
                background-color: #009a93;
                color: white;
                width: 170px;
                height: 60px;
                font-size: 26px;
              "
            >
              <q-avatar
                icon="emoji_events"
                style="
                  color: white;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                  padding-left: 10px;
                "
              >            </q-avatar>
              {{ topUsers[1].score }}
            </q-chip>
            
          </div>
        </div>
        <div
        v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score"
          style="
            margin-top: -50px;
            align-items: center;
            display: flex;
            flex-direction: column;
          "
        >
          <q-avatar
            size="250px"
            font-size="100px"
            color="white"
            style="color: #009a93"
          >
                                {{ topUsers[0].groepsgameUsers.naam.substring(0, 1) }}
            <q-badge
              floating
              style="
                background-color: #009a93;
                width: 75px;
                height: 75px;
                border-radius: 50%;
                padding-left: 25px;
                font-size: 40px;
              "
              label="1"
            />
          </q-avatar>
          <h4 style="color: white; font-size: 50px; margin-top: 25px">{{ topUsers[0].groepsgameUsers.naam }}</h4>
          <div class="q-gutter-sm">
            <q-chip
              style="
                margin-top: -25px;
                background-color: #009a93;
                color: white;
                width: 200px;
                height: 70px;
                font-size: 30px;
              "
            >                                
              <q-avatar
                icon="emoji_events"
                style="
                  color: white;
                  height: 70px;
                  width: 70px;
                  font-size: 75px;
                  padding-left: 10px;
                "
              ></q-avatar>
              {{ topUsers[0].score }}
            </q-chip>
          </div>
        </div>
        <div
                v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score"
          style="
            margin-top: 200px;
            align-items: center;
            display: flex;
            flex-direction: column;
          "
        >
          <q-avatar
            size="190px"
            font-size="70px"
            color="white"
            style="color: #009a93"
          >{{ topUsers[2].groepsgameUsers.naam.substring(0, 1) }}
            <q-badge
              floating
              style="
                background-color: #009a93;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                padding-left: 22.5px;
                font-size: 30px;
              "
              label="3"
            />
          </q-avatar>
          <h4 style="color: white; font-size: 40px; margin-top: 25px">{{ topUsers[2].groepsgameUsers.naam }}</h4>
          <div class="q-gutter-sm">
            <q-chip
              style="
                margin-top: -25px;
                background-color: #009a93;
                color: white;
                width: 170px;
                height: 60px;
                font-size: 26px;
              "
            >
              <q-avatar
                icon="emoji_events"
                style="
                  color: white;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                  padding-left: 10px;
                "
              ></q-avatar>
                            {{ topUsers[2].score }}
            </q-chip>
          </div>
        </div>
      </div>
      <q-list
        class="flex flex-center row"
        style="margin-top: 50px; margin-right: 16px"
      >
        <div                 v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score">
          <q-item
            class="q-my-sm"
            style="
              height: 100px;
              width: 800px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: primary;
              background-color: white;
              border-radius: 40px;
            "
          >
            <q-item-section>
              <q-avatar
                style="
                  background-color: #009a93;
                  margin-left: 20px;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                "
                text-color="white"
              >
                4
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label style="margin-left: -30px; font-size: 30px">
                {{ topUsers[3].groepsgameUsers.naam }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="q-gutter-sm">
                <q-chip
                  style="
                    margin-top: 10px;
                    background-color: #009a93;
                    color: white;
                    width: 170px;
                    height: 60px;
                    font-size: 26px;
                    margin-right: 20px;
                  "
                >
                  <q-avatar
                    icon="emoji_events"
                    style="
                      color: white;
                      height: 60px;
                      width: 60px;
                      font-size: 65px;
                      padding-left: 10px;
                    "
                  >
                  </q-avatar>
                  {{ topUsers[3].score }}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
        </div>
        <div                 v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score">
          <q-item
            class="q-my-sm"
            style="
              height: 100px;
              width: 800px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: primary;
              background-color: white;
              border-radius: 40px;
            "
          >
            <q-item-section>
              <q-avatar
                style="
                  background-color: #009a93;
                  margin-left: 20px;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                "
                text-color="white"
              >
                5
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label style="margin-left: -30px; font-size: 30px">
                {{ topUsers[4].groepsgameUsers.naam }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="q-gutter-sm">
                <q-chip
                  style="
                    margin-top: 10px;
                    background-color: #009a93;
                    color: white;
                    width: 170px;
                    height: 60px;
                    font-size: 26px;
                    margin-right: 20px;
                  "
                >
                  <q-avatar
                    icon="emoji_events"
                    style="
                      color: white;
                      height: 60px;
                      width: 60px;
                      font-size: 65px;
                      padding-left: 10px;
                    "
                  >
                  </q-avatar>
                  {{ topUsers[4].score }}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
        </div>
        <div                 v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score">
          <q-item
            class="q-my-sm"
            style="
              height: 100px;
              width: 800px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: primary;
              background-color: white;
              border-radius: 40px;
            "
          >
            <q-item-section>
              <q-avatar
                style="
                  background-color: #009a93;
                  margin-left: 20px;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                "
                text-color="white"
              >
                6
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label style="margin-left: -30px; font-size: 30px">
                {{ topUsers[5].groepsgameUsers.naam }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="q-gutter-sm">
                <q-chip
                  style="
                    margin-top: 10px;
                    background-color: #009a93;
                    color: white;
                    width: 170px;
                    height: 60px;
                    font-size: 26px;
                    margin-right: 20px;
                  "
                >
                  <q-avatar
                    icon="emoji_events"
                    style="
                      color: white;
                      height: 60px;
                      width: 60px;
                      font-size: 65px;
                      padding-left: 10px;
                    "
                  >
                  </q-avatar>
                  {{ topUsers[5].score }}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
        </div>
        <div                 v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score">
          <q-item
            class="q-my-sm"
            style="
              height: 100px;
              width: 800px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: primary;
              background-color: white;
              border-radius: 40px;
            "
          >
            <q-item-section>
              <q-avatar
                style="
                  background-color: #009a93;
                  margin-left: 20px;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                "
                text-color="white"
              >
                7
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label style="margin-left: -30px; font-size: 30px">
                {{ topUsers[6].groepsgameUsers.naam }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="q-gutter-sm">
                <q-chip
                  style="
                    margin-top: 10px;
                    background-color: #009a93;
                    color: white;
                    width: 170px;
                    height: 60px;
                    font-size: 26px;
                    margin-right: 20px;
                  "
                >
                  <q-avatar
                    icon="emoji_events"
                    style="
                      color: white;
                      height: 60px;
                      width: 60px;
                      font-size: 65px;
                      padding-left: 10px;
                    "
                  >
                  </q-avatar>
                  {{ topUsers[6].score }}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
        </div>
        <div                 v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score">
          <q-item
            class="q-my-sm"
            style="
              height: 100px;
              width: 800px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: primary;
              background-color: white;
              border-radius: 40px;
            "
          >
            <q-item-section>
              <q-avatar
                style="
                  background-color: #009a93;
                  margin-left: 20px;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                "
                text-color="white"
              >
                8
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label style="margin-left: -30px; font-size: 30px">
                {{ topUsers[7].groepsgameUsers.naam }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="q-gutter-sm">
                <q-chip
                  style="
                    margin-top: 10px;
                    background-color: #009a93;
                    color: white;
                    width: 170px;
                    height: 60px;
                    font-size: 26px;
                    margin-right: 20px;
                  "
                >
                  <q-avatar
                    icon="emoji_events"
                    style="
                      color: white;
                      height: 60px;
                      width: 60px;
                      font-size: 65px;
                      padding-left: 10px;
                    "
                  >
                  </q-avatar>
                  {{ topUsers[7].score }}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
        </div>
        <div                 v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score">
          <q-item
            class="q-my-sm"
            style="
              height: 100px;
              width: 800px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: primary;
              background-color: white;
              border-radius: 40px;
            "
          >
            <q-item-section>
              <q-avatar
                style="
                  background-color: #009a93;
                  margin-left: 20px;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                "
                text-color="white"
              >
                9
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label style="margin-left: -30px; font-size: 30px">
                {{ topUsers[8].groepsgameUsers.naam }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="q-gutter-sm">
                <q-chip
                  style="
                    margin-top: 10px;
                    background-color: #009a93;
                    color: white;
                    width: 170px;
                    height: 60px;
                    font-size: 26px;
                    margin-right: 20px;
                  "
                >
                  <q-avatar
                    icon="emoji_events"
                    style="
                      color: white;
                      height: 60px;
                      width: 60px;
                      font-size: 65px;
                      padding-left: 10px;
                    "
                  >
                  </q-avatar>
                  {{ topUsers[8].score }}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
        </div>
        <div                 v-for="topUser in topUsers.slice(0,1)"
      :key="topUser.score">
          <q-item
            class="q-my-sm"
            style="
              height: 100px;
              width: 800px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: primary;
              background-color: white;
              border-radius: 40px;
            "
          >
            <q-item-section>
              <q-avatar
                style="
                  background-color: #009a93;
                  margin-left: 20px;
                  height: 60px;
                  width: 60px;
                  font-size: 65px;
                "
                text-color="white"
              >
                10
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label style="margin-left: -30px; font-size: 30px">
                {{ topUsers[9].groepsgameUsers.naam }}
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <div class="q-gutter-sm">
                <q-chip
                  style="
                    margin-top: 10px;
                    background-color: #009a93;
                    color: white;
                    width: 170px;
                    height: 60px;
                    font-size: 26px;
                    margin-right: 20px;
                  "
                >
                  <q-avatar
                    icon="emoji_events"
                    style="
                      color: white;
                      height: 60px;
                      width: 60px;
                      font-size: 65px;
                      padding-left: 10px;
                    "
                  >
                  </q-avatar>
                  {{ topUsers[9].score }}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Group",

  setup() {
    const topUsers = ref([]);
    function getData() {
      axios
        .get(
          "https://sportscubeapp.azurewebsites.net/api/GetTopScoresDesc?code=1&clientId=Default"
        )
        .then((response) => {
          topUsers.value = response.data;
          console.log(response.data);
          console.log(response.data[0].score);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }
    getData();

    return {
      topUsers,
      model: ref(""),
    };
  },
});
</script>

<style>
</style>
