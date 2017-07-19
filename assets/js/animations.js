/**linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35))
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
