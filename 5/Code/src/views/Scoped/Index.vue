<template>
  <div>
    <div class="demo-block">
      <one-view-vue />
    </div>

    <div class="demo-block">
      <other-view-vue />
    </div>
  </div>
</template>

<script>
import OneViewVue from "./OneView.vue";
import OtherViewVue from "./OtherView.vue";
export default {
  components: { OneViewVue, OtherViewVue },
  data() {
    return {};
  },
};
</script>
