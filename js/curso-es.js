var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Curso de Inicio',
            subtitle: 'Contabilidad fácil para los no contadores con myAbakus',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad qui quod necessitatibus, ullam, deserunt earum obcaecati quos suscipit. Dolorum laborum quo sapiente provident adipisci ducimus eum iure eius aliquam minima.'

        },
        introduction: {
            title: "Lección 1: Introducción",
            video_1: {
                slug: 'como-y-donde-arrancar-parte-1',
                title: 'Cómo y Dónde Arrancar - Parte 1',
                desc: 'Primero lo primero: Antes de comenzar a ingresar transacciones debemos ingresar los saldos iniciales de cuentas por cobrar, cuentas por pagar, inventario y efectivo (incluyendo créditos)',
                lang: "es",
                id: "61xx5xK9hTM",
                next: "v5qQ8-xtFEw"
            },
            video_2: {
                slug: "como-y-donde-arrancar-parte-2",
                title: 'Cómo y Dónde Arrancar - Parte 2',
                desc: 'Estamos listos para comenzar: Revisemos cómo ingresar diferentes tipos de transacciones y el impacto de las mismas en las diferentes secciones de la aplicación',
                lang: "es",
                id: "v5qQ8-xtFEw"
            }
        },
        invoicing: {
            title: 'Lección 2: Facturación',
            video_1: {
                slug: "facturele-a-sus-clientes-en-forma-simple-y-elegante",
                title: "Factúrele a sus clientes en forma simple y elegante",
                desc: 'Cree y personalice sus facturas con el logo de su compañía, imprímales o envíelas directamente por email a sus clientes.',
                lang: "es",
                id: "bN-rDaysBaY"
            }

        },
        accounts: {
            title: 'Lección 3: Haga sus cobros a tiempo',
            video_1: {
                slug: "haga-sus-cobros-a-tiempo",
                title: "Haga sus cobros a tiempo",
                desc: 'Mantenga sus cuentas por cobrar al día para asegurarse que sus clientes le están pagando según lo acordado.',
                lang: "es",
                id: "K8rIA7hA2Uk"
            }

        },
        cuentasbajocontrol: {
            title: 'Lección 4: Controle su efectivo',
            video_1: {
                slug: "controle-su-efectivo",
                title: "Controle su efectivo",
                desc: 'Asegúrese que todo (lo que debería) ha sido contabilizado manteniendo sus cuentas de efectivo actualizadas y reconciliadas.',
                lang: "es",
                id: "FVv_pc9AcsU"
            }

        },
        cashflow: {
            title: 'Lección 5: Maneje su flujo de caja',
            video_1: {
                slug: "maneje-su-flujo-de-caja",
                title: "Maneje su flujo de caja",
                desc: "Manténgase “en la jugada” y evite sorpresas desagradables registrando cobros y pagos pendientes, así como gastos recurrentes.",
                lang: "es",
                id: "-z_zb0t9BlE"
            }
        },
        controlinventario: {
            title: 'Lección 6: Controle su inventario',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Mantenga las unidades físicas sincronizadas con las del sistema, sepa cuándo ordenar sus productos y vea cómo estos contribuyen (o no) a su ganancia.",
                lang: "es",
                id: "mWFxihAbFZ8"
            }
        }
    }
});