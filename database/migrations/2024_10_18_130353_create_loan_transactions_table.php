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
    Schema::create('loan_transactions', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('mem_id')->index();
        $table->unsignedBigInteger('loan_id')->index();
        $table->unsignedBigInteger('loan_collat_id')->index();
        $table->string('trans_no', 50)->index();
        $table->text('loan_collat_desc');
        $table->string('status', 1)->default('Y');
        $table->decimal('principal_amt', 18, 2)->default('0.00');
        $table->decimal('total_interest', 18, 2)->default('0.00');
        $table->decimal('service_deduction', 18, 2)->default('0.00');
        $table->decimal('cbu', 18,2)->default('0.00');
        $table->decimal('net_amt', 18, 2)->default('0.00');
        $table->unsignedBigInteger('encoded_by')->index();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_transactions');
    }
};
