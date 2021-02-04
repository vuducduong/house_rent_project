<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HouseImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'image2',
        'image3',
        'image4',
        'image5',
        'image6',
        'houses_id',
        
    ];
    function houses(){
        return $this->beLongTo(House::class);
    }
}
