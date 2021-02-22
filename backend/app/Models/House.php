<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'type',
        'pricePerDay',
        'address',
        'amountOfbedrooms',
        'amountOfbathrooms',
        'description',
        'status',
        'image',
        'users_id',

    ];
    function houseImages(){
        return $this->hasMany(HouseImages::class);
    }
    function bookings(){
        return $this->beLongTo(Booking::class);
    }
    function users(){
        return $this->beLongTo(User::class);
    }
}
