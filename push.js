var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BDkoo73CcpB4glTMWWSWVvybYS4SCa9mGIhrvze5xJMRhqnjsDFsX50uonSluEljkZjQGLUjhvg69iTaJP1Yc68",
  privateKey: "0CtEYF1SL_pRRLLRseH9At9KiY62I7W6fAGUnBsR8vk",
};

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dl_1l8-4RGA:APA91bHDvT5JgcNMPkM2sbrlLOCaTw08tQtbEB5sPp-AUjv3qH028PFG5Kj_rp4nkWxmK5Vv12B3pqXlBd3PwtGOcNmSHjHqCRG1ZVgpQoEDnjbYtZ-4gQh3wCSNmvyj3DnY8P9cy06u","expirationTime":null,"keys":{"p256dh":"BPOLkpFgLFGbmXsZkoM89k3eV2becDmeqaBurR_Pq3OlHuTEdwPCeMpBVZ7ARd9XywVq2i9ihBSZpnz7ib0nfFk","auth":"Sehpit2dwFg-GFFR72IoXg"}}
push.sendNotification(sub, 'test message');