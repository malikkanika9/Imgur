async function fetchdata(){
    var InputData=JSON.parse(localStorage.getItem("input"))||"";
    var fethapi=`https://api.unsplash.com/search/photos/?query=${InputData}&client_id=CiUHdv8t1CZ0RdkGWvepkPXZAFaWvFZNgM7IyR5o0ME`
    var res=await fetch(fethapi);
    var data=await res.json();
    //   console.log(InputData);
    var data1=data.results;
    if(data1.length==0){
        console.log(data1);
        return false;
    }
    printData(data1); 
}

function printData(d){
    console.log(1)
    document.querySelector(".lowerbox").innerHTML="";
    d.map((e)=>{
    let div1=document.createElement("div");
    let image=document.createElement("img");
    image.src=e.urls.small;
    image.style.width="100%";
    image.style.height="300px";
    const Likes=`❤️ ${e.likes}`;
    div1.append(image,Likes);
    document.querySelector(".lowerbox").append(div1);
})

}
fetchdata();
function getData(){
    var Input=document.querySelector("#inputval").value;
    localStorage.setItem("input",JSON.stringify(Input));
    window.location.href="search.html";
    }
    function display(fun , delay){

        setTimeout(()=>{
        fun();
        },delay)
    }
    