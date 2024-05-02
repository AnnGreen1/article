<template>
  <div>
    <div class="demo-block">
      <one-less-vue />
    </div>

    <div class="demo-block">
      <other-less-vue />
    </div>
  </div>
</template>

<script>
import OneLessVue from "./OneLess.vue";
import OtherLessVue from "./OtherLess.vue";
export default {
  components: { OneLessVue, OtherLessVue },
  data() {
    return {};
  },
};
</script>