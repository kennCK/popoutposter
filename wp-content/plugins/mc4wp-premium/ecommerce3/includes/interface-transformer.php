<?php

interface MC4WP_Ecommerce_Object_Transformer
{
    public function get_customer_id($email_address);
    public function get_cart_id($customer_email_address);
    public function customer($object);
    public function order(WC_Order $order);
    public function order_id(WC_Order $order);
    public function order_number(WC_Order $order);
    public function product(WC_Product $product);
    public function product_id(WC_Product $product);
    public function product_variants(WC_Product $product);
    public function cart(array $customer, array $cart_items);
}
