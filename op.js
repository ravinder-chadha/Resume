// $(document).keydown(function(e){ 
//   if(e.which === 123){
//      return false;
//   }
// }); 

// $(document).bind("contextmenu",function(e) {  
// 	e.preventDefault(); 
 
// });

// var currentHtmlContent; 
// var element = new Image(); 
// var elementWithHiddenContent = document.querySelector("#element-to-hide"); 
// var innerHtml = elementWithHiddenContent.innerHTML;
// element.__defineGetter__("id", function() { 
//     currentHtmlContent= ""; 
// });


setInterval(function() { 
    currentHtmlContent= innerHtml; 
    console.log(element); 
    console.clear();  
    elementWithHiddenContent.innerHTML = currentHtmlContent; 
}, 1000); 

//skills animation
const val1 = document.querySelector('.skills');
val1.classList.remove('skills-animation');

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('skills-animation');
        return;
      }
      val1.classList.remove('skills-animation');
    });
  });
  
  observer.observe(document.querySelector('.skills'));

//project description animation
const val2 = document.getElementsByClassName('project-description');
for(i=0;i<val2.length;i++){
val2[i].classList.remove('project-description-animation');
}
const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    for(i=0;i<val2.length;i++){
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('project-description-animation');
        return;
      }
      val2[i].classList.remove('project-description-animation');
    });
  }
  });
  for(i=0;i<val2.length;i++){
  observer2.observe(val2[i]);
  }
//column 1 skills animation
const val4 = document.getElementsByClassName('column1');
for(i=0;i<val4.length;i++){
val4[i].classList.remove('column1-animation');
}
const observer4 = new IntersectionObserver(entries => {
    // Loop over the entries
    for(i=0;i<val4.length;i++){
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('column1-animation');
        return;
      }
      val4[i].classList.remove('column1-animation');
    });
  }
  });
  for(i=0;i<val4.length;i++){
  observer4.observe(val4[i]);
  }
//column 2 skills animation
const val5 = document.getElementsByClassName('column2');
for(i=0;i<val5.length;i++){
val5[i].classList.remove('column2-animation');
}
const observer5 = new IntersectionObserver(entries => {
    // Loop over the entries
    for(i=0;i<val5.length;i++){
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('column2-animation');
        return;
      }
      val5[i].classList.remove('column2-animation');
    });
  }
  });
  for(i=0;i<val5.length;i++){
  observer5.observe(val5[i]);
  }