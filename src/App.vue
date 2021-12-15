<template>
  <div class="app" v-cloak>
    <header>
      <div class="logo"></div>
      <div class="user_img">
        <img :src="userInfo.userImg" alt="" style="width: 100%; height: 100%" />
      </div>
      <div class="user_name">{{ userInfo.userName }}</div>
    </header>
    <main>
      <ul class="nav">
        <li v-for="item in navlist" :key="item.id" @click="goToPage(item)">
          {{ item.name }}
        </li>
      </ul>
      <div class="view">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: '',
  props: {
    // 组件参数 接收来自父组件的数据
  },
  components: {
    // 注册组件
  },
  created() {
    // 获取主屏导航按钮数据
    this.getNavList()
    // 获取用户信息
    this.getUserInfo()
  },
  mounted() {
    // 挂载后
  },
  data() {
    return {
      // 数据
      navlist: null,
      userInfo: {
        id: null,
        userName: null,
        age: null,
        sex: null,
        userImg: null
      }
    }
  },
  methods: {
    // 获取主屏导航按钮数据
    async getNavList() {
      let msg = await this.$Api.navList()
      if (msg.code === 0) {
        this.navlist = msg.data
      }
    },
    // 获取用户信息
    async getUserInfo() {
      let msg = await this.$Api.userInfo()
      if (msg.code === 0) {
        this.userInfo = msg.data
      }
    },
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
[v-cloak] {
  display: none;
}
.app {
  > header {
    height: 60px;
    background-color: rgb(202, 202, 202);
    position: relative;
    > .logo {
      width: 160px;
      height: 60px;
      background-color: rgb(170, 170, 170);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
    > .user_img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      right: 180px;
      top: 50%;
      transform: translate(0, -50%);
      background-color: #fff;
      overflow: hidden;
    }
    > .user_name {
      width: 80px;
      height: 60px;
      font-size: 14px;
      line-height: 60px;
      position: absolute;
      right: 90px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  > main {
    height: calc(100vh - 60px);
    display: flex;
    > .nav {
      width: 160px;
      height: calc(100vh - 60px);
      background-color: rgb(241, 241, 241);
      > li {
        line-height: 40px;
        padding-left: 20px;
        font-size: 14px;
        border-bottom: 1px solid rgb(224, 224, 224);
        cursor: pointer;
        &:hover {
          background-color: #fff;
        }
      }
    }
    > .view {
      width: calc(100vw - 160px);
      height: calc(100vh - 60px);
      background-color: rgb(66, 66, 66);
      overflow-y: auto;
    }
  }
}
</style>
