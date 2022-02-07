<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "App",
  setup() {
    const { locale } = useI18n({ useScope: "global" });

    return {
      locale,
    };
  },
});
</script>
