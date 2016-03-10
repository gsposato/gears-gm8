{
	obj = object_add();

	ds_map_add( global.objects, "hello_obj", obj );

	object_event_add( obj, ev_draw, 0, 'load(working_directory+"\objects\hello\ev_draw.js")' );
	
	return obj;
}