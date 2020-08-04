<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Fulano de Tal',
            'email' => 'teste@oxentejs.com',
            'password' => Hash::make('password'),
        ]);

        factory(App\User::class, 3)->create()->each(function ($user) {
            $user->companies()->createMany(
                factory(App\Company::class, 5)->make()->toArray()
            );

            $user->companies()->each(function ($company) {
                $company->jobs()->createMany(
                    factory(App\Job::class, rand(8, 16))->make()->toArray()
                );
            });

        });
    }
}
