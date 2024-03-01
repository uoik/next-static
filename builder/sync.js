/**
 * 同步SKU JSON数据
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const skuJson = require('./sku.json');
const { rebuild } = require('./utils');
const { jsonDir, GITHUB_BASE_URL } = require('../config');

module.exports = async () => {
  // 清空md文件夹
  rebuild(jsonDir);

  try {
    // 请求SKU JSON数据
    const requests = skuJson.map((sku) => axios(`${GITHUB_BASE_URL}/shein/product/${sku}.json`));
    const response = await Promise.allSettled(requests);
    response.forEach(async (result, i) => {
      const sku = skuJson[i];
      // 请求成功
      if (result.status === 'fulfilled') {
        const data = result.value.data;
        fs.writeFile(path.join(jsonDir, `${sku}.json`), JSON.stringify(data, null, 2), 'utf8', (err) => {
          if (err) {
            console.error(`写入文件 ${sku} 失败:`, err);
          } else {
            console.log(`已将数据写入文件 ${sku}`);
          }
        });
      } else {
        console.error(`请求SKU ${sku} 失败`);
      };
    });
  } catch (e) {
    console.error('发生错误: ', e);
  };
};