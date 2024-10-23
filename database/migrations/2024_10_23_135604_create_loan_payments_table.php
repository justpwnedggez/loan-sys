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
        Schema::create('loan_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('loan_trans_id')->index();
            $table->unsignedBigInteger('mem_id')->index();
            $table->string('pay_code', 50);
            $table->decimal('payment_amount', 18,2);
            $table->decimal('beginning_balance', 18,2);
            $table->decimal('ending_balance', 18,2);
            $table->string('status', 1);
            $table->date('payment_date');
            $table->unsignedBigInteger('encoded_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_payments');
    }
};
