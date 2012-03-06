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