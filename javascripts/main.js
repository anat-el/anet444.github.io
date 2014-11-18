console.log('This would be the main JS file.');



function change() {

    var myNewTitle = document.getElementById('myTextField').value;
    if (myNewTitle.length == 0) {
        alert('Please write something!');
        return;
    }

    var title = document.getElementById('title');
    var myNewColour;
    title.innerHTML = myNewTitle;
    myNewColour = myNewTitle;
    //alert(myNewTitle == 'maya');
    if (myNewTitle == 'maya' || myNewTitle == 'anat') { myNewColour = 'purple'};
     //alert(myNewColour);
    //myNewColour == "blue"};  
    title.style.color = myNewColour;
    
    
    
    

}

function Trick(){
alert("Boo!")
document.body.style.backgroundImage = "url('http://placekitten.com/g/200/300')";
}
function Treat(){
alert("Meow!")
}