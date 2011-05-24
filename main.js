var clip = null;

function getPasswords() {
    $("#target").empty();
    $(".loading").clone().appendTo("#target");
    $("#target").load("http://generator.designeus.net/ #results");
}

function copyToClipboard(str) {
  var obj=document.getElementById("clip_buffer");
  if (obj) {
    obj.value = str;
    obj.select();
    document.execCommand("copy", false, null);
  }
}

$(function() {
    // assign a common mouseover function for all elements using jQuery
    $('#target .copyme').live( 'click', function() {
				copyToClipboard(this.innerHTML);
    });

    $("#getmore").click(getPasswords);
    setTimeout(getPasswords, 125);
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-57622-13']);
_gaq.push(['_trackPageview']);

setTimeout(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
}, 500);
