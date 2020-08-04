<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Auth::routes();
Route::post('login', 'AuthController@login');
Route::post('signup', 'AuthController@signup');

Route::group([
  'middleware' => 'auth:api'
], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@user');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/', function () {
//     return response()->json(['message' => 'Jobs API', 'status' => 'Connected']);
// });
Route::group(['middleware' => ['auth:api']], function () {
    Route::resource('jobs', 'JobsController');
    Route::resource('companies', 'CompaniesController');
});
