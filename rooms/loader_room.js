{
	index = room_add();

	ds_map_add( global.rooms, "loader_room", index );

	room_set_width( index, global.loader_width );
	room_set_height( index, global.loader_height);
	room_set_background_color( index, c_black, true);
	room_set_code( index, "instance_create( 0, 0, get_object('hello_obj') )" );

	return index;
}