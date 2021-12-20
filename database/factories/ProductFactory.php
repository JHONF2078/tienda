<?php

namespace Database\Factories;
use App\Models\Product;
use Illuminate\Support\Str;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
      protected $model= Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->sentence(),
            'stock'=>rand(1,10),
            'user_id'=>1
        ];
    }
}
