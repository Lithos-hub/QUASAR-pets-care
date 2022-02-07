<template>
  <q-page class="row items-center justify-evenly">
    <q-btn round color="primary" size="lg" to="/newPet">
      <q-icon name="mdi-plus" class="text-h1" size="lg" />
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  },
});
</script>
