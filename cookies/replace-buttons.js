function checkCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return unescape(dc.substring(begin + prefix.length, end));
} 



window.onload = function customWelcome() {
    var myCookie = checkCookie("ninja_forms_field_22");

    if (myCookie == null) {
        // regular welcome screen
    }
    else {
        jQuery( "a.replace" ).replaceWith( '<a href=\"/application/\" class=\"button arrow-right\">FINISH YOUR APPLICATION</a>');
    }
}