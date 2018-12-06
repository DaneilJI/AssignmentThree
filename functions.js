function upload() {
    var file = document.getElementById("upload_file").files[0];
    var ID = '_' + Math.random().toString(36).substr(2, 9);
    let config = {
        headers :{
            'Content-Type': 'image/jpeg'
        } 
    };
    axios.put('' + ID + '.jpg',
        file,
        config
    ).then(response => {
        console.log(response);
        addimage(ID + '.jpg')
    }).catch(error => {
        console.log(error);
    })
}

function search(msg) {
    axios({
        url: "",
        method: 'post',
        data: {
            "message": msg
        },
        headers: {
            "X-Api-Key": ""
        }
    }).then(response => {
        console.log(response.data.body);
        if (response.data.body.length == 0) {
            alert("no result...")
        } else {
            $('.child').remove()
            for (var i = 0; i < response.data.body.length; i++)
                addimage(response.data.body[i]);
    } 
}).catch(error => {
        console.log(error)
    })
}

function addimage(name) {
    var img = new Image();
    img.setAttribute("class", "child");
    img.setAttribute("src",""+name);
    img.setAttribute("onclick", "onClick(this)");
    img.setAttribute("height", "80%")
    var chatArea = $(".chatBody");
    chatArea.append(img);
}

function sendMessage() {
    var msg = $(".msg").val();
    if (msg === "") {
        alert("please enter some thing!");
        return;
    }
    search(msg);
}

$(".msg").keydown(function () {
    if (event.keyCode == "13") {
        sendMessage();
        $(".msg").val(null);
    }
});

function clik() {
    document.getElementById("modal01").style.display = 'none';
}
