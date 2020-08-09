
<template>
  <div class="hidden">
    <b-row>
      <b-col md="3">
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          open
        </vs-button>
        <vs-sidebar relative v-model="active" :open.sync="activeSidebar">
          <SideBar />
        </vs-sidebar>
      </b-col>
      <b-col md="9">
        main
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
  }),
};
</script>

        