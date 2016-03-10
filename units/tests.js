{
	assert_equals_or_shutdown( "objects/hello/construct.js", 0 );
	assert_equals_or_shutdown( "objects/hello/ev_draw.js", 0 );
	assert_equals_or_shutdown( "objects/preloader/construct.js", 1 );
	assert_equals_or_shutdown( "objects/preloader/ev_create.js", 0 );
	assert_equals_or_shutdown( "rooms/loader_room.js", 1 );
}