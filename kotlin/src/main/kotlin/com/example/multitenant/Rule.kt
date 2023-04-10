package com.example.multitenant;

interface Rule {
    fun apply(input: Int): Boolean
}