var arr = [
   { name:"ram",
    Image:"https://images.unsplash.com/photo-1623085077018-babad8e9bc62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8", 
    desc:"man of mom", 
    status:"strangers"},
   { name:"shyam",
    Image:"https://images.unsplash.com/photo-1637799979464-7c25e11c67ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
     desc:"man of babu",
      status:"strangers"},
   { name:"ghanshayam",
    Image:"https://images.unsplash.com/photo-1577975882846-431adc8c2009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
     desc:"man of girlfriend",
      status:"straers"},
   ];
   function print(){
      var container = "";
      arr.forEach(function(value, index){
         container +=` <div class="card w-60 h-72 bg-red-200 ">
         <img class="w-14 h-14 rounded-3xl ml-10 " src="${value.Image}" alt="">
         <h1 class="ml-10 text-xl mt-5">${value.name}</h1>
         <p class="p-5 ">${value.desc}</p>  
         <button id="${index}" class="btn ml-10 p-2 rounded-md ${value.status === "strangers"?"bg-blue-500":"bg-red-400"} "> ${value.status === "strangers"  ? "add friends":"remove friends"}</button>         
     </div>`;
   });
     
      document.querySelector(".cards").innerHTML= container;
     
   }
   print();


 document.querySelector(".cards").addEventListener("click", function(e){
  if(arr[e.target.id].status === "stangers"){
   arr[e.target.id].status = "request send";
   }
   
   print();

});

 
         
         
