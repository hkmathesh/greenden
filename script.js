var sidenav = document.getElementById('sidenav');
var closenav = document.getElementById('closenav');
var menubar = document.getElementById('menubar');
console.log(sidenav)
console.log(closenav)

menubar.addEventListener('click', function(){
    sidenav.style.right = 0;
})

closenav.addEventListener('click', function(){
    sidenav.style.right = '-50%';
})