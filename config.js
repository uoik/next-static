const path = require('path');

const jsonDir = path.resolve(__dirname, './json');
const appDir = path.resolve(__dirname, './src/app');

const GITHUB_BASE_URL = 'https://sunzi-cn.oss-cn-hangzhou.aliyuncs.com/customeow-beta';

module.exports = {
  jsonDir,
  appDir,
  GITHUB_BASE_URL
}