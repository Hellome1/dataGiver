const fs = require('fs');

module.exports = {
  readJson(filePath) {
    return new Promise((resolve, reject) => {
      console.log('Read file, filePath:', `"${filePath}"`);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          reject(err);
          return;
        }
        // 解析 JSON 数据
        try {
          const jsonData = JSON.parse(data);
          console.log('Read file success, jsonData:', jsonData);
          resolve(jsonData);
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
          reject(parseError);
        }
      })
    })
  },
  saveJson(filePath, jsonstr) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, jsonstr, 'utf8', (err) => {
        if (err) {
          console.error('Error writing the file:', err);
          reject(err)
          return;
        }
        const msg = 'JSON file has been saved.';
        console.log(msg);
        resolve(msg);
      });
    })
  }
}