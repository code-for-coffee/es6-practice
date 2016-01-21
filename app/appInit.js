function startup() {
    // code to do on connection
    // perhaps load db?
    // perhaps load cache?
    // perhaps seed from json?
    // so many posibilities!
    console.log('eh - the app is starting up on port ');
    {
        let mySecretApiKey = '42';
        //someCodeToSubmitToApiForSecurity
        console.log(mySecretApiKey);
    }
    return true;
}

module.exports = startup();