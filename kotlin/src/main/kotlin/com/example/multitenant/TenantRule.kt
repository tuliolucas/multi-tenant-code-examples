package com.example.multitenant

class TenantRule(val tenantId: String, private val rule: Rule) : Rule {
    override fun apply(input: Int): Boolean {
        // apply tenant-specific logic here
        return rule.apply(input)
    }
}
