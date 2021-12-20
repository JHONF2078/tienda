<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

   protected $fillable=['id','name','user_id','stock'];



   public function user()
   {
       return $this->belongsTo(User::class);//a user belongs to a user
   }
}
