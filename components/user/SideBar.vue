<template>
  <div class="sideBar mb-4">
    <h5 class="text-center chanel">Channel</h5>
    <b-list-group class="list">
      <b-list-group-item to="/channel/programming" class="mylist">
        <b-icon icon="code" scale="2"></b-icon>
        <span style="margin-left:15px">Programming</span>
      </b-list-group-item>
      <b-list-group-item to="/channel/mobile" class="mylist">
        <b-icon icon="phone" scale="2"></b-icon>
        <span style="margin-left:15px">Mobile Phone</span>
      </b-list-group-item>

      <b-list-group-item to="/channel/celebrity" class="mylist">
        <b-icon icon="camera-video-fill" scale="2"></b-icon>
        <span style="margin-left:15px">Celebrity & Movie</span>
      </b-list-group-item>

      <b-list-group-item to="/channel/gaming" class="mylist">
        <b-icon icon="controller" scale="2"></b-icon>
        <span style="margin-left:15px">Gaming</span>
      </b-list-group-item>

      <b-list-group-item to="/channel/history" class="mylist">
        <b-icon icon="cone-striped" scale="2"></b-icon>
        <span style="margin-left:15px">History</span>
      </b-list-group-item>

      <b-list-group-item to="/channel/health" class="mylist">
        <b-icon icon="moon" scale="2"></b-icon>
        <span style="margin-left:15px">Health</span>
      </b-list-group-item>

      <b-list-group-item to="/channel/technology" class="mylist">
        <b-icon icon="gear-wide-connected" scale="2"></b-icon>
        <span style="margin-left:15px">Technology</span>
      </b-list-group-item>

      <b-list-group-item to="/channel/designlibrary" class="mylist">
        <b-icon icon="book-half" scale="2"></b-icon>
        <span style="margin-left:15px">Design Library</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "SideBar"
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
  margin-bottom: 5px;
}
</style>