<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = [
        'startDay',
        'endDay',
        'pricePerDay',
        'houses_id',
    ];
    function house(){
        return $this->hasMany(House::class);
    }
    function user(){
        return $this->beLongTo(User::class);
    }
}
