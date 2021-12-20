<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AdminCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {


        if($request->path()=='app/login'){
            return $next($request);
        }
        if(!Auth::check()){
            return response()->json([
                'msg' => 'You are not allowed to access this route 1... ' ,
                'url' => $request->path()
            ], 403);
        }

       /* $user = Auth::user();
        if($user->role_id!=1){
            return response()->json([
                'msg' => 'You are not allowed to access this route 2... ',
            ], 403);
        }*/



        return $next($request);


    }
}
