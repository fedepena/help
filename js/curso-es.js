var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Curso de Inicio',
            subtitle: {
                name: 'Contabilidad fácil para los no contadores con myAbakus',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad qui quod necessitatibus, ullam, deserunt earum obcaecati quos suscipit. Dolorum laborum quo sapiente provident adipisci ducimus eum iure eius aliquam minima.'
            }
        },
        introduction: {
            title: 'Lección 1: Introducción',
            videoOne: {
                slug: "como-y-donde-arrancar-parte-1",
                title: 'Cómo y Dónde Arrancar - Parte 1',
                under: 'Primero lo primero: Antes de comenzar a ingresar transacciones debemos ingresar los saldos iniciales de cuentas por cobrar, cuentas por pagar, inventario y efectivo (incluyendo créditos)',
                lang: "es",
                id: "61xx5xK9hTM",
                next: "v5qQ8-xtFEw"
            },
            videoTwo: {
                slug: "como-y-donde-arrancar-parte-2",
                title: 'Cómo y Dónde Arrancar - Parte 2',
                under: 'Estamos listos para comenzar: Revisemos cómo ingresar diferentes tipos de transacciones y el impacto de las mismas en las diferentes secciones de la aplicación',
                lang: "es",
                id: "v5qQ8-xtFEw"
            }
        },
        invoicing: {
            title: 'Lección 2: Facturación',
            videoThree: {
                slug: "facturele-a-sus-clientes-en-forma-simple-y-elegante",
                wtitle: "Factúrele a sus clientes en forma simple y elegante",
                under: 'Cree y personalice sus facturas con el logo de su compañía, imprímales o envíelas directamente por email a sus clientes.',
                lang: "es",
                id: "bN-rDaysBaY"
            }

        },
        accounts: {
            title: 'Lección 3: Cuentas por cobrar',
            videoFour: {
                slug: "haga-sus-cobros-a-tiempo",
                title: "Haga sus cobros a tiempo",
                under: 'Mantenga sus cuentas por cobrar al día para asegurarse que sus clientes le están pagando según lo acordado.',
                lang: "es",
                id: "K8rIA7hA2Uk"
            }

        },
        cashcontrol: {
            title: 'Lección 4: Control de efectivo',
            videoFive: {
                slug: "maneje-su-flujo-de-caja",
                title: "Maneje su flujo de caja",
                under: "Manténgase “en la jugada” y evite sorpresas desagradables registrando cobros y pagos pendientes, así como gastos recurrentes.",
                lang: "es",
                id: "-z_zb0t9BlE"
            }
        },
        cashflow: {
            title: 'Lección 5: Gestión del flujo de caja',
            videoSix: {
                slug: "revise-los-pagos-de-ingresos-y-gastos",
                title: "Revise los pagos de ingresos y gastos",
                under: "Manténgase \"encima\" de las entras y salidas de efectivo para que su información esté al día y sea confiable .",
                lang: "es",
                id: "pzuHulN2N88"
            }
        },
        inventory: {
            title: 'Lección 6: Control de Efectivo',
            videoSeven: {
                slug: "controle-su-efectivo",
                title: "Controle su efectivo",
                under: "Asegúrese que todo (lo que debería) ha sido contabilizado manteniendo sus cuentas de efectivo actualizadas y reconciliadas.",
                lang: "es",
                id: "FVv_pc9AcsU"
            }
        },
        inventario: {
            title: 'Lección 6: Control de inventario',
            videoNine: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                under: "Mantenga las unidades físicas sincronizadas con las del sistema, sepa cuándo ordenar sus productos y vea cómo estos contribuyen (o no) a su ganancia.",
                lang: "es",
                id: "mWFxihAbFZ8"
            }
        },
        efectivo: {
            title: 'Lección 7: Control de Efectivo',
            videoTen: {
                slug: "cree-sus-impuestos-y-retenciones-parte-1",
                title: "Cree sus impuestos y retenciones - Parte 1",
                under: "Maneje los impuestos y retenciones acorde a las necesidades de su país.",
                lang: "es",
                id: "9V0MTOZLcdk"
            },
            videoEleven: {
                slug: "cree-sus-impuestos-y-retenciones-parte-2",
                title: "Cree sus impuestos y retenciones - Parte 2",
                under: "Maneje los impuestos y retenciones acorde a las necesidades de su país.",
                lang: "es",
                id: "JAsQTbqEkik"
            }
        },
        vencimientos: {
            title: 'Lección 8: Control de Efectivo',
            videoTwelve: {
                slug: "configure-los-vencimientos-terminos-de-sus-facturas",
                title: "Configure los vencimientos\/términos de sus facturas",
                desc: "Ahora es posible configurar los días usados para calcular el vencimiento en las facturas.",
                lang: "es",
                id: "jeXeAUYDjjM"
            }
        },
    }
});