import { computed } from "vue";
import { useStore } from "vuex";

export default function useUI() {
  const store = useStore();
  return {
    toggleSideMenu() {
      store.commit("moduleUI/toggleSideMenu");
    },
    isSideMenuOpened: computed(() => store.getters["moduleUI/getSideMenuOpen"]),
  };
}
