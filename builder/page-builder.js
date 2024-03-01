/**
 * 生成nextjs识别的pages
 */
const fs = require('fs');
const path = require('path');
const { jsonDir, appDir } = require('../config');

module.exports = async () => {
  const jsonPaths = fs.readdirSync(jsonDir);

  const convertJsonToJSX = (jsonPath) => {
    const jsonContent = fs.readFileSync(path.join(jsonDir, jsonPath)).toString();

    // 解析文件路径
    const fileInfo = path.parse(jsonPath);
    // 获取文件名
    const fileName = fileInfo.name;

    if (fileName) {
      // 页面的tsx
      const pageContent = `
      export default function Page() {
        const data = ${jsonContent};

        return (
          <div className="w-full h-full border bg-green-600">{data.customizerId}</div>
        );
      }
    `

      // 检查目录是否存在，如果不存在则创建目录
      const directoryPath = path.join(appDir, fileName);
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
      };
      // 写入文件
      fs.writeFileSync(path.join(directoryPath, 'page.tsx'), pageContent, 'utf8');
    }
  }

  const tasks = jsonPaths.map(convertJsonToJSX)
  await Promise.all(tasks)
}
