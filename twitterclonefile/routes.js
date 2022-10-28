const displayContent  = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == "/profile")
    {
        res.setHeader("Content-Type", "text/html");
        res.write("<p>This is the profile page</p>");
        return res.end();
    }
    else if (url == "/")
    {    
        res.setHeader("Content-Type", "text/html");
        res.write("<p>This is the profile page</p>");
        return res.end();
    } 
    
    else if (url == "/settings")
    {    
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Settings page</h1>");
        return res.end();
    } 

    res.setHeader("Content-Type", "text/html");
    res.write("<p>404 page not found</p>");
    res.end();
}


module.exports = displayContent
