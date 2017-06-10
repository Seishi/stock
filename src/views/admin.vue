<template>
  <AdminLayout>
    <transition name="slide-left">
      <router-view></router-view>
    </transition>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin-layout'

export default {
  name: 'Admin',

  components: {
    AdminLayout
  }
}
</script>

<style lang="stylus">
@import '~@/styles/common'
</style>
