<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HouseImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'houses_id',
        
    ];
    function house(){
        return $this->hasMany(House::class);
    }
}
