<template>
  <q-page class="q-pa-md">
    <h3 class="text-center text-h3">Nueva mascota</h3>
    <div class="row">
      <div class="col"></div>
      <div class="col-md-4 col-lg-4 col-xs-12">
        <q-card class="q-pa-md gradient-primary">
          <q-input
            v-model="name"
            class="q-my-md rounded-input"
            label-color="primary"
            rounded
            outlined
            :label="$t('page-newPet.name')"
          />
          <q-input
            v-model="race"
            class="q-my-md rounded-input"
            label-color="primary"
            rounded
            outlined
            :label="$t('page-newPet.race')"
          />
          <q-input
            v-model="birthday"
            class="q-my-md rounded-input"
            label-color="primary"
            rounded
            outlined
            :label="$t('page-newPet.birthday')"
            mask="date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="birthday">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            class="q-my-md rounded-input"
            label-color="primary"
            rounded
            outlined
            v-model="description"
            :label="$t('page-newPet.description')"
            type="textarea"
          />
        </q-card>
        <q-btn
          color="primary"
          icon="check"
          rounded
          class="absolute-bottom text-h5 q-mx-auto q-mb-xl"
          fab
        />
      </div>
      <div class="col"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Pet-New",
  setup() {
    let name = ref("");
    let race = ref("");
    let birthday = ref("");
    let description = ref("");

    return {
      name,
      race,
      birthday,
      description,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../css/app.scss";
@import "../css/quasar.variables.scss";
</style>
