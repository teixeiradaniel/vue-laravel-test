<?php

use App\Company;
use Faker\Generator as Faker;

$factory->define(Company::class, function (Faker $faker) {
    $companyName = $faker->company;
    return [
        'name' => $companyName,
        'email' => 'email@'.$companyName.'.domain',
        'website' => $companyName.'.domain'
    ];
});
