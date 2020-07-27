<template>
  <div class="sideBar mb-4">
    <h5 class="text-center chanel">Channel</h5>
    <b-list-group class="list pb-2 px-2">
      <b-list-group-item
        to="/channel/programming"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img
            class="image-logo"
            src="~assets/user/icons/programming.svg"
          ></b-img>
        </div>
        <p class="item-holder">Programming</p>
      </b-list-group-item>
      <b-list-group-item
        to="/channel/mobile"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img class="image-logo" src="~assets/user/icons/mobile.svg"></b-img>
        </div>
        <p class="item-holder">Mobile Phone</p>
      </b-list-group-item>

      <b-list-group-item
        to="/channel/celebrity"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img
            class="image-logo"
            src="~/assets/user/icons/celebrity.svg"
          ></b-img>
        </div>
        <p class="item-holder">Celebrity & Movie</p>
      </b-list-group-item>

      <b-list-group-item
        to="/channel/gaming"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img class="image-logo" src="~assets/user/icons/gaming.svg"></b-img>
        </div>
        <p class="item-holder">Gaming</p>
      </b-list-group-item>

      <b-list-group-item
        to="/channel/history"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img
            class="image-logo"
            src="~assets/user/icons/history.svg"
          ></b-img>
        </div>
        <p class="item-holder">history</p>
      </b-list-group-item>

      <b-list-group-item
        to="/channel/health"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img class="image-logo" src="~assets/user/icons/health.svg"></b-img>
        </div>
        <p class="item-holder">Health</p>
      </b-list-group-item>

      <b-list-group-item
        to="/channel/technology"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img
            class="image-logo"
            src="~assets/user/icons/technology.svg"
          ></b-img>
        </div>
        <p class="item-holder">Technology</p>
      </b-list-group-item>

      <b-list-group-item
        to="/channel/designlibrary"
        class="d-flex align-items-center mylist"
      >
        <div class="image-holder">
          <b-img
            class="image-logo"
            src="~assets/user/icons/designlibrary.svg"
          ></b-img>
        </div>
        <p class="item-holder">Design Library</p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped >
.mylist,
span {
  font-size: 16px !important;
}
.chanel {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #343a40;
  color: white;
  border-radius: 7px;
}
.sideBar {
  overflow: hidden;
  background: #fff;
  /* box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px; */
  margin-bottom: 5px;
}

.sideBar.list {
  overflow: auto;
}
.mylist {
  border: none !important;
  /* margin-bottom: 5px; */
}
.image-holder {
  border-radius: 10px;
  text-align: center;
  padding: 8px;
  background-color: #e4e6eb;
}
.item-holder {
  margin: revert;
  padding-left: inherit;
}
.image-logo {
  height: 25px;
  width: 25px;
}
</style>