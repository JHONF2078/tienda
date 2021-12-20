<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
   public function controlllerMethod()
   {
       return view('welcome');
   }

   public function Test()
   {
       return reponse()->json([
           'msg'=>'some error ocurred'
       ],422);
   }
}
