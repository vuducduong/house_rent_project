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
        'users_id',
        
    ];
    function houses(){
        return $this->hasMany(House::class);
    }
    function users(){
        return $this->beLongTo(User::class);
    }
}
