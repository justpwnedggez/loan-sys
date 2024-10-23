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
        Schema::create('approvals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('loan_trans_id')->nullable()->index();
            $table->unsignedBigInteger('mem_trans_id')->nullable()->index();
            $table->string('approve_code', 50)->index();
            $table->string('trans_type', 20);
            $table->text('approve_desc');
            $table->string('status', 4);
            $table->unsignedBigInteger('approved_by')->index();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('approvals');
    }
};
