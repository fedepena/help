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
            }
        },
        terms: {
            title: 'Configure the due date/terms of your invoices',
            video_1: {
                slug: "configure-the-due-date-terms-of-your-invoices",
                title: 'Configure the due date/terms of your invoices',
                desc: 'It is now possible to configure the days used to calculate due dates in invoices.',
                lang: "en",
                id: "7c0z7d4deKs"
            }

        },
        report: {
            title: 'View your income report by item type',
            video_1: {
                slug: "view-your-income-report-by-item-type",
                title: 'View your income report by item type',
                desc: 'The income by item report is now grouped by item type.',
                lang: "en",
                id: "CWwwtMMq-Jk"
            }

        },
        overview: {
            title: 'Export your data from the Overview',
            video_1: {
                slug: "export-your-data-from-the-overview",
                title: 'Export your data from the Overview',
                desc: 'It is now possible to export data from the Overview, where we have the Balance sheet and Income and expense statement for the current month.',
                lang: "en",
                id: "aLjSLv3osT0"
            }
        },
        recurring: {
            title: 'Create recurring income transactions',
            video_1: {
                slug: "create-recurring-income-transactions",
                title: 'Create recurring income transactions',
                desc: 'Recurring transactions are no longer limited to expenses. You can now create recurring income transactions as well.',
                lang: "en",
                id: "NyjQTmsx3oI"
            }
        },
        setup: {
            title: 'Setup and use the parameters to restock the inventory',
            video_1: {
                slug: "setup-and-use-the-parameters-to-restock-the-inventory",
                title: 'Setup and use the parameters to restock the inventory',
                desc: 'To setup the parameters to restock inventory we need to enter the minimum and maximum quantities that we want to have for inventory items.',
                lang: "en",
                id: "FA3lPbPeFRA"
            }
        },
        prefixes: {
            title: 'Use multiple prefixes on invoices and other documents',
            video_1: {
                slug: "use-multiple-prefixes-on-invoices-and-other-documents",
                title: 'Use multiple prefixes on invoices and other documents',
                desc: 'To use multiple prefixes and numbering on our invoices we need to change the invoice settings.',
                lang: "en",
                id: "slwxy2ZD3s4"
            }
        },
        initialinventory: {
            title: 'Enter your initial inventory',
            video_1: {
                slug: "enter-your-initial-inventory",
                title: 'Enter your initial inventory',
                desc: 'To enter the initial inventory we need to go to control inventory and use the add inventory action.',
                lang: "en",
                id: "kp2B3y9WKPQ"
            }
        },
        cashbalances: {
            title: 'Enter your starting cash balances',
            video_1: {
                slug: "enter-your-starting-cash-balances",
                title: 'Enter your starting cash balances',
                desc: 'To enter our cash balances we will control - cash.',
                lang: "en",
                id: "Ris-dlXSR7o"
            }
        },
        customers: {
            title: 'Enter your starting balances for customers and suppliers',
            video_1: {
                slug: "enter-your-starting-balances-for-customers-and-suppliers",
                title: 'Enter your starting balances for customers and suppliers',
                desc: 'To enter all those accounts that we have outstanding receivable and payable we must do it through a transaction.',
                lang: "en",
                id: "fSXDJSnE3FY"
            }
        }
    }
});