<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         //save 3 registers


        $user= new Role();
        $user->name= 'Administrador';
        $user->save();

        $user= new Role();
        $user->name= 'Vendedor';
        $user->save();


    }
}
