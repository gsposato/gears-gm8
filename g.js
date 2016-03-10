{
	// dev stuff
	global.devmode = true;
	global.debuglog = true;
	global.debuglog_location = "debug.log";

	// debug stuff
	global.debugscreen = true;
	global.debugscreen_x = 10;
	global.debugscreen_y = 10;
	global.debugscreen_alpha = 1;
	global.debugscreen_color = c_white;

	// global game stuff
	global.game_title = "g-framework";
	global.room_width = 1280;
	global.room_height = 800;
	global.loader_width = 800;
	global.loader_height = 400;
	draw_set( c_white, fa_left, fa_top, -1 );

	// global resources
	global.sprites = ds_map_create();
	global.sounds = ds_map_create();
	global.backgrounds = ds_map_create();
	global.paths = ds_map_create();
	global.fonts = ds_map_create();
	global.timelines = ds_map_create();
	global.objects = ds_map_create();
	global.rooms = ds_map_create();

	if( global.devmode )
	{
		run_unit_test_all();
	}

	room_goto( get_room( "loader_room" ) );
}