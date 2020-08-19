<template>
  <div>
    <div class="d-flex justify-content-center">
      <b-img
        class=""
        @click="shareToFb"
        style="cursor: pointer;"
        height="40"
        width="40"
        src="~/assets/user/icons/fb.png"
      >
      </b-img>
      <b-img
        class="mr-4 ml-4"
        @click="shareToTw"
        style="cursor: pointer;"
        height="40"
        width="40"
        src="~/assets/user/icons/tw.png"
      >
      </b-img>
      <b-img
        class=""
        @click="shareToIn"
        style="cursor: pointer;"
        height="40"
        width="40"
        src="~/assets/user/icons/insta.png"
      >
      </b-img>
    </div>
    <b-input-group size="sm" class="pt-4">
      <b-form-input :value="place"></b-form-input>
      <b-input-group-append>
        <b-img
          style="cursor: pointer;"
          height="31"
          width="31"
          src="~/assets/user/icons/copy.png"
          @click="copyLink"
          class="rounded "
        ></b-img>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  props: {
    pathUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      modalActive: this.activeModal,
      place: `http://test.resultonlinebd.com${this.pathUrl}`
      //   active: this.activeModal
    };
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(this.place);
      const noti = this.$vs.notification({
        duration: 4000,
        color: "#4a5153",

        progress: "auto",
        title: "Copied",
        text: "This article link is  copied."
      });
    },
    shareToFb() {
      window.open(
        "https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com" +
          this.pathUrl,
        "_blank"
      );
    },
    shareToTw() {
      window.open(
        "https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com" +
          this.pathUrl,
        "_blank"
      );
    },
    shareToIn() {
      window.open(
        "https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com" +
          this.pathUrl,
        "_blank"
      );
    }
  },
  mounted() {},
  computed: {
    // modalActive() {
    //   return this.activeModal;
    // }
  }
};
</script>

<style></style>
