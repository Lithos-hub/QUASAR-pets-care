<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary-5">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-btn flat @click="toggleSideMenu()" round dense icon="menu" />

        <q-toolbar-title>My Pet's Life</q-toolbar-title>

        <q-space />

        <q-btn stretch flat icon="mdi-calendar" />
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat dropdown-icon="mdi-bell" no-icon-animation>
          <q-list>
            <q-item-label header>Notifications</q-item-label>
            <q-item
              v-for="(item, i) in notifications"
              :key="i"
              clickable
              v-close-popup
              tabindex="0"
            >
              <q-item-section avatar>
                <q-icon class="text-primary text-h5" :name="item.icon" />
              </q-item-section>
              <q-item-section>{{ item.title }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator dark vertical />
        <q-btn stretch flat icon="mdi-account" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="isSideMenuOpened" :width="250" :breakpoint="400">
      <div class="drawer-background absolute-top">
        <div class="absolute-bottom bg-transparent text-center q-pb-lg">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">My Name</div>
          <div>@my_alias</div>
        </div>
      </div>

      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list v-model="selectedLink" class="text-primary">
          <RouterLink
            v-for="(item, i) in menuLinks"
            :key="i"
            :to="item.url"
            :active="link === item.title"
            @click="link = item.title"
            :title="item.title"
            :url="item.url"
            :icon="item.icon"
            :description="item.description"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import RouterLink from "../components/RouterLink.vue";
import useUI from "../composables/useUI";

export default defineComponent({
  name: "Navbar",
  components: {
    RouterLink,
  },
  setup() {
    const { toggleSideMenu, isSideMenuOpened } = useUI();
    let link = ref("");
    let selectedLink = ref(0);

    let menuLinks = [
      {
        title: "navbar.myPets",
        icon: "pets",
        url: "/myPets",
        description: "navbarDesc.myPets",
      },
      {
        title: "navbar.myReports",
        icon: "description",
        url: "/myReports",
        description: "navbarDesc.myReports",
      },
      {
        title: "navbar.calendar",
        icon: "event",
        url: "/calendar",
        description: "navbarDesc.calendar",
      },
      {
        title: "navbar.help",
        icon: "info",
        url: "/help",
        description: "navbarDesc.help",
      },
    ];
    let notifications = [
      {
        title: "Alerta de compra de comida",
        icon: "info",
      },
      {
        title: "Cita con el veterinario esta tarde a las 18:00",
        icon: "medical_services",
      },
    ];

    return {
      toggleSideMenu,
      isSideMenuOpened,
      RouterLink,
      link,
      selectedLink,
      menuLinks,
      notifications,
    };
  },
});
</script>

<style lang="scss">
@import "../css/app.scss";
@import "../css/quasar.variables.scss";

.drawer-background {
  height: 150px;
  background: $gradient_1;
  color: white;
}
</style>
