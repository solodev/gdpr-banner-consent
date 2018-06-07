// Banner Trigger if Not Closed
if (!sessionStorage.bannerClosed) {
  $('.privacy-banner').css('display', 'inherit');
} else {
  $('.privacy-banner').css('display', 'none');
}
$('.privacy-banner button').click(function() {
  $('.privacy-banner').css('display', 'none');
  sessionStorage.bannerClosed = 'true';
});
$('.banner-accept').click(function() {
  $('.privacy-banner').css('display', 'none');
  sessionStorage.bannerClosed = 'true';
});
if (navigator.userAgent.match(/Opera|OPR\//)) {
  $('.privacy-banner').css('display', 'inherit');
}
