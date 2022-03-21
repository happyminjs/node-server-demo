const http = require('http')
const fs = require('fs')
const express = require('express')

const app = express();
const port = 3001

const {testApi} = require('./test');
const chromiumPool = require('./chromePic')

app.all('/', async(req, res) => {
  res.send({
    code: 0,
    msg: 'success'
  })
  // testApi().then(result => {
  //   console.log('result result result', result[0])
  //   res.send(result)
  // })
})
function corsSet(res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
}
app.get('/slider/list', async(req, res) => {
  corsSet(res)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500);
  })
  res.send({
    code: 0,
    msg: 'success',
    data: [
      {url: 'https://img.alicdn.com/imgextra/i1/6000000006900/O1CN01xIH5gP20qFab5tOHP_!!6000000006900-0-lubanimage.jpg'},
      {url: 'https://img.alicdn.com/imgextra/i1/36/O1CN01TPNKY31C8WzeTTcn4_!!36-0-luban.jpg'},
      {url: 'https://img.alicdn.com/imgextra/i2/6000000007736/O1CN01BxHyKC2718hQ2ILqO_!!6000000007736-0-lubanimage.jpg'},
      {url: 'https://gtms04.alicdn.com/tps/i4/TB1pgxYJXXXXXcAXpXXrVZt0FXX-640-200.jpg'}
    ]
  })
})
let lessonOffset = 0;
app.get('/lesson/list', async(req, res) => {
  corsSet(res);
  lessonOffset = lessonOffset + 5;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500);
  })
  res.send({
    code: 0,
    msg: 'success',
    data: {
      hasMore: true,
      offset: lessonOffset,
      list: [
        {
          title: 'React课程',
          video: 'http://img.sdf.mp4',
          poster: '//gw.alicdn.com/bao/uploaded/i2/2326916864/O1CN01KS9Nze20ZlK7IdE9W_!!2326916864.jpg_320x320q90.jpg_.webp',
          category: 1,
          price: 10
        },
        {
          title: 'React课程',
          video: 'http://img.sdf.mp4',
          poster: '//gw.alicdn.com/bao/uploaded/i2/50983440/TB2mPCrXEziFuJjSZPhXXc5JXXa_!!50983440.jpg_320x320q90.jpg_.webp',
          category: 1,
          price: 10
        },
        {
          title: 'React课程',
          video: 'http://img.sdf.mp4',
          poster: '//gw.alicdn.com/bao/uploaded/i2/50983440/TB2mPCrXEziFuJjSZPhXXc5JXXa_!!50983440.jpg_320x320q90.jpg_.webp',
          category: 1,
          price: 103
        },
        {
          title: 'React课程',
          video: 'http://img.sdf.mp4',
          poster: '//gw.alicdn.com/bao/uploaded/i2/50983440/TB2mPCrXEziFuJjSZPhXXc5JXXa_!!50983440.jpg_320x320q90.jpg_.webp',
          category: 1,
          price: 152
        },
        {
          title: 'React课程',
          video: 'http://img.sdf.mp4',
          poster: '//gw.alicdn.com/bao/uploaded/i2/50983440/TB2mPCrXEziFuJjSZPhXXc5JXXa_!!50983440.jpg_320x320q90.jpg_.webp',
          category: 1,
          price: 244
        },
      ]
    }
  })
})

// let url = 'https://ftoy.m.58.com/active/1620723084979?brokerId=5000&isPic=1'
// app.get('/pic', async(req, res) => {
//   let image = await chromiumPool.execute(url, {
//     vpw: 750,
//     selector: decodeURIComponent('#app')
//   })
//   // console.log('image image image: ', image)
//   res.send(image)
// })

app.listen(port, () => {
  console.log('node demo app listening at ')
})


