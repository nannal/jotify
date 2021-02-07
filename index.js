fetch = require("node-fetch")


gotify = {
    url: "",
    token: "",
    priority: 5,
    send: (title,message, priority) => {
        if (gotify.url == ""){
            throw new Error("gotify url value empty, please use:  gotify.url == 'https://gotify.mydomain.tld'")
        } else if(gotify.token == "") {
            throw new Error("gotify url value empty, please use:  gotify.token == 'xyzxyz'")
        } else if(message === undefined) {
            throw new Error("gotify message value was undefined")
        } else if(title === undefined) {
            throw new Error("gotify title value was undefined")
        } else {
            if (!priority){
                priority = gotify.priority
            }
    
            fetch(gotify.url+'/message?token='+gotify.token, { 
            method: 'POST', 
            body: 'title='+title+"&message="+message+"&priority="+priority ,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
        }
    }
}

module.exports = gotify