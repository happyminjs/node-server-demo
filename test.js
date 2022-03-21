const axios = require('axios')

let str = 'https://fangfe.58.com/screenshot/image/jpeg?testNN=1&vpw=750&selector=%23app&url=https%3A%2F%2Fftoy.m.58.com%2Factive%2F1620723084979%3FbrokerId%3D###%26isPic%3D1';
var urlArr = []
for (let i = 0; i < 6; i++){
  let tempStr = str.replace('###', i + 6000);
  urlArr.push(tempStr)
}

async function testApi(){
  let len = urlArr.length;
  let promiseArr = new Array(len);
  for(let i = 0; i < len; i++){
    promiseArr[i] = new Promise((resolve, reject) => {
      axios.get(urlArr[i]).then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
    })
  }
  return await allBack(promiseArr)
}

function allBack(promises){
  let len = promises.length
  let arr = new Array(len);
  let indexI = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      promises[i].then(res => {
        arr[i] = res;
        indexI++;
        if (indexI === len) {
          resolve(arr)
        }
      }, err => {
        reject(err)
      })
    }
  })
}

module.exports = {
  testApi
}


class Test{
  static map;
  constructor(){
    this.map = new Map();
  }

  static async getReq(key){
      this.map.set("key","value");

      //判断浏览器开启的标签页数。10>  请求url进map，


      let ret = await Test.getData();

      if(ret){
        res.send("成功");
        this.map.delete("key");
      }else{
        this.getData(key);

        //todo 连续请求3次 失败，放弃该请求
      }
  }

  static getData(){
    return new Promise(async(resolve,reject)=>{
      let ret = eventProxy.once(hashUrl, (ret) => {
          // waitFnObj[hashUrl] && waitFnObj[hashUrl]();
          flog.log('---onceCallBack---', pageSign, ret);

          return ret;
      });

      if(ret){
        resolve(true)
      }else{
        reject(false)
      }
    })
  }

}


async function a (){
  var a = await b();
  console.log(1, a)
}
async function b(){
  return new Promise((resolve, reject)=>{
    console.log(2)
    setTimeout(() => {
      resolve('assss');
    }, 2000);
  })
}
// a()

