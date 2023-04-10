package com.example.multitenant

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.Test

class MultiTenantRuleTest {

    @Test
    fun `should apply rule for specific tenant`() {
        val tenantRules = listOf(
            TenantRule("tenant-spain", object : Rule {
                override fun apply(input: Int): Boolean {
                    return input > 10
                }
            }),
            TenantRule("tenant-italy", object : Rule {
                override fun apply(input: Int): Boolean {
                    return input < 10
                }
            })
        )
        val ruleEngine = RuleEngine(tenantRules)

        assertEquals(true, ruleEngine.apply(15, "tenant-spain"))
        assertEquals(false, ruleEngine.apply(5, "tenant-spain"))
        assertEquals(true, ruleEngine.apply(5, "tenant-italy"))
        assertEquals(false, ruleEngine.apply(15, "tenant-italy"))
    }

    @Test
    fun `should throw exception if no rule found for tenant`() {
        val tenantRules = emptyList<TenantRule>()
        val ruleEngine = RuleEngine(tenantRules)

        assertThrows(IllegalArgumentException::class.java) {
            ruleEngine.apply(10, "tenant-spain")
        }
    }
}
