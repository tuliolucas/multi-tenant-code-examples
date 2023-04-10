package com.example.multitenant

class RuleEngine(private val rules: List<Rule>) {
    fun apply(input: Int, tenantId: String): Boolean {
        val tenantRule = rules.filterIsInstance<TenantRule>().find { it.tenantId == tenantId }
        return tenantRule?.apply(input) ?: throw IllegalArgumentException("No rule found for tenant")
    }
}