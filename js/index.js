function scrollHandler () { 
  // how far the user has scrolled so far on the page 
  const scrolled = window.innerHeight + window.scrollY; 
  // height of the document 
  const documentHeight = document.body.offsetHeight; 
  // the amount of distance in pixels needed from the bottom of the page before the page scrolls to the top 
  const offset = 100; 
  if (offset + scrolled >= documentHeight) 
 
    window.scrollTo(0,0); 
} 
 
window.addEventListener('scroll', scrollHandler); 