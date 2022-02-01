<template>
  <q-page style="margin-left: 70px">
    <div class="flex" style="margin-left: -20px">
      <q-btn
        :to="`/Group`"
        flat
        round
        icon="arrow_back"
        style="font-size: 25px; height: 100%; margin-top: 38px"
      />
      <h1 style="font-size: 40px">Admin edit group</h1>
    </div>
    <h4 style="font-size: 28px; margin-top: -20px; margin-bottom: 20px">
      Groep
    </h4>
    <q-input
      style="width: 475px; margin-bottom: 30px"
      outlined
      v-model="groupDetails.naam"
      label="Groepnaam"
    />
    <q-btn
      outline
      style="width: 100px; margin-left: 375px; color: #44c8f5"
      label="Edit"
      @click="editGroup(groupDetails.naam, groupDetails.groepsgameId)"
    />
    <h4 style="font-size: 28px; margin-bottom: 5px">Users</h4>
    <div class="row">
      <q-list class="row">
        <ListGroupUser />
      </q-list>
    </div>

    <q-btn
      outline
      style="
        width: 100px;
        margin-left: 375px;
        margin-bottom: 100px;
        color: #44c8f5;
      "
      label="Add"
      @click="AddPlayer(groupDetails.groepsgameId)"
    />

    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="Nintendo Switch" label="Nintendo Switch" />
      <q-tab name="Roeigames" label="Roeigames" />
      <q-tab name="Makey Makey" label="Makey Makey" />
      <q-tab name="LÜ" label="LÜ" />
      <q-tab name="Cyclobeat" label="Cyclobeat" />
      <q-tab name="VR Games" label="VR Games" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Nintendo Switch">
        <div class="row">
          <q-list class="row">
            <q-card-section>
              <h4 style="font-size: 28px; margin-top: 10px">Games</h4>
              {{NintendoCat[0]}}
            </q-card-section>

            <!-- </q-card> -->
            <!-- <q-card class="my-card" style="width: 675px; height: 100%">
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
    </q-card> -->
            <q-btn
              style="
                background-color: #44c8f5;
                color: white;
                width: 100px;
                margin-left: 575px;

                margin-top: 25px;
                margin-bottom: 50px;
              "
              label="Add"
            />
          </q-list>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Roeigames">
        <div class="row">
          <q-list class="row">
            <q-card-section>
              <h4 style="font-size: 28px; margin-top: 10px">Games</h4>
              <q-select
                style="width: 475px"
                rounded
                outlined
                v-model="model"
                map-options
                emit-value
                option-value="id"
                option-label="naam"
                input-debounce="0"
                label="Game"
                :options="NintendoCat"
                @focus="GetCategoriesToestel(model)"
              >
              </q-select>
              <!-- <q-input outlined v-model="AddGame" label="Add game" :dense="dense">
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input> -->
            </q-card-section>

            <!-- </q-card> -->
            <!-- <q-card class="my-card" style="width: 675px; height: 100%">
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
    </q-card> -->
            <q-btn
              style="
                background-color: #44c8f5;
                color: white;
                width: 100px;
                margin-left: 575px;

                margin-top: 25px;
                margin-bottom: 50px;
              "
              label="Add"
            />
          </q-list>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Makey Makey">
        <div class="row">
          <q-list class="row">
            <q-card-section>
              <h4 style="font-size: 28px; margin-top: 10px">Games</h4>
              <q-select
                style="width: 475px"
                rounded
                outlined
                v-model="model"
                map-options
                emit-value
                option-value="id"
                option-label="naam"
                input-debounce="0"
                label="Game"
                :options="options"
                @focus="GetCategoriesToestel(model)"
              >
              </q-select>
              <!-- <q-input outlined v-model="AddGame" label="Add game" :dense="dense">
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input> -->
            </q-card-section>

            <!-- </q-card> -->
            <!-- <q-card class="my-card" style="width: 675px; height: 100%">
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
    </q-card> -->
            <q-btn
              style="
                background-color: #44c8f5;
                color: white;
                width: 100px;
                margin-left: 575px;

                margin-top: 25px;
                margin-bottom: 50px;
              "
              label="Add"
            />
          </q-list>
        </div>
      </q-tab-panel>

      <q-tab-panel name="LÜ">
        <div class="row">
          <q-list class="row">
            <q-card-section>
              <h4 style="font-size: 28px; margin-top: 10px">Games</h4>
              <q-select
                style="width: 475px"
                rounded
                outlined
                v-model="model"
                map-options
                emit-value
                option-value="id"
                option-label="naam"
                input-debounce="0"
                label="Game"
                :options="options"
                @focus="GetCategoriesToestel(model)"
              >
              </q-select>
              <!-- <q-input outlined v-model="AddGame" label="Add game" :dense="dense">
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input> -->
            </q-card-section>

            <!-- </q-card> -->
            <!-- <q-card class="my-card" style="width: 675px; height: 100%">
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
    </q-card> -->
            <q-btn
              style="
                background-color: #44c8f5;
                color: white;
                width: 100px;
                margin-left: 575px;

                margin-top: 25px;
                margin-bottom: 50px;
              "
              label="Add"
            />
          </q-list>
        </div>
      </q-tab-panel>

      <q-tab-panel name="Cyclobeat">
        <div class="row">
          <q-list class="row">
            <q-card-section>
              <h4 style="font-size: 28px; margin-top: 10px">Games</h4>
              <q-select
                style="width: 475px"
                rounded
                outlined
                v-model="model"
                map-options
                emit-value
                option-value="id"
                option-label="naam"
                input-debounce="0"
                label="Game"
                :options="options"
                @focus="GetCategoriesToestel(model)"
              >
              </q-select>
              <!-- <q-input outlined v-model="AddGame" label="Add game" :dense="dense">
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input> -->
            </q-card-section>

            <!-- </q-card> -->
            <!-- <q-card class="my-card" style="width: 675px; height: 100%">
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
    </q-card> -->
            <q-btn
              style="
                background-color: #44c8f5;
                color: white;
                width: 100px;
                margin-left: 575px;

                margin-top: 25px;
                margin-bottom: 50px;
              "
              label="Add"
            />
          </q-list>
        </div>
      </q-tab-panel>

      <q-tab-panel name="VR Games">
        <div class="row">
          <q-list class="row">
            <q-card-section>
              <h4 style="font-size: 28px; margin-top: 10px">Games</h4>

              <!-- <q-input outlined v-model="AddGame" label="Add game" :dense="dense">
        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input> -->
            </q-card-section>

            <!-- </q-card> -->
            <!-- <q-card class="my-card" style="width: 675px; height: 100%">
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
    </q-card> -->
            <q-btn
              style="
                background-color: #44c8f5;
                color: white;
                width: 100px;
                margin-left: 575px;

                margin-top: 25px;
                margin-bottom: 50px;
              "
              label="Add"
            />
          </q-list>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import ListGroupUser from "components/ListGroupUsers.vue";

const GroupUsersList = [
  {
    letter: "1",
    name: "Speler 1",
  },
  {
    letter: "2",
    name: "Speler 2",
  },
  {
    letter: "3",
    name: "Speler 3",
  },
  {
    letter: "4",
    name: "Speler 4",
  },
];
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "GroupEdit",
  components: {
    ListGroupUser,
  },

  setup() {
    const route = useRoute();
    // console.log(route.query.groupID);
    let ID = route.query.groupID;

    const users = ref([]);
    const challenges = ref([]);
    const groupDetails = ref([]);
    const Categories = ref([]);
    const Toestellen = ref([]);
    let ToestelLijst = [];
    let NintendoCat = [];
    let RoeiCat = [];
    let MakeyCat = [];
    let LuCat = [];
    let CycloCat = [];
    let VRCat = [];

    function getData() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetUsersPerGroup/${ID}?code=1&clientId=Default`
        )
        .then((response) => {
          users.value = response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    function getGroupChallenges() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetGroupChallenge/${ID}?code=1&clientId=Default`
        )
        .then((response) => {
          challenges.value = response.data;
          // console.log(challenges.value);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    function getGroup() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetGroupDetail/${ID}?code=1&clientId=Default`
        )
        .then((response) => {
          groupDetails.value = response.data[0];
          // console.log(response.data[0]);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    function getCategories() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetCategories?code=1&clientId=Default`
        )
        .then((response) => {
          Categories.value = response.data;
          console.log(response.data);
          catSort(response.data);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    function catSort(categories) {
      console.log("Werkt");
      for (let cat of categories) {
        // console.log(cat);
        if (cat.toestelId === "e43900f6-62bf-49bc-9e34-0a0bcdfc5336") {
          NintendoCat.push(cat);
        } else if (cat.toestelId === "a480197b-a2b6-4bb7-b33b-246c459ce5b6") {
          RoeiCat.push(cat);
        } else if (cat.toestelId === "75fcf84f-1d75-453e-adce-281a48f16e0e") {
          MakeyCat.push(cat);
        } else if (cat.toestelId === "1894a2b5-313c-4dbb-a08a-320d1855e18a") {
          LuCat.push(cat);
        } else if (cat.toestelId === "3a451d30-8849-4ba0-954b-38f0f55cb5da") {
          CycloCat.push(cat);
        } else if (cat.toestelId === "d330d3ae-360e-4196-8e11-5c6a83eaefe8") {
          VRCat.push(cat);
        }
      }
      console.log("Nintendo:", NintendoCat);
      console.log("roeigame:", RoeiCat);
      console.log("Makey Makey:", MakeyCat);
      console.log("Lu:", LuCat);
      console.log("CycloBeat:", CycloCat);
      console.log("VR:", VRCat);
    }

    function getToestellen() {
      axios
        .get(
          `https://sportscubeapp.azurewebsites.net/api/GetToestellen?code=1&clientId=Default`
        )
        .then((response) => {
          Toestellen.value = response.data;
          console.log(response.data);
          for (let toestel of response.data) {
            ToestelLijst.push({ naam: toestel.naam, id: toestel.toestelId });
          }
          console.log(ToestelLijst);
          console.log(typeof ToestelLijst);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    }

    getData();
    getGroupChallenges();
    getGroup();
    getCategories();
    getToestellen();

    return {
      model: ref(""),
      options: [
        { id: "e43900f6-62bf-49bc-9e34-0a0bcdfc5336", naam: "Nintendo Switch" },
        { id: "a480197b-a2b6-4bb7-b33b-246c459ce5b6", naam: "Roeitrainer" },
        { id: "75fcf84f-1d75-453e-adce-281a48f16e0e", naam: "Makey Makey" },
        { id: "1894a2b5-313c-4dbb-a08a-320d1855e18a", naam: "LÜ" },
        { id: "3a451d30-8849-4ba0-954b-38f0f55cb5da", naam: "Cyclobeat" },
        { id: "d330d3ae-360e-4196-8e11-5c6a83eaefe8", naam: "VR Games" },
      ],
      NintendoCat,
      RoeiCat,
      MakeyCat,
      LuCat,
      CycloCat,
      VRCat,
      users,
      challenges,
      groupDetails,
      Categories,
      Toestellen,
      ToestelLijst,
      tab: ref("Nintendo Switch"),
      ListGroupUser: GroupUsersList,
      Groep: ref(""),
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

  methods: {
    editGroup(name, ID) {
      // console.log(name)
      // console.log(ID)

      let putData = {
        Naam: name,
      };
      // console.log(putData);

      axios
        .put(
          `https://sportscubeapp.azurewebsites.net/api/EditGroup/${ID}?`,
          putData
        )
        .then((response) => {
          result.value = response;
          // console.log(response.data[0]);
        })
        .catch((error) => {
          console.log("There was an error" + error.response);
        });
    },

    AddPlayer(ID) {
      let postData = {
        groepsgameId: ID,
      };
      axios
        .post(
          `https://sportscubeapp.azurewebsites.net/api/AddPlayerToGroup?code=1&clientId=Default`,
          postData
        )
        .then((response) => this.$router.go())
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error, this.group);
        });
    },

    deleteChallenge(challengeId) {
      console.log(challengeId);

      axios
        .delete(
          `https://sportscubeapp.azurewebsites.net/api/DeleteChallenge/${challengeId}?`
        )
        .then((response) => {
          console.log(response);
          // this.$router.go();
        })
        .catch((err) => {
          console.log("There was an error" + err.response);
        });
    },
  },
});
</script>
