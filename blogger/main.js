var count = 1;

function postFunction() {

    var textInput = document.getElementById("text1").value;
    username = textInput

    if (count == 1) {
        postOne(textInput);
    }
    if (count == 2) {
        postTwo(textInput);
    }
    if (count == 3) {
        postThree(textInput);
    }
    count += 1;
    if (count > 3) count = 1;
}

function postOne(textInput) {
    var topic1 = document.getElementById("topic1");
    topic1.innerHTML = textInput;
}


function postTwo(textInput) {
    var comment1 = document.getElementById("comment1");
    comment1.innerHTML = textInput;
}

function postThree(textInput) {
    var comment2 = document.getElementById("comment2");
    comment2.innerHTML = textInput;
}


function clearFunction() {
    var textInput = document.getElementById("text1").value = "";

    var topic1 = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");

    textInput.innerHTML = "";
    topic1.innerHTML = "";
    comment1.innerHTML = "";
    comment2.innerHTML = "";
}


