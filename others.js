const { readJson, saveJson } = require('./utils')

module.exports = {
  use(app) {
    app.post('/ifpool/save', (req, res) => {
      const body = req.body
      console.log('ifpool save');
      console.log(body)
      saveJson('./save/ifpool.json', JSON.stringify(body.value || null, null, 2)).then(msg => {
        res.send({ code: 200, msg: '保存成功' });
      }).catch(err => {})
    })
    
    app.get('/ifpool/get', (req, res) => {
      readJson('./save/ifpool.json').then(jsonData => {
        res.send({ code: 200, data: jsonData, msg: 'success' });
      }).catch(err => {
        res.send({ code: 400, msg: '查询失败', error: err })
      })
    })
    
    app.get('/ifpool/delete', (req, res) => {
      saveJson('./save/ifpool.json', '[]').then(msg => {
        res.send({ code: 200, msg: '删除成功' })
      }).catch(err => {
        res.send({ code: 400, msg: '删除失败', error: err })
      })
    })
    
    app.get('/ruleList', (req, res) => {
      const { role, code } = req.query;
      readJson('./save/rulename.json').then(jsonData => {
        let data = jsonData.filter(itm => (itm.role === role && itm.code === code)).map(itm => itm.rulename);
        res.send({ code: 200, data, msg: 'success' })
      }).catch(err => {
        res.send({ code: 400, msg: '查询失败', error: err })
      })
    })
    
    app.post('/ruleList/save', (req, res) => {
      const body = req.body
      console.log('ruleList save')
      saveJson('./save/rulename.json', JSON.stringify(body.value || null, null, 2)).then(msg => {
        res.send({ code: 200, msg: '保存成功' })
      }).catch(err => {
        res.send({ code: 200, msg: '保存失败', error: err })
      })
    })
  }
}