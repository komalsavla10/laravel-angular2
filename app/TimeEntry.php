<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class TimeEntry extends Model
{

    protected $fillable = ['description', 'date'];
    protected $table = 'time_entries';

}