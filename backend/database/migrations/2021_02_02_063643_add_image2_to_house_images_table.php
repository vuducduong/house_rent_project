<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImage2ToHouseImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('house_images', function (Blueprint $table) {
            $table->string('image2');
            $table->string('image3');
            $table->string('image4');
            $table->string('image5');
            $table->string('image6');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('house_images', function (Blueprint $table) {
            //
        });
    }
}
