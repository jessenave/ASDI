/*
    Activity 1
    Visual Frameworks (VFW)
    Mobile User Interface
    Author: Jesse Nave
*/
    function showValue(newValue){
        document.getElementById("range").innerHTML = newValue;
    }

    function styleField(){
        
        var field = document.getElementById("title");
        field.style.backgroundColor = "#ffb";
    }
    //styleField();
    
    function styleField2(){
        
        var field = document.getElementById("volume");
        field.style.backgroundColor = "#ffb";
    }
    //styleField2();
    
    function unStyleField(){
        
        var field = document.getElementById("title");
        field.style.backgroundColor = "#fff";
    }
    //unStyleField();
    
    function unStyleField2(){
        
        var field = document.getElementById("volume");
        field.style.backgroundColor = "#fff";
    }
    
    function styleField3(){
        
        var field = document.getElementById("comicNum");
        field.style.backgroundColor = "#ffb";
    }
    
    function unStyleField3(){
        
        var field = document.getElementById("comicNum");
        field.style.backgroundColor = "#fff";
    }
    
    function styleField4(){
        
        var field = document.getElementById("pubDate");
        field.style.backgroundColor = "#ffb";
    }
    
    function unStyleField4(){
        
        var field = document.getElementById("pubDate");
        field.style.backgroundColor = "#fff";
    }
    
    function styleField5(){
        
        var field = document.getElementById("notes");
        field.style.backgroundColor = "#ffb";
    }
    
    function unStyleField5(){
        
        var field = document.getElementById("notes");
        field.style.backgroundColor = "#fff";
    }
    function styleField6(){
        
        var field = document.getElementById("penciler");
        field.setAttribute("value", "");
        field.style.backgroundColor = "#ffb";
    }
    
    function unStyleField6(){
        
        var field = document.getElementById("penciler");
        field.setAttribute("value", "unknown");
        field.style.backgroundColor = "#fff";
    }
    function styleField7(){
        
        var field = document.getElementById("writer");
        field.setAttribute("value", "");
        field.style.backgroundColor = "#ffb";
    }
    
    function unStyleField7(){
        
        var field = document.getElementById("writer");
        field.setAttribute("value", "unknown");
        field.style.backgroundColor = "#fff";
    }
    function styleField8(){
        
        var field = document.getElementById("oPrice");
        field.setAttribute("value", "");
        field.style.backgroundColor = "#ffb";
    }
    
    function unStyleField8(){
        
        var field = document.getElementById("oPrice");
        field.setAttribute("value", "unknown");
        field.style.backgroundColor = "#fff";
    }
    function styleField9(){
        
        var field = document.getElementById("cValue");
        field.setAttribute("value", "");
        field.style.backgroundColor = "#ffb";
    }
    
    function unStyleField9(){
        
        var field = document.getElementById("cValue");
        field.setAttribute("value", "unknown");
        field.style.backgroundColor = "#fff";
    }
    


//Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function () {
    
        function drawImage(){
        var can = document.getElementById("canvas1");
        
        if(can && can.getContext){
            var drw = can.getContext("2d");
            if(drw){
                var img1 = document.getElementById("hero");
                drw.drawImage(img1, 0,0);
            }
        }
    }

    
    //getElementById Function
    function $(x){
    var theElement = document.getElementById(x);
    return theElement;
    }
    
    //Create select field element and populate with options
    function makeCats(){
        var formTag = document.getElementsByTagName("form"),//formTag is an array of all the form tags. (because we used getElementsByTagName (plural))
            selectLi = $("select"),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "groups");
        for(var i = 0, j = contactGroups.length; i<j; i++){
            var makeOption = document.createElement("option");
            var optText = contactGroups[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    //find value of selected radio button
/*    function getSelectedRadio(){
        var radio = document.forms[0].favorite;
        for (var i = 0; i < radios.length; i++){
            if(radios[i].checked){
            comicFaveValue = radios[i].value;
            }
        }
   }
*/
    
    function getCheckboxValue(){
        if($("fav").checked){
            comicFaveValue = $("fav").value;
        }else{
            comicFaveValue = "No";
        }
        if($("fave1").checked){
            pencilFaveValue = $("fave1").value;
        }else{
            pencilFaveValue = "No";
        }
        if($("fave2").checked){
            writerFaveValue = $("fave2").value;
        }else{
            writerFaveValue = "No";
        }
    }
    
    function toggleControls(n){
        switch(n){
            case "on":
                $('contactForm').style.display = "none";
                $('clear').style.display = "inline";
                $('displayLink').style.display = "none";
                $('addNew').style.display = "inline";
                break;
            
            case "off":
                $('contactForm').style.display = "block";
                $('clear').style.display = "inline";
                $('displayLink').style.display = "inline";
                $('addNew').style.display = "none";
                $('items').style.display = "none";
                break;
            
            default:
                //return false;
        }
    }
    
    
    function storeData(key) {
        
        if(!key){
            
        var id  = Math.floor(Math.random()*1000000001);
        
        }else{
            
            id = key;
        }
        //Gather up all our form field values and store them in an object.
        //Object porperties contain array with the form label and input value.
        getCheckboxValue();
        var item = {};
        item.title          = ["Title: ", $('title').value];
        item.volume         = ["Volume: ", $('volume').value];
        item.comicNum       = ["ComicNum: ", $('comicNum').value];
        item.pubDate        = ["PubDate: ", $('pubDate').value];
        item.publisher      = ["Publisher: ", $('groups').value];
        item.count          = ["Ammount: ", $('slide').value];
        
        item.comicFave      = ["Is a Favorite: ", comicFaveValue];
        item.notes          = ["Notes: ", $('notes').value];
        item.penciler       = ["Penciler: ", $('penciler').value];
        
        item.pencilFave     = ["Favorite Artist:", pencilFaveValue];
        item.writer         = ["Writer: ", $('writer').value];
        
        item.writerFave     = ["Favorite Writer:", writerFaveValue];
        item.oPrice         = ["OriginalPrice: ", $('oPrice').value];
        item.cValue         = ["CurrentValue: ", $('cValue').value];
        //save data into local storage: using stringivy to convert object into a string
        localStorage.setItem(id, JSON.stringify(item));
        alert("Comic Saved!");
    }
    
    function getData() {
        toggleControls("on");
        if(localStorage.length === 0){
            
            autoFillData();
            
            alert("No comics saved yet, so default data was added.");
        }
        //write data from local storage to browser
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i = 0, len=localStorage.length; i<len; i++){
            var makeli = document.createElement("li");
            var linksLi = document.createElement("li");
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //convert the string from local storage value back to an object by using JSON.parse
            var obj = JSON.parse(value);
            var makeSublist = document.createElement('ul');
            makeli.appendChild(makeSublist);
            //getImage(obj.groups[1], makeSublist);
            for(var n in obj){
                var makeSubli = document.createElement("li");
                makeSublist.appendChild(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n] [1];
                makeSubli.innerHTML = optSubText;
                makeSublist.appendChild(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi);//Create our edit and delete buttons/link for each item in local storage.
        }
        
    }
    
    //Get the image for the correct category
    
    //this code breaks my app
    //The video doesn't show where he gets the obj "group".  I have tried ever name that I used to describe my
    //dropdown list, but none of them work.
    
   /* function getImage(catName, makeSublist){
        
        var  imageli = document.createElement('li');
        makeSublist.appentChild(imageli);
        var newImage = document.createElement('img');
        var setSrc = newImage.setAttribute("src", "images/"+ catName +".png");
        imageli.appendChild(newImage);
  
    }
   */    
    //JSON object which will auto populate local storage
    function autoFillData(){
        
        var json ={
         
            "comic1": {
                
                "title": ["Title: ", "Default Comic"],
                "volume": ["Volume # ", "1"],
                "issue": ["Comic # ", "100"],
                "pubDate": ["Publication Date: ", "05/24/1971"],
                "publisher": ["Publisher: ", "other"],
                "ammount": ["Ammount: ", "1"],
                "favorite": ["Favorite? ", "Yes"],
                "notes": ["Notes: ", "This is the default comic book."]
                }    
        };
        var id  = Math.floor(Math.random()*1000000001);
        localStorage.setItem(id, JSON.stringify(json.comic1));
    }
    
    //Make Item links function
    //Create Edit and Delet links for each stored item when displayed
    
    function makeItemLinks(key, linksLi){
        
        //add edit single item link.
        var editLink = document.createElement('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Comic";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.appendChild(editLink);
        
        //add line break
        var breakTag = document.createElement('br');
        linksLi.appendChild(breakTag);
        
        //add delete single item link
        var deleteLink = document.createElement('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Comic";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksLi.appendChild(deleteLink);
         
    }
    
    function editItem(){
        //Grab the data from our item in local storage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        
        //show the form again
        toggleControls("off");
        
        //populate form fields with current local storage values
        $('title').value = item.title[1];
        $('volume').value = item.volume[1];
        $('comicNum').value = item.comicNum[1];
        $('pubDate').value = item.pubDate[1];
        $('groups').value = item.publisher[1];
        $('count').value = item.count[1];
        
        $('comicFave').value = item.comicFave[1];
        $('notes').value = item.notes[1];
        $('penciler').value = item.penciler[1];
        
        $('pencilFave').value = item.pencilFave[1];
        $('writer').value = item.group[1];
        
        $('writerFave').value = item.writerFave[1];
        $('oPrice').value = item.oPrice[1];
        $('cValue').value = item.cValue[1];
        
        if(item.comicFave[1] == "Yes"){
            $('comicFave').setAttribute("checked", "checked");
        }
        if(item.pencilFave[1] == "Yes"){
            $('pencilFave').setAttribute("checked", "checked");
        }
        if(item.writerFave[1] == "Yes"){
            $('writerFave').setAttribute("checked", "checked");
        }
        //Remove listener from the save button
        save.removeEventListener("click", storeData);
        //change submit button value to say "Edit Button"
        $('submita').value = "Edit Comic";
        var editSubmit = $('submita');
        //save the key value from this function as a property of the editSubmit event
        //so we can use that value to save the data that we edited
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
        
    }
    
    function deleteItem(){
        var ask = confirm("Are you sure you'd like to delete this comic?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("Comic was deleted.");
            window.location.reload();
        }else{
            alert("Contact was NOT deleted.");
        }
    }
    
    function clearLocal(){
        if(localStorage.length === 0){
            alert("There are no comics saved.");
        }else{
            localStorage.clear();
            alert("All comics have been deleted.");
            window.location.reload();
            //return false;
        }
    }
    
        function validate(e){
        
        //define elements that we want to check
        var getTitle = $('title');
        var getVolume = $('volume');
        var getComicNum = $('comicNum');
        var getPubDate = $('pubDate');
        var getPublisher = ('publisher');
        
        //reset the error messages
        errMsg.innerHTML = "";
        getTitle.style.border = "1px solid black";
        getVolume.style.border = "1px solid black";
        getComicNum.style.border = "1px solid black";
        getPubDate.style.border = "1px solid black";
        getPublisher.style.border = "1px solid black";
      
        //get error messages
        var messageAry = [];
        
        if(getTitle.value === ""){
            var titleError = "Please enter a Title.";
            getTitle.style.border = "1px solid red";
            messageAry.push(titleError);
        }
        if(getVolume.value === ""){
            var volumeError = "Please enter a Volume.";
            getVolume.style.border = "1px solid red";
            messageAry.push(volumeError);
        }
        if(getComicNum.value === ""){
            var comicNumError = "Please enter a Comic Number.";
            getComicNum.style.border = "1px solid red";
            messageAry.push(comicNumError);
        }
        if(getPubDate.value === ""){
            var pubDateError = "Please enter a Publication Date.";
            getPubDate.style.border = "1px solid red";
            messageAry.push(pubDateError);
        }
        if(getPublisher.value === "---Choose A Publisher---"){
            var publisherError = "Please choose a publisher.";
            getPublisher.style.border = "1px solid red";
            messageAry.push(publisherError);
        }
        //If there are any errors, display them on the screen.
        if(messageAry.length >= 1){
            for(var i = 0, j = messageAry.length; i < j; i++){
                var txt = document.createElement('li');
                txt.innerHTML = messageAry[i];
                errMsg.appendChild(txt);
            }
            
        }
        e.preventDefault();
            return false;
     }

    //Variable defaults
    var contactGroups = ["---Choose A Publisher---", "MARVEL", "DC", "Image", "Dark_Horse", "Full_Bleed", "Other"],
    comicFaveValue = "No",
    errMsg = $('errors');
    
    ;
    makeCats();
    //storeData();
    //getData();
    
    //Set Link & Submit Click Events
    var displayLink = $('displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $("clear");
    clearLink.addEventListener("click", clearLocal);
    var save = $("submita");
    save.addEventListener("click", storeData);
    

});


