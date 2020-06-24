

<template>
  <div>
    <b-sidebar id="sidebar-backdrop" backdrop-variant="dark" backdrop shadow>
      <div class="px-3 py-2">
        <SideBar @click="reload" />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    reload() {
      this.$router.go();
    }
  }
};
</script