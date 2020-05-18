// components/w-goodslist/w-goodslist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentL: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换tab栏
    switchTab(event) {
      const index = event.currentTarget.dataset.index

      this.triggerEvent('switchT', {index: index})
    },
  }
})
