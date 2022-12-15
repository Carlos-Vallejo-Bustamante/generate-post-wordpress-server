const wordpress = require("wordpress");

const CreatePost = (req, res, next) => {

    const { title, content, url, username, category, status, password } = req.body

    console.log(title)
    console.log(content)
    console.log(url);


    const client = wordpress.createClient({
        url: url,
        username: username,
        password: password
    });

    client.newPost({
        title: title,
        content: content,
        status: status,
        termNames: {
            "category": [category]
        }
    }, function (error, data) {
        console.log(arguments);
        console.log(data);
    });

}

module.exports = CreatePost;