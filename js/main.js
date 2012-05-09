//Wait until the DOM is ready.
$(document).ready(function () {
    
    console.log('loaded');
//        function drawImage(){
//        var can = $("#canvas1");
//
//        if(can && can.getContext){
//            var drw = can.getContext("2d");
//            if(drw){
//                var img1 = $("#hero");
//                drw.drawImage(img1, 0,0);
//            }
//        }
//    }

//get data in three different formats form external files

/*------------------------------------------------------------------------*/


    //json object's url
    var url = "data/data.json";
    
    //items to be changed by json values
    var title= $("#title1"),
    volume= $("#volume1"),
    comicNum= $("#comicNum1"),
    pubDate= $("#pubDate1"),
    publisher= $("#publisher1"),
    ammount= $("#ammount1"),
    favorite= $("#fav1"),
    notes= $("#notes1");
    
$("#buttonJson").click(function(){
    
    console.log('clicked');
    
    var myData = $.getJSON('data/data.json', function(success){
        
        console.log('success');
            
        });
    $(this).load('comic1.html');    
    });

$("#buttonXML").on(function(){
    
    });

$("#buttonCSV").on(function(){
    
    });

/*------------------------------------------------------------------------*/

    
    //getElementById Function
    function getId(x){
    var theElement = document.getElementById(x);
    return theElement;
    }
    
    //Create select field element and populate with options
    function makeCats(){
        var formTag = $("form"),//formTag is an array of all the form tags. (because we used getElementsByTagName (plural))
            selectLi = $("#select"),
            makeSelect = $('<select></select>');       // $('<select></select>')
            makeSelect.attr("id", "groups");    // makeSelect.attr("id", "groups");
        for(var i = 0, j = contactGroups.length; i<j; i++){
            var makeOption = $.create("option");
            var optText = contactGroups[i];
            makeOption.attr("value", optText);
            makeOption.html = optText;  // .html
            makeSelect.append(makeOption);    // .append
        }
        selectLi.append(makeSelect);
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
        if($("#fav").checked){   // $("#fav").checked
            comicFaveValue = $("#fav").value;
        }else{
            comicFaveValue = "No";
        }
        if($("#fave1").checked){
            pencilFaveValue = $("#fave1").value;
        }else{
            pencilFaveValue = "No";
        }
        if($("#fave2").checked){
            writerFaveValue = $("#fave2").value;
        }else{
            writerFaveValue = "No";
        }
    }
    
    function toggleControls(n){
        switch(n){
            case "on":
                $('#contactForm').style.display = "none";
                $('#clear').style.display = "inline";
                $('#displayLink').style.display = "none";
                $('#addNew').style.display = "inline";
                break;
            
            case "off":
                $('#contactForm').style.display = "block";
                $('#clear').style.display = "inline";
                $('#displayLink').style.display = "inline";
                $('#addNew').style.display = "none";
                $('#items').style.display = "none";
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
        //Object properties contain array with the form label and input value.
        getCheckboxValue();
        var item = {};
        item.title          = ["Title: ", $('#title').value]; //
        item.volume         = ["Volume: ", $('#volume').value];
        item.comicNum       = ["ComicNum: ", $('#comicNum').value];
        item.pubDate        = ["PubDate: ", $('#pubDate').value];
        item.publisher      = ["Publisher: ", $('#groups').value];
        item.count          = ["Ammount: ", $('#slide').value];
        
        item.comicFave      = ["Is a Favorite: ", comicFaveValue];
        item.notes          = ["Notes: ", $('#notes').value];
        item.penciler       = ["Penciler: ", $('#penciler').value];
        
        item.pencilFave     = ["Favorite Artist:", pencilFaveValue];
        item.writer         = ["Writer: ", $('#writer').value];
        
        item.writerFave     = ["Favorite Writer:", writerFaveValue];
        item.oPrice         = ["OriginalPrice: ", $('#oPrice').value];
        item.cValue         = ["CurrentValue: ", $('#cValue').value];
        //save data into local storage: using stringify to convert object into a string
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
        var makeDiv = $.create('div');
        makeDiv.attr("id", "items");
        var makeList = $.create('ul');
        makeDiv.append(makeList);
        $.body.append(makeDiv);
        $('#items').style.display = "block";
        for(var i = 0, len=localStorage.length; i<len; i++){
            var makeli = $.create("li");
            var linksLi = $.create("li");
            makeList.append(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //convert the string from local storage value back to an object by using JSON.parse
            var obj = JSON.parse(value);
            var makeSublist = $.create('ul');
            makeli.append(makeSublist);
            //getImage(obj.groups[1], makeSublist);
            for(var n in obj){
                var makeSubli = $.create("li");
                makeSublist.append(makeSubli);
                var optSubText = obj[n][0] + " " + obj[n] [1];
                makeSubli.html = optSubText;
                makeSublist.append(linksLi);
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
        var editLink = $.create('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Comic";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksLi.append(editLink);
        
        //add line break
        var breakTag = $.create('br');
        linksLi.append(breakTag);
        
        //add delete single item link
        var deleteLink = $.create('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Comic";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.html = deleteText;
        linksLi.append(deleteLink);
         
    }
    
    function editItem(){
        //Grab the data from our item in local storage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        
        //show the form again
        toggleControls("off");
        
        //populate form fields with current local storage values
        $('#title').value = item.title[1];
        $('#volume').value = item.volume[1];
        $('#comicNum').value = item.comicNum[1];
        $('#pubDate').value = item.pubDate[1];
        $('#groups').value = item.publisher[1];
        $('#count').value = item.count[1];
        
        $('#comicFave').value = item.comicFave[1];
        $('#notes').value = item.notes[1];
        $('#penciler').value = item.penciler[1];
        
        $('#pencilFave').value = item.pencilFave[1];
        $('#writer').value = item.group[1];
        
        $('#writerFave').value = item.writerFave[1];
        $('#oPrice').value = item.oPrice[1];
        $('#cValue').value = item.cValue[1];
        
        if(item.comicFave[1] == "Yes"){
            $('#comicFave').attr("checked", "checked");
        }
        if(item.pencilFave[1] == "Yes"){
            $('#pencilFave').attr("checked", "checked");
        }
        if(item.writerFave[1] == "Yes"){
            $('#writerFave').attr("checked", "checked");
        }
        //Remove listener from the save button
        save.removeEventListener("click", storeData);
        //change submit button value to say "Edit Button"
        $('#submita').value = "Edit Comic";
        var editSubmit = $('#submita');
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
        var getTitle = $('#title');
        var getVolume = $('#volume');
        var getComicNum = $('#comicNum');
        var getPubDate = $('#pubDate');
        var getPublisher = $('#publisher');
        
        //reset the error messages
        errMsg.html = "";
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
                var txt = $.create('li');
                txt.html = messageAry[i];
                errMsg.append(txt);
            }
            
        }
        e.preventDefault();
            return false;
     }

    //Variable defaults
    var contactGroups = ["---Choose A Publisher---", "MARVEL", "DC", "Image", "Dark_Horse", "Full_Bleed", "Other"],
    comicFaveValue = "No",
    errMsg = $('#errors');
    
    ;
    makeCats();
    //storeData();
    //getData();
    
    //Set Link & Submit Click Events
    var displayLink = $('#displayLink');
    displayLink.addEventListener("click", getData);
    var clearLink = $("#clear");
    clearLink.addEventListener("click", clearLocal);
    var save = $("#submita");
    save.addEventListener("click", storeData);
    

});


