const { readJson, saveJson } = require('./utils')

module.exports = {
  use(app) {
    app.use('/MES0001', (req, res) => {
      let { hosPatRegNo } = req.query;
      console.log('----MES0001---- hosPatRegNo:', hosPatRegNo)
      readJson('./datas/MES0001.json').then(jsonData => {
        let data = jsonData.filter(itm => itm.hosPatRegNo === hosPatRegNo);
        res.send({ code: 200, data: data, msg: '查询成功' })
      }).catch(err => {
        res.send({ code: 400, msg: '查询失败', error: err })
      })
    })

    app.use('/MES0002', (req, res) => {
      readJson('./datas/MES0002.json').then(jsonData => {
        res.send({ code: 200, data: jsonData, msg: '查询成功' })
      }).catch(err => {
        res.send({ code: 400, msg: '查询失败', error: err })
      })
    })
    
    app.use('/MES0005', (req, res) => {
      const body = req.body
      console.log('mes0005 body:', body)
      readJson('./datas/MES0005.json').then(jsonData => {
        res.send({ code: 200, data: jsonData, msg: '查询成功' })
      }).catch(err => {
        res.send({ code: 400, msg: '查询失败', error: err })
      })
    })
  }
}
