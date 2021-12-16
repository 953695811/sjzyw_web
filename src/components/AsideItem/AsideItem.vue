<template>
  <div class="active_btn">
    <div class="aside" v-for="item in asideChildren" :key="item.id">
      <p @click="goToPage(item)">{{ item.name }}</p>
      <div class="box" v-if="item.children">
        <AsideItem :asideChildren="item.children"></AsideItem>
      </div>
    </div>
  </div>
</template>

<script>
import AsideItem from './AsideItem'
export default {
  name: 'AsideItem',
  props: {
    asideChildren: {
      type: Array
    }
  },
  components: {
    AsideItem
  },
  methods: {
    // 界面跳转
    goToPage(item) {
      this.$router.push({
        path: item.path,
        query: {
          name: item.name
        }
      })
    }
  },
  created() {}
}
</script>

<style scoped="scoped" lang="scss">
.active_btn {
  display: none;
  > .aside {
    margin-left: 10px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    &:hover > div > div {
      display: block;
    }
    > p {
      border-bottom: 1px solid rgb(224, 224, 224);
    }
    > p:hover {
      background-color: #fff;
    }
  }
}
</style>
