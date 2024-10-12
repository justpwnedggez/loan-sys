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
        Schema::create('membership', function (Blueprint $table) {
            $table->id();
            $table->string('mem_code', 20)->index();
            $table->string('first_name', 50);
            $table->string('middle_name', 50);
            $table->string('last_name', 50);
            $table->decimal('subscription_amount', 18,2)->default('0.00');
            $table->tinyInteger('subscription_years');
            $table->string('status', 1)->default('Y');
            $table->string('present_address', 100);
            $table->string('permanent_address', 100);
            $table->date('birth_date');
            $table->tinyInteger('age');
            $table->string('birth_place');
            $table->string('religion', 50);
            $table->string('tribe', 50);
            $table->string('civil_status', 1);
            $table->string('phone_number', 20);
            $table->string('tin_no', 15);
            $table->string('highest_educ_attainment', 50);
            $table->string('occupation', 50);
            $table->string('gross_annual_income', 10);
            $table->string('cooperative_member_name', 50);
            $table->string('rsbsa', 1)->default('N');
            $table->float('farm_area', 8, 2);
            $table->string('farm_location', 50);
            $table->text('reason_for_joining');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('membership');
    }
};
