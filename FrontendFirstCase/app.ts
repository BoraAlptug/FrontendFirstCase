/*----------------------SampleAPI------------------- */

class API {

    readonly rightUrl ='url'            //--> Api url
    private loadingStates = false;      //--> Loading State
    private connectionUrl = '';         //--> Request url
    private connectionStatus = false;   //--> Connection/Ready State

    constructor(connectionUrl: string) {
        this.connectionUrl = connectionUrl;
    }
    /* Connection, ReadyState, Data Methods */

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
        if (this.loadingStates) 
            return 'dummyData';
        return 'IsNotData'
    }
    /* -------------------------------------------- */

}
/*-------------------------------------------------*/

let rightConnectionUrl = 'url';         /*--> Defininning right url*/
let wrongConnectionUrl = 'url////';     /*--> Defininning wrong url*/
let connectionUrl = rightConnectionUrl; /*--> Defininning URL used to connect*/
let errorMassage = 'Connection Failed'  /*--> Error message */


/*-----------------------------------Promise Block------------------------------ */
const getData = (connectionUrl: string)=>{

    return new Promise((resolve, reject) => {/* Creating Promise instance */
        const request = new API(connectionUrl); /* Connecting API  */
        
        if (request.setConnection() && request.requesloadingStates()) { /*Success Case */
                 const data = request.getData();
                 resolve(data);
             } else /*Failure  Case */
             {
                 reject(errorMassage);
             }
             

         })

};
/*---------------------------------------------------------------------------- */

/*-----------------------------------*/
getData(connectionUrl).then(data => { /* If the promise returns with resolve*/
    console.log(data);
}).catch((reject => {  /* If the promise returns with reject*/
    console.log(reject);
}));
/*-----------------------------------*/

