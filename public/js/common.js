$("#postTextarea").keyup(event => {
    var textbox = $(event.target);
    var value = textbox.val().trim();
    console.log(value)

    var submitButton = $("#submitPostButton");

    if(submitButton.length == 0) return alert("No submit button found")

})