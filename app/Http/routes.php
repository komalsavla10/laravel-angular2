<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('homepage');
});

Route::post('test', function (\Illuminate\Http\Request $request) {
//    print_r($request->all());
    return response(['data' => 'test Data ' . $request->input('name')], 200);
});

Route::get('time-entry', 'TimeEntryController@index');
Route::post('time-entry/save', 'TimeEntryController@post');
Route::get('time-entry/all', 'TimeEntryController@all');