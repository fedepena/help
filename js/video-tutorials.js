var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Videos',
            subtitle: 'Watch the video tutorials'
        },
        dir: '../videos/',
        multipleprice: {
            title: 'Manage multiple price lists',
            video_1: {
                slug: 'manage-multiple-price-lists',
                title: 'Manage multiple price lists',
                desc: 'Manage up to five price lists and easily update prices using an Excel template.',
                lang: 'en',
                id: "IVGATE-wngQ"
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
        cashcontrol: {
            title: 'Lesson 4: Cash control',
            video_1: {
                slug: "control-your-cash",
                title: 'Control your cash',
                desc: 'Make sure everything (that should) has been accounted by keeping your cash accounts up to date and reconciled.',
                lang: "en",
                id: "YI5jDEjOq8A"
            }
        },
        cashflow: {
            title: 'Lesson 5: Cash flow management ',
            video_1: {
                slug: "manage-your-cash-flow",
                title: 'Manage your cash flow',
                desc: 'Stay ahead of the game and avoid nasty surprises by entering pending collections and payments, as well as recurring expenses.',
                lang: "en",
                id: "dziMNOGtabA"
            }
        },
        inventory: {
            title: 'Lesson 6: Inventory control',
            video_1: {
                slug: "control-your-inventory",
                title: 'Control your inventory',
                desc: 'Maintain system and real quantities synced, know when to reorder, and see how your products are contributing (or not) to your bottom line.',
                lang: "en",
                id: "bTJ4-rnkzqk"
            }
        }
    }
});