var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Videos',
            subtitle: 'Watch the video tutorials'
        },
        filters: [
            {
                title: "All",
                fil: "*"

            },
            {
                title: "Getting started",
                fil: "gettingstarted"

            },
            {
                title: "Invoicing",
                fil: ".invoicing"

            },
            {
                title: "Income",
                fil: ".income"

            },
            {
                title: "Expenses",
                fil: ".expenses"

            },
            {
                title: "Cash",
                fil: ".cash"

            },
            {
                title: "Inventory",
                fil: ".inventory"

            },
            {
                title: "Reports",
                fil: ".reports"

            },
            {
                title: "Customers",
                fil: ".customers"

            },
            {
                title: "Suppliers",
                fil: ".suppliers"

            },
            {
                title: "Items",
                fil: ".items"

            },
            {
                title: "Import",
                fil: ".import"

            },
            {
                title: "Export",
                fil: ".export"

            }
        ],
        url: '../videos/',
        videos: [
            //video 1
            {
                title: 'Manage multiple price lists',
                slug: 'manage-multiple-price-lists',
                desc: 'Manage up to five price lists and easily update prices using an Excel template.',
                lang: 'en',
                id: "IVGATE-wngQ",
                classes: 'sheet-img-1 gettingstarted'
            },
            //video 2
            {
                title: 'Configure the due date/terms of your invoices',
                slug: "configure-the-due-date-terms-of-your-invoices",
                desc: 'It is now possible to configure the days used to calculate due dates in invoices.',
                lang: "en",
                id: "7c0z7d4deKs",
                classes: 'sheet-img-2 invoicing'
            },
            //video 3
            {
                title: 'View your income report by item type',
                slug: "view-your-income-report-by-item-type",
                desc: 'The income by item report is now grouped by item type.',
                lang: "en",
                id: "CWwwtMMq-Jk",
                classes: 'sheet-img-3 income'

            },
            //video 4
            {
                title: 'Export your data from the Overview',
                slug: "export-your-data-from-the-overview",
                desc: 'It is now possible to export data from the Overview, where we have the Balance sheet and Income and expense    statement for the current month.',
                lang: "en",
                id: "aLjSLv3osT0",
                classes: 'sheet-img-4 expenses'
            },
            //video 5
            {
                title: 'Create recurring income transactions',
                slug: "create-recurring-income-transactions",
                desc: 'Recurring transactions are no longer limited to expenses. You can now create recurring income transactions as well.',
                lang: "en",
                id: "NyjQTmsx3oI",
                classes: 'sheet-img-5 cash'
            },
            //video 6
            {
                title: 'Setup and use the parameters to restock the inventory',
                slug: "setup-and-use-the-parameters-to-restock-the-inventory",
                desc: 'To setup the parameters to restock inventory we need to enter the minimum and maximum quantities that we want to have for inventory items.',
                lang: "en",
                id: "FA3lPbPeFRA",
                classes: 'sheet-img-1 reports'
            },
            //video 7
            {
                title: 'Use multiple prefixes on invoices and other documents',
                slug: "use-multiple-prefixes-on-invoices-and-other-documents",
                desc: 'To use multiple prefixes and numbering on our invoices we need to change the invoice settings.',
                lang: "en",
                id: "slwxy2ZD3s4",
                classes: 'sheet-img-2 customers'
            },
            //video 8
            {
                title: 'Enter your initial inventory',
                slug: "enter-your-initial-inventory",
                desc: 'To enter the initial inventory we need to go to control inventory and use the add inventory action.',
                lang: "en",
                id: "kp2B3y9WKPQ",
                classes: 'sheet-img-3 suppliers'
            },
            //video 9
            {
                title: 'Enter your starting cash balances',
                slug: "enter-your-starting-cash-balances",
                desc: 'To enter our cash balances we will control - cash.',
                lang: "en",
                id: "Ris-dlXSR7o",
                classes: 'sheet-img-3 items'
            },
            //video 10
            {
                title: 'Enter your starting balances for customers and suppliers',
                slug: "enter-your-starting-balances-for-customers-and-suppliers",
                desc: 'To enter all those accounts that we have outstanding receivable and payable we must do it through a transaction.',
                lang: "en",
                id: "fSXDJSnE3FY",
                classes: 'sheet-img-2 import export'
            }
        ]
    } //fin data:
});