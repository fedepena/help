var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Curso de Inicio',
            subtitle: 'Contabilidad fácil para los no contadores con myAbakus',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad qui quod necessitatibus, ullam, deserunt earum obcaecati quos suscipit. Dolorum laborum quo sapiente provident adipisci ducimus eum iure eius aliquam minima.'

        },
        introduction: {
            title: 'Lección 1: Introducción',
            video_1: {
                slug: "como-y-donde-arrancar-parte-1",
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
        cashflow: {
            title: 'Lección 4: Maneje su flujo de caja',
            video_1: {
                slug: "maneje-su-flujo-de-caja",
                title: "Maneje su flujo de caja",
                desc: "Manténgase “en la jugada” y evite sorpresas desagradables registrando cobros y pagos pendientes, así como gastos recurrentes.",
                lang: "es",
                id: "-z_zb0t9BlE"
            }
        },
        revisarpagos: {
            title: 'Lección 5: Revise los pagos de ingresos y gastos',
            video_1: {
                slug: "revise-los-pagos-de-ingresos-y-gastos",
                title: "Revise los pagos de ingresos y gastos",
                desc: "Manténgase \"encima\"  de las entradas y salidas de efectivo para que su información esté al día y sea confiable .",
                lang: "es",
                id: "pzuHulN2N88"
            }
        },
        cashcontrol: {
            title: 'Lección 6: Controle su efectivo',
            video_1: {
                slug: "controle-su-efectivo",
                title: "Controle su efectivo",
                desc: "Asegúrese que todo (lo que debería) ha sido contabilizado manteniendo sus cuentas de efectivo actualizadas y reconciliadas.",
                lang: "es",
                id: "FVv_pc9AcsU"
            }
        },
        inventory: {
            title: 'Lección 7: Cree sus impuestos y retenciones',
            video_1: {
                slug: "cree-sus-impuestos-y-retenciones-parte-1",
                title: "Cree sus impuestos y retenciones - Parte 1",
                desc: "Maneje los impuestos y retenciones acorde a las necesidades de su país.",
                lang: "es",
                id: "9V0MTOZLcdk",
                next: "JAsQTbqEkik"
            },
            video_2: {
                slug: "cree-sus-impuestos-y-retenciones-parte-2",
                title: "Cree sus impuestos y retenciones - Parte 2",
                desc: "Maneje los impuestos y retenciones acorde a las necesidades de su país.",
                lang: "es",
                id: "JAsQTbqEkik"
            }
        },
        creditos: {
            title: 'Lección 8: Cree notas crédito',
            video_1: {
                slug: "cree-notas-credito",
                title: "Cree notas crédito",
                desc: "Maneje adecuadamente los créditos dados a clientes y recibidos de proveedores.",
                lang: "es",
                id: "IuEDwIhuOEo"
            }
        },
        vencimientos: {
            title: 'Lección 9: Configure los vencimientos/términos de sus facturas',
            video_1: {
                slug: "configure-los-vencimientos-terminos-de-sus-facturas",
                title: "Configure los vencimientos\/términos de sus facturas",
                desc: "Ahora es posible configurar los días usados para calcular el vencimiento en las facturas.",
                lang: "es",
                id: "jeXeAUYDjjM"
            }
        },
        precios: {
            title: 'Lección 10: Use múltiples listas de precios',
            video_1: {
                slug: "use-multiples-listas-de-precios",
                title: "Use múltiples listas de precios",
                desc: "Maneje hasta cinco listas de precios y actualice fácilmente sus precios usando una plantilla de Excel.",
                lang: "es",
                id: "7tyD1wxNM8w"
            }
        },
        item: {
            title: 'Lección 11: Vea su reporte de ingresos por tipo de ítem',
            video_1: {
                slug: "vea-su-reporte-de-ingresos-por-tipo-de-item",
                title: "Vea su reporte de ingresos por tipo de ítem",
                desc: "El reporte de ingresos por ítem está ahora agrupado por tipo de ítem.",
                lang: "es",
                id: "5rxufoEFYoc"
            }
        },
        resumen: {
            title: 'Lección 12: Exporte su información desde el Resumen',
            video_1: {
                slug: "exporte-su-informacion-desde-el-resumen",
                title: "Exporte su información desde el Resumen",
                desc: "Ahora es posible exportar datos desde el Resumen, dónde tenemos el Balance general y el Estado de resultados del mes en curso.",
                lang: "es",
                id: "as-SxZ1qaXE"
            }
        },
        recurrente: {
            title: 'Lección 13: Cree transacciones de ingresos recurrentes',
            video_1: {
                slug: "cree-transacciones-de-ingresos-recurrentes",
                title: "Cree transacciones de ingresos recurrentes",
                desc: "Las transacciones recurrentes ya no están limitadas a gastos. Usted puede ahora crear transacciones de ingresos recurrentes.",
                lang: "es",
                id: "Sc0mrIxfwQQ"
            }
        },
        reposicion: {
            title: 'Lección 14: Determine y use los parámetros para reposición de inventario',
            video_1: {
                slug: "determine-y-use-los-parametros-para-reposicion-de-inventario",
                title: "Determine y use los parámetros para reposición de inventario",
                desc: "Para determinar los parámetros de reposición de inventario debemos ingresar las cantidades mínimas y máximas que queremos tener para los ítems de inventario.",
                lang: "es",
                id: "LUOCE-x8ehM"
            }
        },
        prefijos: {
            title: 'Lección 15: Use múltiples prefijos en facturas y otros documentos',
            video_1: {
                slug: "use-multiples-prefijos-en-facturas-y-otros-documentos",
                title: "Use múltiples prefijos en facturas y otros documentos",
                desc: "Para usar múltiples prefijos y numeración en nuestras facturas necesitamos cambiar la configuración de la factura.",
                lang: "es",
                id: "XT7-2DQYnLI"
            }
        },
        retenciones: {
            title: 'Lección 16: Ingrese su inventario inicial',
            video_1: {
                slug: "ingrese-su-inventario-inicial",
                title: "Ingrese su inventario inicial",
                desc: "Para ingresar el inventario inicial necesitamos ir a controlar inventario y usar la acción agregar inventario.",
                lang: "es",
                id: "U6kRs9WOFGo"
            }
        },
        saldosiniciales: {
            title: 'Lección 17: ingrese-sus-saldos-iniciales-de-efectivo',
            video_1: {
                slug: "ingrese-sus-saldos-iniciales-de-efectivo",
                title: "Ingrese sus saldos iniciales de efectivo",
                desc: "Para ingresar nuestros saldos de efectivo vamos a Controlar - Efectivo.",
                lang: "es",
                id: "72cQvGMHuPQ"
            }
        },
        saldosproveedores: {
            title: 'Lección 18: Ingrese sus saldos iniciales de clientes y proveedores',
            video_1: {
                slug: "ingrese-sus-saldos-iniciales-de-clientes-y-proveedores",
                title: "Ingrese sus saldos iniciales de clientes y proveedores",
                desc: "Para ingresar todas aquellas cuentas que tenemos pendientes por cobrar y por pagar debemos hacerlo a través de una transacción.",
                lang: "es",
                id: "Vnp6ZdoR3BI"
            }
        }
    }
});