<template>
  <div>
    <div v-if="$fetchState.pending"></div>
    <div v-else>
      <b-row>
        <b-col cols="12" sm="6" md="12" lg="12" xl="12">
          <b-list-group>
            <b-list-group-item class="mb-4">
              <div class="d-flex">
                <div class="image-section mr-4">
                  <b-img
                    height="102"
                    width="102"
                    class="rounded"
                    src="~assets/user/dummyImages/1.jpg"
                  ></b-img>
                </div>
                <div class="text-section">
                  <h1 class="text-title pb-3 pt-1">
                    Giggles Computer Funtime for Baby: My Musical World
                  </h1>
                  <p class="text-description">
                    In Giggles Computer Funtime for Baby: My Musical World,
                    share the joy of music, musical instruments, and music
                    concepts with your little one! In Giggles Computer Funtime
                    for Baby: My Musical World, share the joy of music, musical
                    instruments, and music concepts with your little one! In
                    Giggles Computer Funtime for Baby: My Musical World, share
                    the joy of music, musical instruments, and music concepts
                    with your little one! In Giggles Computer Funtime for Baby:
                    My Musical World, share the joy of music, musical
                    instruments, and music concepts with your little one!
                  </p>
                </div>
              </div>
            </b-list-group-item>

            <b-list-group-item class="mb-4">
              <div class="d-flex">
                <div class="image-section mr-4">
                  <b-img
                    height="102"
                    width="102"
                    class="rounded"
                    src="~assets/user/dummyImages/1.jpg"
                  ></b-img>
                </div>
                <div class="text-section">
                  <h1 class="text-title pb-3">
                    Giggles Computer Funtime for Baby: My Musical World
                  </h1>
                  <p class="text-description">
                    In Giggles Computer Funtime for Baby: My Musical World,
                    share the joy of music, musical instruments, and music
                    concepts with your little one! In Giggles Computer Funtime
                    for Baby: My Musical World, share the joy of music, musical
                    instruments, and music concepts with your little one! In
                    Giggles Computer Funtime for Baby: My Musical World, share
                    the joy of music, musical instruments, and music concepts
                    with your little one!
                  </p>
                </div>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {}
};
</script>

<style scoped>
.text-title {
  font-size: 24px;
  font-weight: 900;
  font-family: "ars-maquette-web", sans-serif;
}
.text-description {
  font-size: 12px;
  line-height: 1.5;
  font-family: "ars-maquette-web", sans-serif;
}
</style>