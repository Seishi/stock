<template>
  <div class="layout-admin">
    <div class="layout-header">
      <Menu mode="horizontal" theme="primary" active-name="1">
        <div class="layout-logo"></div>
        <!-- <div class="layout-nav">
          <Menu-item name="1">
            <Icon type="ios-navigate"></Icon>
            导航一
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad"></Icon>
            导航二
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics"></Icon>
            导航三
          </Menu-item>
          <Menu-item name="4">
            <Icon type="ios-paper"></Icon>
            导航四
          </Menu-item>
        </div> -->
      </Menu>
    </div>
    <div class="layout-content">
      <div class="layout-content-sidebar">
        <Menu :active-name="activeName" width="auto" :open-names="openNames" @on-select="onMenuItemSelect">
          <Submenu v-for="menu in nav" :key="menu.name" :name="menu.name">
            <template slot="title">
              <Icon :type="menu.icon"></Icon>
              {{ menu.label }}
            </template>
            <Menu-item v-for="sub in menu.subs" :key="sub.name" :name="sub.name">{{ sub.label }}</Menu-item>
          </Submenu>
        </Menu>
      </div>
      <slot></slot>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>
  </div>
</template>

<script>
const nav = [{
  label: '产品管理',
  name: '/products',
  icon: 'star',
  subs: [{
    label: '产品列表',
    name: '/products/list'
  }, {
    label: '产品设置',
    name: '/products/settings'
  }, {
    label: '产品分析',
    name: '/products/analyze'
  }]
}, {
  label: '库存管理',
  name: 'stock',
  icon: 'cube',
  subs: [{
    label: '入库记录',
    name: '/stock/records'
  }, {
    label: '库存分析',
    name: '/stock/analyze'
  }]
}, {
  label: '销售管理',
  name: '/sales',
  icon: 'bag',
  subs: [{
    label: '销售记录',
    name: '/sales/records'
  }, {
    label: '销售人员',
    name: '/sales/staffs'
  }, {
    label: '销售分析',
    name: '/sales/analyze'
  }]
}]

export default {
  name: 'AdminLayout',

  data () {
    return {
      nav,
      openNames: [],
      activeName: ''
    }
  },

  created () {
    for (let i = 0, navLen = this.nav.length; i < navLen; i++) {
      let subs = this.nav[i].subs
      for (let j = 0, subsLen = subs.length; j < subsLen; j++) {
        if (this.$route.path.indexOf(subs[j].name) >= 0) {
          this.activeName = subs[j].name
          break
        }
      }
    }
    // this.activeName = this.nav[0].subs[0].name
    this.openNames = this.nav.map(item => item.name)
  },

  methods: {
    onMenuItemSelect (name) {
      // console.log(name)
      this.$router.push(`/admin${name}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/common'

.layout-admin {
  height: 100%;
  background: #f5f7f9;
  position: relative;
  padding: 70px 10px 40px;
}
.layout-header {
  absolute: left top;
  width: 100%;
}
.layout-logo {
  width: 180px;
  height: 30px;
  background: rgba(255, 255, 255, .2);
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
}
.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  height: 100%;
  background: #fff;
  border-radius: 4px;
}
.layout-content-sidebar {
  float: left;
  position: relative;
  size: 220px 100%;
  overflow: auto;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #dddee1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
}
.layout-copy {
  absolute: left bottom;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 20px;
  padding: 10px 0;
  color: #9ea7b4;
}
</style>
