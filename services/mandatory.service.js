/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password', 'firstname', 'lastname'],
        login: ['email', 'password'],
        post: ['title', 'body'],
        comment: ['postId', 'content'],
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//