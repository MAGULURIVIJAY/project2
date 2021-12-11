function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.profile);
})
function display(cse){
            // cards area'
            var rowdata=document.querySelector(".row")
            console.log(rowdata)
            for(var k=0;k<cse.length;k++){
                console.log(cse)
            console.log(k)     
            // card
            var cad=document.createElement("div")
            cad.classList.add("card")
            rowdata.appendChild(cad)
            console.log(cad)
            // img
            var pic=document.createElement("img")
            console.log(pic)
            pic.src=cse[k].img
            cad.appendChild(pic)
            var sname=document.createElement("h1")
            console.log(sname)
            sname.textContent=cse[k].name;
            cad.appendChild(sname)

    }
}
// cards area'
var rowdata=document.querySelector(".row")
console.log(rowdata)
// card
var cad=document.createElement("div")
cad.classList.add("card")
console.log(cad)
// img
var pic=document.createElement("img")
console.log(pic)
var sname=document.createElement("h1")
console.log(sname)
