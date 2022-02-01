<template>
  <q-page style="margin-left: 70px">
    <h1 style="font-size: 40px">Admin challenges</h1>
    <h4 style="font-size: 28px; margin-top: -20px">Challenges</h4>
    <q-card class="my-card" style="width: 675px; height: 100%">
      <q-card-section>
        <h4 style="font-size: 28px; margin-top: 10px">Games</h4>
        <q-input outlined v-model="AddGame" label="Add game" :dense="dense">
          <template v-slot:append>
            <q-btn round dense flat icon="add" />
          </template>
        </q-input>
        <q-expansion-item
          label="Nintendo Switch"
          style="font-size: 20px; width: 100%; margin-top: 20px"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="AddGameNin"
                label="Add game"
                :dense="dense"
              >
                <template v-slot:append>
                  <q-btn round dense flat icon="add" />
                </template>
              </q-input>
              <div style="margin-top: 20px">
                <q-checkbox
                  v-model="RegularNin"
                  label="Regular"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="MediumNin"
                  label="Medium"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="HardNin"
                  label="Hard"
                  style="font-size: 16px"
                />
              </div>
              <q-select
                style="margin-top: 20px"
                outlined
                v-model="SelectInput"
                :options="options"
                label="Selecteer het type input"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Makey Makey doolhof"
          style="font-size: 20px; width: 100%; margin-top: 20px"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="AddGameMakey"
                label="Add game"
                :dense="dense"
              >
                <template v-slot:append>
                  <q-btn round dense flat icon="add" />
                </template>
              </q-input>
              <div style="margin-top: 20px">
                <q-checkbox
                  v-model="RegularMakey"
                  label="Regular"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="MediumMakey"
                  label="Medium"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="HardMakey"
                  label="Hard"
                  style="font-size: 16px"
                />
              </div>
              <q-select
                style="margin-top: 20px"
                outlined
                v-model="SelectInput"
                :options="options"
                label="Selecteer het type input"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="EXR roeigame"
          style="font-size: 20px; width: 100%; margin-top: 20px"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="AddGameEXR"
                label="Add game"
                :dense="dense"
              >
                <template v-slot:append>
                  <q-btn round dense flat icon="add" />
                </template>
              </q-input>
              <div style="margin-top: 20px">
                <q-checkbox
                  v-model="RegularEXR"
                  label="Regular"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="MediumEXR"
                  label="Medium"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="HardEXR"
                  label="Hard"
                  style="font-size: 16px"
                />
              </div>
              <q-select
                style="margin-top: 20px"
                outlined
                v-model="SelectInput"
                :options="options"
                label="Selecteer het type input"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Virtual reality"
          style="font-size: 20px; width: 100%; margin-top: 20px"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="AddGameVR"
                label="Add game"
                :dense="dense"
              >
                <template v-slot:append>
                  <q-btn round dense flat icon="add" />
                </template>
              </q-input>
              <div style="margin-top: 20px">
                <q-checkbox
                  v-model="RegularVR"
                  label="Regular"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="MediumVR"
                  label="Medium"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="HardVR"
                  label="Hard"
                  style="font-size: 16px"
                />
              </div>
              <q-select
                style="margin-top: 20px"
                outlined
                v-model="SelectInput"
                :options="options"
                label="Selecteer het type input"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Lü"
          style="font-size: 20px; width: 100%; margin-top: 20px"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="AddGameLU"
                label="Add game"
                :dense="dense"
              >
                <template v-slot:append>
                  <q-btn round dense flat icon="add" />
                </template>
              </q-input>
              <div style="margin-top: 20px">
                <q-checkbox
                  v-model="RegularLU"
                  label="Regular"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="MediumLU"
                  label="Medium"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="HardLU"
                  label="Hard"
                  style="font-size: 16px"
                />
              </div>
              <q-select
                style="margin-top: 20px"
                outlined
                v-model="SelectInput"
                :options="options"
                label="Selecteer het type input"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Exerbikes"
          style="font-size: 20px; width: 100%; margin-top: 20px"
        >
          <q-card>
            <q-card-section>
              <q-input
                outlined
                v-model="AddGameXB"
                label="Add game"
                :dense="dense"
              >
                <template v-slot:append>
                  <q-btn round dense flat icon="add" />
                </template>
              </q-input>
              <div style="margin-top: 20px">
                <q-checkbox
                  v-model="RegularXB"
                  label="Regular"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="MediumXB"
                  label="Medium"
                  style="font-size: 16px"
                />
              </div>
              <div style="margin-top: 10px">
                <q-checkbox
                  v-model="HardXB"
                  label="Hard"
                  style="font-size: 16px"
                />
              </div>
              <q-select
                style="margin-top: 20px"
                outlined
                v-model="SelectInput"
                :options="options"
                label="Selecteer het type input"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-card-section>
    </q-card>
    <q-btn
      style="
        background-color: #44c8f5;
        color: white;
        width: 150px;
                margin-left: 420px;

        margin-top: 25px;
      "
      to="/GroupListUsers"
      label="Start sessie"
    />
    <q-btn
      outline
      style="
        background-color: #44c8f5;
        color: #44c8f5;
        width: 100px;
        margin-left: 5px;
        margin-top: 25px;
      "
      to="/Group"
      label="Add"
    />
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AdminSettings",
  setup() {
    return {
      AddGame: ref(""),
      AddGameNin: ref(""),
      AddGameMakey: ref(""),
      AddGameEXR: ref(""),
      AddGameVR: ref(""),
      AddGameLU: ref(""),
      AddGameXB: ref(""),
      RegularNin: ref(false),
      MediumNin: ref(false),
      HardNin: ref(false),
      RegularMakey: ref(false),
      MediumMakey: ref(false),
      HardMakey: ref(false),
      RegularEXR: ref(false),
      MediumEXR: ref(false),
      HardEXR: ref(false),
      RegularVR: ref(false),
      MediumVR: ref(false),
      HardVR: ref(false),
      RegularLU: ref(false),
      MediumLU: ref(false),
      HardLU: ref(false),
      RegularXB: ref(false),
      MediumXB: ref(false),
      HardXB: ref(false),
    };
  },
};
</script>
