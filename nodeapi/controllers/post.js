const Post = require('../model/post');

exports.getposts =(req, res)=>{
    res.json({
        posts: [
            {title: 'first post'},
            {title: 'second post'}
        ]
    });
}

//getting post from model post to create new post
// check in postman to post new title and body
// 1. post 2. /post  3. body+raw+json then type title and body 4. click send
exports.createPost = (req, res) =>{
    const post = new Post(req.body)
    // console.log("creating post",req.body);
    post.save((err, result)=>{
        //error handling package for better error messages
        // expres validator package for error messages
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        else {
            return res.status(200).json({
            post: result
            });
        }
    })
}