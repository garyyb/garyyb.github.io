/**
 * Created by Gary on 19-Jul-17.
 */

$().ready(function() {
  if (window.location.pathname === '' || window.location.pathname === '/') {
    anime({
      targets : '#name',
      opacity : 1,
      duration : 15000
    });
  } else {
    $("#name").css('opacity', 1);
  }
});
