$(document).alert(()=>{
    $.get("/api/posts", results=> {
        console.log(results);
    })
})