const urlComment = "http://localhost:3000/comments";

async function addcomment(postId) {
//---------------------------Getting total Size of comment for further adding with the increment of Id---
    var commentSize;

    await fetch(urlComment) 
        .then(response => response.json())  // Converting received data to JSON
        .then(json =>{
            commentSize=json.length;
        });
//---------------------------------------------------------------------------------------------------------     

//  Insert you code here write comments into the db.json file. 

        const commentValue=document.getElementById("comment"+postId).value;
        if(commentValue.length==0 || commentValue==null)
        {
            alert("Comment-box can't be Empty")
        }
        else{
            const commentData={
                "id":commentSize+1,
                "body":commentValue,
                "postId":postId
            };
            const requestOption=
            {
                method:'POST',
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                },
                body:JSON.stringify(commentData)
            };
            fetch(urlComment,requestOption).then(response=>response.json()).then(data=>{
                alert("Comments added !!");
            })
            .catch(error=>{
                alert(error);
            })


        }

}

async function getcomments() {

    //  Insert you code here write post into the db.json file. 
    // Give call to displayComments(comments)
    var getComment=[];
    try{
        const commentAll= await fetch(urlComment);
        const json= await commentAll.json();
        json.forEach(element=>{
            getComment.push(element);
        });
        displayComments(getComment);
    }
    catch(error){
      console.log(error);
    }

}

// This function renders all the comments that you read from the db.json file.
function displayComments(arr) {
    var out = " <h4> Comments </h4>";
    arr.forEach(element => {
        out += ' <div class="card  commentscard">' +
            '<div>' +
            '<p>' + element.body + '  </p>' +
            ' </div>  </div>';
    });

    document.getElementById("allcomments").innerHTML += out;
}

//This method invocation renders all comments on the html page
getcomments();

