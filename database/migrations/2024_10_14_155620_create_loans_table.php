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
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->string('loan_code', 50)->index();
            $table->string('loan_name', 50);
            $table->decimal('max_loan_amount', 18,2)->default('0.00');
            $table->bigInteger('loan_period');
            $table->decimal('interest', 18,2)->default('0.00');
            $table->decimal('service_fee', 18,2)->default('0.00');
            $table->string('status', 1)->default('Y');
            $table->text('loan_purpose');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
