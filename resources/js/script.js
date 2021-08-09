/*******************************************************
Fixed Navigation Menu
*******************************************************/

//
function fixedHeader() {
  document.getElementsByClassName('navbar')[0].style.position = 'fixed';
  document.getElementsByClassName('navbar')[0].style.top = '0';
  document.getElementsByClassName('navbar')[0].style.justifyContent = 'space-between';
  document.getElementsByClassName('navbar-img')[0].style.display = 'block';
  document.getElementById('main').style.marginTop = '0';
};

function returnHeader() {
document.getElementsByClassName('navbar')[0].style.position = '';
document.getElementsByClassName('navbar')[0].style.top = '';
document.getElementsByClassName('navbar-img')[0].style.display = '';
document.getElementsByClassName('navbar')[0].style.justifyContent = '';
document.getElementById('main').style.marginTop = '';
}

// Create event listener to trigger when scrolling past the viewport height
window.addEventListener("scroll",function() { 
  if(window.scrollY > window.innerHeight - 80) {
     fixedHeader();
  }
  if(window.scrollY <= window.innerHeight - 80) {
     returnHeader()
  }
},false);