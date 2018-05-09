M.AutoInit();

// Scrollspy
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {
    scrollOffset: 105
  });
});

// Sidenavigation
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});