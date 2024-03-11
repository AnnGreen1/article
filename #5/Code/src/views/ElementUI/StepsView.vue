<template>
  <div class="StepsView">
    <h1>组件库之外的原生元素可以被轻松选中</h1>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.StepsView {
  h1 {
    color: pink;
  }
  ::v-deep .el-step__title{
    color:hotpink;
  }
}
</style>
