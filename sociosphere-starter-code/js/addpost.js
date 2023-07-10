
const url = "http://localhost:3000/posts";

async function addpost() {
    let formdata=document.getElementById("post").value;
    if(formdata.length==0 || formdata==null)
    {
        alert("Content Can't be empty");
    }
    else{
        let totalPostsSize;
        let formdataModified=formdata.split("-");
        const title=formdataModified[0];
        const author=formdataModified[1];
        
        // This get url used for getting total length for Posts- for adding with next id.
        
        fetch(url) 
        .then(response => response.json())  // Converting received data to JSON
        .then(json =>{
            totalPostsSize=json.length;
        });
        
        //data 
        const postData={
            "id":totalPostsSize+1,
            "title": title,
            "author": author,
            "like": true
        };

        const requestOption={
            method:"Post",
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(postData)
        }  
        
    // POST request using fetch()
    fetch(url,requestOption).then(response => response.json()).then(json => alert("Post Added!!")).catch(error=>{
        alert(error);
    });
    
    }
   

}

async function getposts() {
    var arr=[];
    try{
        const response=await fetch(url);
        const json=await response.json();
        json.forEach(element=>{
            arr.push(element);
        });
        displayPosts(arr);
    }
    catch(error){
       alert("Server Error");
    }

   
}


// This function renders all the posts that you read from the db.json file. 
function displayPosts(arr) {
    var out = "";
    arr.forEach(element=>{
        let elementId=element.id;
        out += '<div class="well">' +
            '<div class="media">' +
            '<div class="media-body">' +
            '<h4 class="media-heading">' + element.author + '</h4>' +
            ' <p class="text-right">By ' + element.author + '</p>' +
            ' <p> ' + element.title + '</p>' +
            ' <ul class="list-inline list-unstyled">' +
            ' <span><i class="glyphicon glyphicon-comment"></i> Comments</span>' +
            ' <li>|</li>' +
            ' <li>' +
            ' <i class="fa fa-thumbs-up thummpsupdown" onclick="likeDislike(this)"></i>' +
            ' </li>' +
            '</ul>' +
            '</div>' +
            '<div class="bg-light p-2 " id="allcomments">' +
            '<div class="d-flex flex-row align-items-start"><textarea id="comment'+elementId+'" class="form-control ml-1 shadow-none textarea"></textarea></div>' +
            '<div class="mt-2 text-right"><button class="btn btn-primary" type="button"  onclick="addcomment('+elementId+')">Post comment</button>&nbsp;<button class="btn btn-primary " type="button">Cancel</button></div></div> </div> </div> </div>';
        });
    
     document.getElementById("allrow").innerHTML += out;

}

//This method invocation renders all post on the html page
getposts();


function likeDislike(x) {

 x.classList.toggle("fa-thumbs-down");
}


