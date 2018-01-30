$( function() {
	function returnMenuNumber() {
		var menuNumber = $('li.current-menu-item').parents().eq(2).attr('id');
		if (menuNumber == "nav_menu-14" ) { return 1; }
		else if (menuNumber == "nav_menu-15") { return 2; }
		else if (menuNumber == "nav_menu-16") { return 3; }
		else { return 0; }
	}
	$( "#sidebar-inner" ).accordion({
		header: "h2",
		active: returnMenuNumber()
	});
});
