  var slideImages = [
    [{img_url : "https://bit.ly/3qJmvfK"},
    {img_url : "https://bit.ly/3uFdtl6"},
    {img_url : "https://bit.ly/3NqqqYR"},
    {img_url : "https://bit.ly/3NxptOo"},
    ],
    [{img_url : "https://bit.ly/35p0UBR"},
    {img_url: "https://bit.ly/38hbVX5"},
    {img_url: "https://bit.ly/3iOZ3t9"},
    {img_url: "https://bit.ly/3tTroEZ"},
    ]
  ]

  var z = null; 
    var value = window.matchMedia("(max-width: 550px)") 
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }

  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })

    var categoryBag = [
      {image_url :'https://bit.ly/3DnfTst'},
      {image_url :'https://bit.ly/3uB2WHQ'},
      {image_url :'https://bit.ly/3NvrZEB'},
      {image_url :'https://bit.ly/3JP1BmV'},
      {image_url :'https://bit.ly/3Nt0VG5'},
      {image_url :'https://bit.ly/3uEEhC2'},
  ]
  categoryBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('categoryBag').append(box)
  })

  var brandsBag = [
      {image_url :'https://bit.ly/3wTrgam'},
      {image_url :'https://bit.ly/3Ln7fx1'},
      {image_url :'https://bit.ly/3wKizze'},
      {image_url :'https://bit.ly/3iLkgUQ'},
      {image_url :'https://bit.ly/3uzcDX3'},
  ]
  brandsBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('explore_more').append(box)
  })


document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index.html"
})
var images = document.querySelectorAll('img')
for(let i=0; i<images.length; i++){
  images[i].addEventListener('click', function(){
    window.location.href = "../menspage/mens.html"
  })
}
document.getElementById('landingPage').addEventListener('click', function(){
  window.location.href = '../Landingpage/index.html'
})