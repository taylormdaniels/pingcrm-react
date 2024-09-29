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
        Schema::create('quotes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('account_id');
            $table->foreignId('conversation_id')->nullable();
            $table->foreignId('quotes_status')->nullable();
            $table->decimal('subtotal',10,2)->nullable();
            $table->smallInteger('priority')->nullable();
            $table->dateTime('last_accessed')->nullable();
            $table->tinyInteger('show_total')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quotes');
    }
};
