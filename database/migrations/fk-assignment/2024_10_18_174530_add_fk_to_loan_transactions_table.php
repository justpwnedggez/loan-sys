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
        Schema::table('loan_transactions', function (Blueprint $table) {
            $table->foreign('mem_id')
                ->references('id')
                ->on('membership')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('loan_id')
                ->references('id')
                ->on('loans')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('loan_collat_id')
                ->references('id')
                ->on('collaterals')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('approval_id')
                ->references('id')
                ->on('approvals')
                ->onDelete('set null')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('loan_transactions', function (Blueprint $table) {
            //
        });
    }
};
