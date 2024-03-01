const sync = require('./sync');
const pageBuilder = require('./page-builder');

const start = async () => {
  // 生成JSON数据
  // await sync();

  // 根据JSON生成page页面
  await pageBuilder();
}
start()