<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{

    public function index(Request $request)
    {
        // first check if you are loggedin and admin user ...


        if (!Auth::check() && $request->path() !='login') {

            return redirect('/login');
        }

        if (!Auth::check() && $request->path() == 'login') {
            return view('welcome',['user'=>Auth::user()]);
        }

        // you are already logged in... so check for if you are an admin user..

        $user = Auth::user();


       /* if ($user->role_id != 1) {
            return redirect('/login');
        }*/

        if ($request->path() == 'login') {
            return redirect('/');
        }

        return view('welcome',['user'=>Auth::user()]);

    }

    public function login(Request $request)
    {
        $this->validate($request,[
            'email'=>'bail|required|email',
            'password'=>'bail|required|min:6',

        ]);

        if(Auth::attempt(['email' => $request->email, 'password' =>$request->password]))
        {
           $user=Auth::user();

          /* if($user->role_id!=1)
           {
               Auth::logout();
               return  response()->json([
                'msg'=> 'Incorrect loggin',
            ],401);
           }*/

            return  response()->json([
                'msg'=> 'You are logged im',
                'user'=>$user
            ]);

        }else{
            return  response()->json([
                'msg'=> 'Incorrect loggin',
            ],401);
        }
    }


    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }



}
