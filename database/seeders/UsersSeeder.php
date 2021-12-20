<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //save 3 registers
        $arrays = range(0,9);
        $i=10;
        foreach ($arrays as $valor) {

            $user= new User();

            $user->name= 'jhonf'.$i;
            $user->email= 'jhonf'.$i.'@gmail.com';
            $user->password= bcrypt(123456);
            $user->role_id=  rand(1, 2);

            $user->save();

            $i++;
        }

    }
}
