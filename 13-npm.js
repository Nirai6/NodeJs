//local dependency : npm i <packageName>

//global dependency : npm install -g <packageName>

//package.json - manifest file (stores important info abount project/package)
//manual approach (create package.json in the root, create properties etc)

const _ = require("lodash")

const items = [1, 2, [3, [4, [5, 6, 7]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
