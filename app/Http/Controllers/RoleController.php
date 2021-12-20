<?php

namespace App\Http\Controllers;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function addRole(Request $request)
    {
        //validate request
        $this->validate($request,[
            'name'=>'required'
        ]);


        return  Role::create([
            'name'=> $request->name
        ]);
    }

    public function editRole(Request $request)
    {
        //validate request
        $this->validate($request,[
            'name'=>'required',
            'id'=>'required'
        ]);


        return  Role::where('id',$request->id)->update([
            'name'=> $request->name
        ]);
    }

    public function deleteRole(Request $request)
    {
        //validate request
        $this->validate($request,[
            'name'=>'required'
        ]);

        return  Role::where('id',$request->id)->delete();

    }

    public function getRole()
    {
        return  Role::orderby('id','desc')->get();
    }
}
