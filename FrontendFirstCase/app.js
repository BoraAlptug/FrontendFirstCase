"use strict";
class API {
    constructor(connectionUrl) {
        this.rightUrl = 'url';
        this.loadingStates = false;
        this.connectionUrl = '';
        this.connectionStatus = false;
        this.connectionUrl = connectionUrl;
    }
    setConnection() {
        if (this.rightUrl === this.connectionUrl)
            this.connectionStatus = true;
        return this.connectionStatus;
    }
    requesloadingStates() {
        if (this.connectionStatus)
            this.loadingStates = true;
        return this.loadingStates;
    }
    getData() {
        if (this.loadingStates) {
            return 'dummyData';
        }
        return 'IsNotData';
    }
}
let connectionUrl = '';
let errorMassege = 'Connection Failed';
const getData = (connectionUrl) => {
    return new Promise((resolve, reject) => {
        const request = new API(connectionUrl);
        if (request.setConnection() && request.requesloadingStates()) {
            const data = request.getData();
            resolve(data);
        }
        else {
            reject(errorMassege);
        }
    });
};
getData(connectionUrl).then(data => {
    console.log(data);
}).catch((reject => {
    console.log(reject);
}));
//# sourceMappingURL=app.js.map