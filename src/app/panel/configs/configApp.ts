const consts = new function () {
    const myThis = this;
    let server_api_url = 'http://api.govid19.in'; // LOCAL SERVER_API_URL

    myThis.SERVER_API_URL = server_api_url;
};

export const configApp = Object.freeze(consts);
