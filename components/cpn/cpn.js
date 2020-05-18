// components/cpn/cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 10
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increament(event) {
      console.log("-----内部", event)
      this.triggerEvent('increamentData', {"name": "tao"})
    },
    inc(number) {
      this.setData({
        num: this.data.num + number
      })
    }
  },
  // 组件配置
  options: {
    multipleSlots: true
  }
})
