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
        Schema::create('quote_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('status_description');
            $table->tinyInteger('active');
            $table->dateTime('last_modified')->nullable();
            $table->dateTime('last_accessed')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quote_statuses');
    }
};
