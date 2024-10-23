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
        Schema::table('loan_payments', function (Blueprint $table) {
            $table->foreign('loan_id')
                ->references('id')
                ->on('loan_transactions')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('mem_id')
                ->references('id')
                ->on('membership')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('encoded_by')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('loan_payments', function (Blueprint $table) {
            //
        });
    }
};
