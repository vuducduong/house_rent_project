<?php


use App\Http\Controllers\HouseController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
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




Route::post('register',[UserController::class,'store']);
Route::put('change-password/{id}',[UserController::class,'changePassword']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login',[LoginController::class, 'login']);
// Route::group(['middleware' => ['jwt']], function (){

    Route::prefix('house')->group(function(){
        Route::get('/','HouseController@index');
        Route::get('/{id}','HouseController@show');
        Route::put('/{id}', [HouseController::class, 'update']);




        // MyHomeList
        Route::get('/list/{id}','\App\Http\Controllers\HouseController@myHomeList');
        Route::post('/createHome','\App\Http\Controllers\HouseController@store');
    });
// });
Route::prefix('user')->group(function(){
    Route::get('/','UserController@index');
    Route::get('/{id}','UserController@show');
    Route::put('/{id}','UserController@update');
});
