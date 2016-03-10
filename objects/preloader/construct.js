{
	obj = object_add();

	ds_map_add( global.objects, "preloader_obj", obj );

	object_event_add( obj, ev_draw, 0, 'load(working_directory+"\objects\preloader\ev_create.js")' );
	
	return obj;
}