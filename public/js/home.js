$(document).alert(()=>{
    $.get("/api/posts", results=> {
        outputPosts(results, $(".postsContainer"));
    })
})

function outputPosts(results, container) {
    container.html("");
    //loop over every single results
     results.array.forEach(result => {
        var html = createPostHtml(result)
        container.append(html);
    });
    if (results.length == 0) {
        container.append("<span cass='noResults'>Nothing to show.</span>")
    }
}