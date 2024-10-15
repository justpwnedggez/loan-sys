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
        Schema::create('general_settings', function (Blueprint $table) {
            $table->id();
            $table->string('company_code', 20)->index();
            $table->string('company_name', 50);
            $table->string('company_short_name', 50);
            $table->text('address_1');
            $table->text('address_2');
            $table->text('address_3');
            $table->bigInteger('zip_code');
            $table->string('tin_no', 20);
            $table->string('phone_no', 20);
            $table->decimal('service_fee', 18,2)->default(0.02);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('general_settings');
    }
};
