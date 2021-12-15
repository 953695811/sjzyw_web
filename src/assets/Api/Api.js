import axios from 'axios'

const Api = {
  // 主页左侧列表接口
  navList: async () => {
    const { data } = await axios.get('../json/nav.json')
    return data
  },
  //   用户信息接口
  userInfo: async () => {
    const { data } = await axios.get('/json/userInfo.json')
    return data
  }
}
export default Api
