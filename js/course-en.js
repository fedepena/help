var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Getting Started Course',
            subtitle: 'Easy Accounting for Non-Accountants with myAbakus',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad qui quod necessitatibus, ullam, deserunt earum obcaecati quos suscipit. Dolorum laborum quo sapiente provident adipisci ducimus eum iure eius aliquam minima.'

        },
        introduction: {
            title: 'Lesson 1: Introduction',
            video_1: {
                slug: 'how-and-where-to-start-part-1',
                title: 'How and Where to Start - Part 1',
                desc: 'First things first: Before we start entering transactions, we must enter the initial balances for receivables, payables, inventory and cash (including credits)',
                lang: 'en',
                id: "3oXh3B7fjE8",
                next: "Dq-WLR00uNg"
            },
            video_2: {
                slug: "how-and-where-to-start-part-2",
                title: 'How and Where to Start - Part 2',
                desc: 'We are ready to start: Let’s review how to enter different type of transactions and their impact on the different sections of the application',
                lang: "en",
                id: "Dq-WLR00uNg"
            }
        },
        invoicing: {
            title: 'Lesson 2: Invoicing',
            video_1: {
                slug: "invoice-your-customers-in-a-simple-and-elegant-way",
                title: 'Invoice your customers in a simple and elegant way',
                desc: 'Create and customize your invoices with your companys logo, print them, or email them directly to your customers.',
                lang: "en",
                id: "4nTPEaEAx_Q"
            }

        },
        accounts: {
            title: 'Lesson 3: Accounts receivable',
            video_1: {
                slug: "get-paid-on-time",
                title: 'Get paid on time',
                desc: 'Keep your sales and collection data up to date to make sure customers are paying you when and how they should.',
                lang: "en",
                id: "U6PN3F5q-C0"
            }

        },
        inventory: {
            title: 'Lesson 4: Inventory control',
            video_1: {
                slug: "control-your-inventory",
                title: 'Control your inventory',
                desc: 'Maintain system and real quantities synced, know when to reorder, and see how your products are contributing (or not) to your bottom line.',
                lang: "en",
                id: "bTJ4-rnkzqk"
            }
        },
        cashcontrol: {
            title: 'Lesson 5: Cash control',
            video_1: {
                slug: "control-your-cash",
                title: 'Control your cash',
                desc: 'Make sure everything (that should) has been accounted by keeping your cash accounts up to date and reconciled.',
                lang: "en",
                id: "YI5jDEjOq8A"
            }
        },
        cashflow: {
            title: 'Lesson 6: Cash flow management ',
            video_1: {
                slug: "manage-your-cash-flow",
                title: 'Manage your cash flow',
                desc: 'Stay ahead of the game and avoid nasty surprises by entering pending collections and payments, as well as recurring expenses.',
                lang: "en",
                id: "dziMNOGtabA"
            }
        },
        pricelist: {
            title: 'Lesson 7: More price lists',
            video_1: {
                slug: "manage-multiple-price-lists",
                title: 'Manage multiple price lists',
                desc: 'Manage up to five price lists and easily update prices using an Excel template.',
                lang: "en",
                id: "IVGATE-wngQ"
            }
        },
        dateterms: {
            title: 'Lesson 8: Configurable due date/terms',
            video_1: {
                slug: "configure-the-due-date-terms-of-your-invoices",
                title: 'Configure the due date\/terms of your invoices',
                desc: 'It is now possible to configure the days used to calculate due dates in invoices.',
                lang: "en",
                id: "7c0z7d4deKs"
            }
        },
        itemtype: {
            title: 'Lesson 9: Income report by item type',
            video_1: {
                slug: "view-your-income-report-by-item-type",
                title: 'View your income report by item type',
                desc: 'The income by item report is now grouped by item type.',
                lang: "en",
                id: "CWwwtMMq-Jk"
            }
        },
        overview: {
            title: 'Lesson 10: Exporting from the Overview',
            video_1: {
                slug: "export-your-data-from-the-overview",
                title: 'Export your data from the Overview',
                desc: 'It is now possible to export data from the Overview, where we have the Balance sheet and Income and expense statement for the current month.',
                lang: "en",
                id: "aLjSLv3osT0"
            }
        },
        recurring: {
            title: 'Lesson 11: Recurring Income',
            video_1: {
                slug: "create-recurring-income-transactions",
                title: 'Create recurring income transactions',
                desc: 'Recurring transactions are no longer limited to expenses. You can now create recurring income transactions as well.',
                lang: "en",
                id: "NyjQTmsx3oI"
            }
        },
        restock: {
            title: 'Lesson 12: Setup and use the parameters to restock the inventory',
            video_1: {
                slug: "setup-and-use-the-parameters-to-restock-the-inventory",
                title: '',
                desc: 'To setup the parameters to restock inventory we need to enter the minimum and maximum quantities that we want to have for inventory items.',
                lang: "en",
                id: "FA3lPbPeFRA"
            }
        },
        prefixes: {
            title: 'Lesson 13: Use multiple prefixes on invoices and other documents',
            video_1: {
                slug: "use-multiple-prefixes-on-invoices-and-other-documents",
                title: 'Use multiple prefixes on invoices and other documents',
                desc: 'To use multiple prefixes and numbering on our invoices we need to change the invoice settings.',
                lang: "en",
                id: "slwxy2ZD3s4"
            }
        },
        initinventory: {
            title: 'Lesson 14: Enter your initial inventory',
            video_1: {
                slug: "enter-your-initial-inventory",
                title: 'Enter your initial inventory',
                desc: 'To enter the initial inventory we need to go to control inventory and use the add inventory action.',
                lang: "en",
                id: "kp2B3y9WKPQ"
            }
        },
        balances: {
            title: 'Lesson 15: Enter your starting cash balances',
            video_1: {
                slug: "enter-your-starting-cash-balances",
                title: 'Enter your starting cash balances',
                desc: 'To enter our cash balances we will control - cash.',
                lang: "en",
                id: "Ris-dlXSR7o"
            }
        },
        suppliers: {
            title: 'Lesson 16: Enter your starting balances for customers and suppliers',
            video_1: {
                slug: "enter-your-starting-balances-for-customers-and-suppliers",
                title: 'Enter your starting balances for customers and suppliers',
                desc: 'To enter all those accounts that we have outstanding receivable and payable we must do it through a transaction.',
                lang: "en",
                id: "fSXDJSnE3FY"
            }
        },
        busines: {
            title: 'Lesson 17: Keep your business finances under control and up to date',
            video_1: {
                slug: "keep-your-business-finances-under-control-and-up-to-date",
                title: 'Keep your business finances under control and up to date',
                desc: 'Take the financial reins of your business and keep its accounts in order and up to date.',
                lang: "en",
                id: "f0dSeD3q3Ns"
            }
        }
    }
});