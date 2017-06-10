<template>
  <div class="layout-content-main">
    <div class="layout-content-main-inner">
      <div class="main-title">
        <h1>{{ title }}</h1>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminContent',

  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
@import '~@/styles/common'

.layout-content-main {
  absolute: left 230px top 70px right 10px bottom 40px;
  // height: 100%;
  // margin-left: 220px;
  overflow: auto;
}

.layout-content-main-inner{
  padding: 20px 30px;
}

.main-title {
  border-bottom: 1px solid #DDDEE1;

  h1 {
    font-size: 22px;
    font-weight: normal;
    padding-bottom: 5px;
  }
}
</style>
