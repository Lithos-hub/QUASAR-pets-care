<template>
  <q-item clickable :to="url">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(title) }}</q-item-label>
      <q-item-label caption>
        {{ $t(description) }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RouterLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    url: {
      type: String,
      default: "/",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
