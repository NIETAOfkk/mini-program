import request from "./network.js"

// 首页数据
export function getMultiData() {
  return request({
    url: "/home/multidata"
  })
}