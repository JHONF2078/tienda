<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function addUser(Request $request)
    {
        //validate request

        $this->validate($request,[
            'name'=>'required',
            'email'=>'bail|required|email|unique:users',
            'password'=>'bail|required|min:6',
            'role_id'=>'required'
        ]);
        $password=bcrypt($request->password);


        return  User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> $password,
            'role_id'=> $request->role_id
        ]);
    }

    public function editUser(Request $request)
    {
        $this->validate($request,[
            'name'=>'required',
            'email'=>"bail|required|email|unique:users,email,$request->id",
            'password'=>'bail|required|min:6',
            'role_id'=>'required'
        ]);
        $password=bcrypt($request->password);


        return   User::where('id',$request->id)->update([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> $password,
            'role_id'=> $request->role_id
        ]);
    }

    public function deleteUser(Request $request)
    {
        //validate request
        $this->validate($request,[
            'name'=>'required'
        ]);

        return  User::where('id',$request->id)->delete();

    }

    public function getUser()
    {
       // return  User::orderby('id','desc')->get();
       return  User::with('role')->orderby('id','desc')->get();
    }
}
