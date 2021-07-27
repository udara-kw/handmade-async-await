const fetch = require("node-fetch");

function doWhenDataReceived(data) {
  returnNextElement.next();
}

function *createFlow() {
  const data = yield fetch("https://twitter.com/JavaScript/status/1329470364401819649");
  console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();
console.log(futureData);
//futureData.then(doWhenDataReceived);
