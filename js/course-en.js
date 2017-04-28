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
        introduction: {
            title: 'Lesson 1: Introduction',
            videoOne: {
                slug: "how-and-where-to-start-part-1",
                title: 'How and Where to Start - Part 1',
                under: 'First things first: Before we start entering transactions, we must enter the initial balances for receivables, payables, inventory and cash (including credits)',
                lang: "en",
                id: "3oXh3B7fjE8",
                next: "Dq-WLR00uNg"
            },
            videoTwo: {
                slug: "how-and-where-to-start-part-2",
                title: 'How and Where to Start - Part 2',
                under: 'We are ready to start: Let’s review how to enter different type of transactions and their impact on the different sections of the application',
                lang: "en",
                id: "Dq-WLR00uNg"
            }
        },
        invoicing: {
            title: 'Lesson 2: Invoicing',
            videoThree: {
                title: 'Invoice your customers in a simple and elegant way',
                under: 'Create and customize your invoices with your companys logo, print them, or email them directly to your customers.'
            }

        },
        accounts: {
            title: 'Lesson 3: Accounts receivable',
            videoFour: {
                title: 'Get paid on time',
                under: 'Keep your sales and collection data up to date to make sure customers are paying you when and how they should.'
            }

        },
        cashcontrol: {
            title: 'Lesson 4: Cash control',
            videoFive: {
                title: 'Control your cash',
                under: 'Make sure everything (that should) has been accounted by keeping your cash accounts up to date and reconciled.'
            }
        },
        cashflow: {
            title: 'Lesson 5: Cash flow management',
            videoSix: {
                title: 'Manage your cash flow',
                under: 'Stay ahead of the game and avoid nasty surprises by entering pending collections and payments, as well as recurring expenses.'
            }
        },
        inventory: {
            title: 'Lesson 6: Inventory control',
            videoSeven: {
                title: 'Control your inventory',
                under: 'Maintain system and real quantities synced, know when to reorder, and see how your products are contributing (or not) to your bottom line.'
            }
        }
    }
});