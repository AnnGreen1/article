<template>
  <div class="RadioView">
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
.RadioView {
  ::v-deep() .el-radio__label {
    color: hotpink;
  }
  ::v-deep() .is-checked {
    .el-radio__inner {
        background:url(~@/assets/choose.png);
        background-size:14px 14px;
        background-repeat:no-repeat;
        border: none;
        // outline:1px solid hotpink;
        &::after{
            display:none;
        }
    }
  }
}
</style>
