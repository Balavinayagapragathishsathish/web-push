var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BDkoo73CcpB4glTMWWSWVvybYS4SCa9mGIhrvze5xJMRhqnjsDFsX50uonSluEljkZjQGLUjhvg69iTaJP1Yc68",
  privateKey: "0CtEYF1SL_pRRLLRseH9At9KiY62I7W6fAGUnBsR8vk",
};

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};
push.sendNotification(sub, 'test message');