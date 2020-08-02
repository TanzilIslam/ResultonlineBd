<template>
  <div class="sideBar mb-4">
    <h5 class="text-center chanel">Channel</h5>
    <b-list-group class="list pb-2 px-3">
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
.mylist:hover {
  color: #212529 !important;
  background-color: #e2e6ea !important;
  border-radius: 8px;
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
  margin-bottom: 5px;
}

.sideBar.list {
  overflow: auto;
}
.mylist {
  border: none !important;
  font-size: 16px !important;
  padding: 0px !important;
  /* margin-top: 15px; */
  margin-bottom: 15px;
}
.image-holder {
  border-radius: 10px;
  text-align: center;
  padding: 8px;
  background-color: #e4e6eb;
}
.item-holder {
  margin-left: 20px;
  margin-top: 10px;
}
.image-logo {
  height: 30px;
  width: 30px;
}
</style>