/**
 * 工具方法
 */
const fs = require('fs');

function delDir(dir) {
  let files = [];
  if (fs.existsSync(dir)) {
    files = fs.readdirSync(dir);
    files.forEach((file) => {
      const curPath = `${dir}/${file}`;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); // 递归删除文件夹
      } else {
        fs.unlinkSync(curPath); // 删除文件
      }
    });
    fs.rmdirSync(dir);
  }
}

function rebuild(dir) {
  // 清空md文件夹
  if (fs.existsSync(dir)) {
    delDir(dir);
  }
  // 重新创建md文件夹
  fs.mkdirSync(dir);
};

module.exports = {
  rebuild
};