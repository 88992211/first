var names =
    ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn",
    "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria",
    "Scarlett", "Penelope", "Layla", "Chloe", "Victoria", "Madison", "Eleanor", "Grace", "Nora", "Riley",
    "Zoey", "Hannah", "Hazel", "Lily", "Ellie", "Violet", "Lillian", "Zoe", "Stella", "Aurora",
    "Natalie", "Emilia", "Everly", "Leah", "Aubrey", "Willow", "Addison", "Lucy", "Audrey", "Bella"
  ];
  
  function print(namesArray) {
    var container = "";
    namesArray.forEach(function (name) {
      container += `<h2 class="words py-2 px-2">${name}</h2>`;
    });
    document.querySelector(".scroller").innerHTML = container;
  }
  
  print(names);
  
  var input = document.querySelector("input");
  
  input.addEventListener("input", function () {
    var ans = names.filter(function (name) {
      return name.toLowerCase().startsWith(input.value.toLowerCase());
    });
    print(ans);
  });