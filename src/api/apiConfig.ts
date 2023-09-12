const apiConfig = {
  dev: {
    hostUrl: "http://localhost:6004",
    notificationUrlSend: "http://localhost:4521",
    notificationUrlWrite: "http://localhost:5001",
    logReadUrl: "http://localhost:4003",
    logWriteUrl: "http://localhost:4003",
    authenUrl: "http://localhost:6002",
    serverUpload: "http://localhost:5001"
  },
  production: {
    hostUrl: "https://dev-subscription.mobiwork.vn",
    notificationUrlSend: "https://ms-readnotification.mobiwork.vn",
    notificationUrlWrite: "https://ms-writenotification.mobiwork.vn",
    logReadUrl: "http://localhost:4003",
    logWriteUrl: "http://localhost:4003",
    authenUrl: "https://dev-authentication.mobiwork.vn",
  },
};

export default apiConfig["dev"];
