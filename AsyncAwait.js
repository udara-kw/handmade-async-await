const fetch = require("node-fetch");

function doWhenDataReceived(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  const data = yield fetch(
    "https://twitter.com/JavaScript/status/1329470364401819649"
  ).then(doWhenDataReceived);
  console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();
