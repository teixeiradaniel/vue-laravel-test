<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['name', 'email', 'website', 'logo'];

    protected $dates = ['deleted_at'];

    public function jobs()
    {
        return $this->hasMany('App\Job');
    }
}
