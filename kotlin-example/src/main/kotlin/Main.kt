import com.example.multitenant.Rule
import com.example.multitenant.RuleEngine
import com.example.multitenant.TenantRule

fun main(args: Array<String>) {
    // Example usage
    val tenantRules = listOf(
        TenantRule("tenant1", object : Rule {
            override fun apply(input: Int): Boolean {
                return input > 10
            }
        }),
        TenantRule("tenant2", object : Rule {
            override fun apply(input: Int): Boolean {
                return input < 10
            }
        })
    )

    val ruleEngine = RuleEngine(tenantRules)

    // apply rule for tenant1 with input 15
    val result1 = ruleEngine.apply(15, "tenant1") // returns true

    // apply rule for tenant2 with input 5
    val result2 = ruleEngine.apply(5, "tenant2") // returns true

}