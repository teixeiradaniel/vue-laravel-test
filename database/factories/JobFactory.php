<?php

use App\Job;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Job::class, function (Faker $faker) {
    return [
        'title' => $faker->jobTitle,
        'description' => Str::random(100),
        'local' => 'São Paulo / SP',
        'remote' => 'yes',
        'type' => 1,
    ];
});
