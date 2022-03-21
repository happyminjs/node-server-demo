const puppeteer = require('puppeteer-core')
const { Cluster } = require('puppeteer-cluster')
const path = require('path')

class ChromiumPool{
  constructor(){
    this.opts = {
      executablePath: path.resolve(__dirname, './chrome-mac/Chromium.app/Contents/MacOS/Chromium'),
      headless: true
    }
    this.cluster = null
    this.taskQueue = [
      // todo
    ]
    this.init()
  }
  async execute(url, params){
    const task = {type: 'image', url, imageOpts: params}
    return await this.cluster.execute(task)
  }
  async init(){
    this.cluster = await Cluster.launch({
      puppeteer,
      maxConcurrency: 2,
      puppeteerOptions: this.opts,
      timeout: 40000
    })
    await this.cluster.task(async ({page, data}) => {
      await page.setDefaultNavigationTimeout(0);
      return this.execTaskQueue(page, data);
    })
  }
  async execTaskQueue(page, data){
    let res = null
    for(let taskFunc of this.taskQueue){
      res = await taskFunc(page, data)
      if (res) return res;
    }
    return null
  }
}

module.exports = new ChromiumPool();