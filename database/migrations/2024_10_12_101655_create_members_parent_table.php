<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members_parent', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mem_id');
            $table->string('parent_type', 1);
            $table->string('first_name', 50);
            $table->string('middle_name', 50);
            $table->string('last_name', 50);
            $table->timestamps();

            //foreign keys
            $table->foreign('mem_id')->references('id')->on('membership')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members_parent');
    }
};
