<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\LoginController;
use App\Http\Middleware\AdminCheck;
use App\Http\Middleware\PermisionMenu;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

//Route::prefix('app')->middleware([AdminCheck::class])->group(function(){

Route::prefix('app')->middleware([AdminCheck::class])->group(function(){


    Route::post('/create_role',[RoleController::class,'addRole']);
    Route::post('/edit_role',[RoleController::class,'editRole']);
    Route::get('/get_roles',[RoleController::class,'getRole']);
    Route::post('/delete_role',[RoleController::class,'deleteRole']);

    Route::post('/create_user',[UserController::class,'addUser']);
    Route::post('/edit_user',[UserController::class,'editUser']);
    Route::get('/get_users',[UserController::class,'getUser']);
    Route::post('/delete_user',[UserController::class,'deleteUser']);
});

Route::post('app/create_product',[ProductController::class,'addProduct']);
Route::post('app/edit_product',[ProductController::class,'editProduct']);
Route::post('app/edit_product_stock',[ProductController::class,'editProductStock']);
Route::get('app/get_products',[ProductController::class,'getProduct']);
Route::post('app/delete_product',[ProductController::class,'deleteProduct']);

Route::get('/', [AdminController::class,'index']);
Route::post('app/login',[AdminController::class,'login']);
Route::get('/logout', [AdminController::class,'logout']);
Route::any('{slug}',[AdminController::class,'index']);



/*Route::get('/', [TestController::class,'controlllerMethod']);

Route::get('{any}', function(){
    return view('welcome');
});*/
