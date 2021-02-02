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
        
    ];
    function houseImages(){
        return $this->hasMany(HouseImages::class);
    }
    function booking(){
        return $this->beLongTo(Booking::class);
    }
    function user(){
        return $this->beLongTo(User::class);
    }
}
