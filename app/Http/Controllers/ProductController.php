<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
        $user = Auth::user();

        //validate request
        $this->validate($request,[
            'name'=>'required'
        ]);


        return  Product::create([
            'name'=> $request->name,
            'stock'=>0,
            'user_id'=>  $user->id
        ]);
    }

    public function editProduct(Request $request)
    {
        $user = Auth::user();

        //validate request
        $this->validate($request,[
            'name'=>'required',
            'id'=>'required'
        ]);


        return  Product::where('id',$request->id)->update([
            'name'=> $request->name,
            'user_id'=>  $user->id
        ]);
    }


    public function editProductStock(Request $request)
    {
        $user = Auth::user();

        //validate request
        $this->validate($request,[
            'name'=>'required',
            'stock'=>'required',
            'id'=>'required'
        ]);

        return  Product::where('id',$request->id)->update([
            'name'=> $request->name,
            'stock'=> $request->stock,
            'user_id'=>  $user->id
        ]);
    }

    public function deleteProduct(Request $request)
    {
        //validate request
        $this->validate($request,[
            'name'=>'required'
        ]);

        return  Product::where('id',$request->id)->delete();

    }

    public function getProduct()
    {
        //return  Product::orderby('id','desc')->get();
        return  Product::with('user')->orderby('id','desc')->get();
    }
}
