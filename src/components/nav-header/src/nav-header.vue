<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleClickCollapseBtn">
      <expand v-if="!isCollapse" />
      <fold v-else />
    </el-icon>
    <div class="content">
      <HyBreadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    UserInfo,
    HyBreadcrumb
  },
  emits: ['handleCollapse'],
  setup(props, { emit }) {
    const isCollapse = ref(false)
    const handleClickCollapseBtn = () => {
      isCollapse.value = !isCollapse.value
      emit('handleCollapse', isCollapse.value)
    }
    // 面包屑的数据: [{name: , path: }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      handleClickCollapseBtn,
      isCollapse,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  .el-icon {
    font-size: 26px;
    margin-right: 20px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
