var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Getting Started Course',
            subtitle: {
                name: 'Easy Accounting for Non-Accountants with myAbakus',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad qui quod necessitatibus, ullam, deserunt earum obcaecati quos suscipit. Dolorum laborum quo sapiente provident adipisci ducimus eum iure eius aliquam minima.'
            }
        },
        Introduction: {
            title: 'Lesson 1: Introduction',
            content: {
                name: 'Keep your business finances under control and up to date',
                description: 'Take the financial reins of your business and keep its accounts in order and up to date.'
            }
        },
        invoicing: {
            title: 'Lesson 2: Invoicing',
            content: {
                name: 'Invoice your customers in a simple and elegant way',
                description: 'Create and customize your invoices with your companys logo, print them, or email them directly to your customers.'
            }

        },
        Accounts: {
            title: 'Lesson 3: Accounts receivable',
            content: {
                name: 'Get paid on time',
                description: 'Keep your sales and collection data up to date to make sure customers are paying you when and how they should.'
            }

        },
        CashControl: {
            title: 'Lesson 4: Cash control',
            content: {
                name: 'Control your cash',
                description: 'Make sure everything (that should) has been accounted by keeping your cash accounts up to date and reconciled.'
            }
        },
        CashFlow: {
            title: 'Lesson 5: Cash flow management',
            content: {
                name: 'Manage your cash flow',
                description: 'Stay ahead of the game and avoid nasty surprises by entering pending collections and payments, as well as recurring expenses.'
            }
        },
        Inventory: {
            title: 'Lesson 6: Inventory control',
            content: {
                name: 'Control your inventory',
                description: 'Maintain system and real quantities synced, know when to reorder, and see how your products are contributing (or not) to your bottom line.'
            }
        }
    }
});