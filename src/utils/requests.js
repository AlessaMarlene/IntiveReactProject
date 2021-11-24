import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://parseapi.back4app.com',
    timeout: 3000,
    headers: {
        'X-Parse-Application-Id':'9qVWGjkuoNnK95daXbfY6GT1HzSo7fa0DpCIgMn2',
        'X-Parse-REST-API-Key':'Ur88jGOo1FZ1sU3jP8RFKYfqUJ0KvOJohHi0TyB3',
        'X-Parse-Revocable-Session':'1'
    }
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

async function singUpUser(username, password){
    const response = await instance.post('/users', {
        'username':username,
        'password':password
    });

    return {
        username:username,
        tokenSession: response.data.sessionToken,
        roles: []
    }
}

async function singInUser(username, password){
    const response = await instance.get(`/login?username=${username}&password=${password}`);
    const userRoles = await getUserRole(response.data.objectId);
    
    return {
        username:username,
        tokenSession: response.data.sessionToken,
        roles: userRoles
    }
}

async function getUserRole(userId){
    const userObj = {
        "users":{
            "__type":"Pointer",
            "className":"_User",
            "objectId":userId
        }
    }

    const response = await instance.get(`/roles?where=${JSON.stringify(userObj)}`);
    const userRoles = response.data.results.map(role => role.name);
    return userRoles;
}

async function sendNewArticle(title, body, score, creator, sessionToken){
    await instance.post('/classes/Articles', {
        'Title': title,
        'Body': body,
        'Score': score,
        'Creator': creator
    },
    {
        headers:{'X-Parse-Session-Token':`${sessionToken}`}
    })
}

async function getAllArticles(){
    const response = await instance.get('/classes/Articles');
    return response.data.results;
}

async function getArticleById(id){
    const articleObj = {objectId:id};
    const response = await instance.get(`/classes/Articles?where=${JSON.stringify(articleObj)}`);
    return response.data.results[0];
}

async function sendNewCommentToArticle(comment, articleId){
    const commentToSend = {
        'Body': comment,
        'articleId':{
            '__type':'Pointer',
            'className':'Articles',
            'objectId':articleId
        }
    }
    
    await instance.post('/classes/Comments', JSON.stringify(commentToSend));
}

async function commentsByArticleId(articleId){
    const commentObj = {
        "articleId":{
            "__type":"Pointer",
            "className":"Articles",
            "objectId":articleId
        }
    }

    const response = await instance.get(`/classes/Comments?where=${JSON.stringify(commentObj)}`);
    return response.data.results;
}

async function deleteArticle(articleId, sessionToken){
    await instance.delete(`/classes/Articles/${articleId}`, {
        headers:{'X-Parse-Session-Token':`${sessionToken}`}
    });
}

export {
    singUpUser, 
    singInUser, 
    sendNewArticle, 
    getAllArticles, 
    getArticleById, 
    sendNewCommentToArticle,
    commentsByArticleId,
    deleteArticle
}