<template>
  <div class="home">
    <!-- 内容区域 -->
    我是首页
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'home',
  props: {
    // 组件参数 接收来自父组件的数据
  },
  components: {
    // 注册组件
  },
  created() {
    // 创建后
  },
  mounted() {
    // 挂载后
    this.$log('hhhh')
  },
  data() {
    return {
      // 数据
    }
  },
  methods: {
    // 方法
  },
  computed: {
    // 计算属性
  },
  filters: {
    // 过滤器
  }
}
</script>

<style lang="scss" scoped>
// 样式属性,阻止穿透
.home {
  height: 1000px;
  background-color: rgb(84, 90, 110);
}
</style>
