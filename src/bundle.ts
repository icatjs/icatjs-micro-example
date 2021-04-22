// @ts-nocheck
import { registerSubapps, start } from '@icatjs/micro';
import { markMan } from 'mark-man';

markMan.init({
  keywords: ['平台', '腾讯'],
  getDescription: (k) => `自定义描述 ${k}`,
});

/* 
// <script src="https://unpkg.com/mark-man@0.0.1/lib/index.js"></script>
// 直接引用脚本，使用下面的方式调用插入。因为 window.markMan = { markMan, default: MarkMan }

markMan.markMan.init({
  keywords: ['平台', '腾讯'],
  getDescription: (k) => `自定义描述 ${k}`,
});
*/

registerSubapps([
  {
    name: 'tx',
    entry: 'https://open.tencent.com/',
    rules: [{ rule: '/' }],
  },
]);

start();
