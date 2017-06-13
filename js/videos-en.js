var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Video Tutorials',
            subtitle: 'A collection of short videos showing what you can do with myAbakus'
        },
        tags:
        {
                "*": "All",
                ".gettingstarted": "Getting started",
                ".invoicing" :   "Invoicing",
                ".income": "Income",
            //  ".expenses":"Expenses",
                ".cash": "Cash",
                ".inventory": "Inventory",
                ".reports": "Reports",
                ".receivable": "Receivable",
                ".payable": "Payable",
                ".items": "Items",
                ".import": "Import",
                ".export": "Export"
            },
        url: '../videos/',
        videos: [
            //video 1
            {
                title: 'Manage multiple price lists',
                slug: 'manage-multiple-price-lists',
                desc: 'Manage up to five price lists and easily update prices using an Excel template.',
                lang: 'en',
                id: "IVGATE-wngQ",
                classes: 'sheet-img-1',
                tags: 'items invoicing import'
            },
            //video 2
            {
                title: 'Configure the due date/terms of your invoices',
                slug: "configure-the-due-date-terms-of-your-invoices",
                desc: 'It is now possible to configure the days used to calculate due dates in invoices.',
                lang: "en",
                id: "7c0z7d4deKs",
                classes: 'sheet-img-2 ',
                tags: 'invoicing'
            },
            //video 3
            {
                title: 'View your income report by item type',
                slug: "view-your-income-report-by-item-type",
                desc: 'The income by item report is now grouped by item type.',
                lang: "en",
                id: "CWwwtMMq-Jk",
                classes: 'sheet-img-3',
                tags: 'income reports items'
            },
            //video 4
            {
                title: 'Export your data from the Overview',
                slug: "export-your-data-from-the-overview",
                desc: 'It is now possible to export data from the Overview, where we have the Balance sheet and Income and expense    statement for the current month.',
                lang: "en",
                id: "aLjSLv3osT0",
                classes: 'sheet-img-4',
                tags: 'export'
            },
            //video 5
            {
                title: 'Create recurring income transactions',
                slug: "create-recurring-income-transactions",
                desc: 'Recurring transactions are no longer limited to expenses. You can now create recurring income transactions as well.',
                lang: "en",
                id: "NyjQTmsx3oI",
                classes: 'sheet-img-5',
                tags: 'income'
            },
            //video 6
            {
                title: 'Setup and use the parameters to restock the inventory',
                slug: "setup-and-use-the-parameters-to-restock-the-inventory",
                desc: 'To setup the parameters to restock inventory we need to enter the minimum and maximum quantities that we want to have for inventory items.',
                lang: "en",
                id: "FA3lPbPeFRA",
                classes: 'sheet-img-6',
                tags: 'inventory'
            },
            //video 7
            {
                title: 'Use multiple prefixes on invoices and other documents',
                slug: "use-multiple-prefixes-on-invoices-and-other-documents",
                desc: 'To use multiple prefixes and numbering on our invoices we need to change the invoice settings.',
                lang: "en",
                id: "slwxy2ZD3s4",
                classes: 'sheet-img-1',
                tags: 'invoicing'
            },
            //video 8
            {
                title: 'Enter your initial inventory',
                slug: "enter-your-initial-inventory",
                desc: 'To enter the initial inventory we need to go to control inventory and use the add inventory action.',
                lang: "en",
                id: "kp2B3y9WKPQ",
                classes: 'sheet-img-2',
                tags: 'gettingstarted inventory'
            },
            //video 9
            {
                title: 'Enter your starting cash balances',
                slug: "enter-your-starting-cash-balances",
                desc: 'To enter our cash balances we will control - cash.',
                lang: "en",
                id: "Ris-dlXSR7o",
                classes: 'sheet-img-3',
                tags: 'gettingstarted cash'
            },
            //video 10
            {
                title: 'Enter your starting balances for customers and suppliers',
                slug: "enter-your-starting-balances-for-customers-and-suppliers",
                desc: 'To enter all those accounts that we have outstanding receivable and payable we must do it through a transaction.',
                lang: "en",
                id: "fSXDJSnE3FY",
                classes: 'sheet-img-4',
                tags: 'gettingstarted receivable payable'
            }
        ]
    } //fin data:
});
