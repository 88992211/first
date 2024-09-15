var arr = [
  {
      name: "Raj",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGFdJA9kNDhJbh-z76UjxQhevHI1hyOPQMQ&s",
      desc: "Intelligent boy",
      status: "friends",
  },
  {
      name: "Gungun",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGihSpEIW8WdGXOqAPXYQCGDdOyl70Z4TwA&s",
      desc: "Lovely heart",
      status: "strangers",
  },
  {
      name: "Khushi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XBywfohlDOuFuNDMdPZj75hSYQIO6jkmHg&s",
      desc: "Beautiful girl",
      status: "strangers",
  }
];
function print() {
var container = "";
arr.forEach(function (value, index) {
container += `<div class="card w-52 p-4 rounded-md bg-[#00a0b0] text-white">
<div class="img w-20 h-20 bg-red-500 rounded-full overflow-hidden">
  <img class="w-full h-full object-cover" src="${value.image}" alt="">
</div>
<h2 class="text-2xl font-semibold text-gray-300 mt-2">${value.name}</h2>
<p class="text-sm mt-2">${value.desc}</p>
<p class="text-xl font-semibold text-gray-300"> Age: ${value.age}</p>
<button id="${index}" class="btn text-xl text-gray-200 font-semibold px-3 py-2 ${value.status === 'strangers' ? 'bg-blue-500' : value.status === 'request sent' ? 'bg-yellow-500' : 'bg-red-500'} rounded-md mt-3">
${value.status === 'strangers' ? 'Add Friend' : value.status === 'request sent' ? 'Request Sent' : 'Remove Friend'}
</button>    
</div>`;
});

document.querySelector(".cards").innerHTML = container;
}
var timer;
document.querySelector(".cards").addEventListener("click", function (e) {
  if (arr[e.target.id].status === "strangers") {
      arr[e.target.id].status = "request sent";
      print();
      let rnnum = Math.floor(Math.random() * 10);
      timer = setTimeout(function () {
          arr[e.target.id].status = "friends";
          print();
      }, rnnum * 1000)
  }
  else {
      arr[e.target.id].status = "strangers";
      closerTimeout(timer);
  }
});
print();