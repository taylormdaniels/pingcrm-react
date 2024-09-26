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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('admin_id');
            $table->integer('customer_id');
            $table->integer('conversation_id');
            $table->string('billing_name',64);
            $table->string('billing_company',32 );
            $table->string('billing_street_address',64);
            $table->string('billing_street_address_2',64);
            $table->string('billing_city',32);
            $table->string('billing_postcode',32);
            $table->string('billing_state',32);
            $table->string('billing_country',32);
            $table->string('billing_telephone',32);
            $table->string('billing_telephone2',32);
            $table->string('billing_email_address',96);
            $table->string('payment_method',32);
            $table->dateTime('last_modified');
            $table->dateTime('date_purchased');
            $table->decimal('orders_deposit',15,2);
            $table->string('orders_po',30);
            $table->integer('orders_status');
            $table->decimal('subtotal',10,2);
            $table->decimal('total',10,2);  
            $table->decimal('balance_due',10,2);
            $table->text('notes');
            $table->dateTime('approved_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
