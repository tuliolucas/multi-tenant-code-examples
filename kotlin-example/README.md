# Multi-Tenant Rule Engine

This project provides a multi-tenant rule engine implementation in Kotlin. The rule engine can apply different rules based on the tenant ID, allowing for customized behavior for each tenant.

## Usage
To use the multi-tenant rule engine, first create a list of TenantRule objects, where each TenantRule contains the tenant ID and a Rule object:

```kotlin
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
```

Once you have the tenantRules list, create a RuleEngine object with the list and call the apply method to apply the rule for a specific tenant:
```kotlin
val ruleEngine = RuleEngine(tenantRules)
val result = ruleEngine.apply(input, tenantId)
```

Where input is the input value to apply the rule to, and tenantId is the ID of the tenant to apply the rule for.

## Unit Tests
This project includes a unit test class, MultiTenantRuleTest, which tests the multi-tenant rule engine implementation. You can run the tests with the following command:

```
./gradlew test
```

###License
This project is licensed under the MIT License. See the LICENSE file for details.





