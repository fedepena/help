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
            title: 'Lección 3: Cuentas por cobrar',
            video_1: {
                slug: "haga-sus-cobros-a-tiempo",
                title: "Haga sus cobros a tiempo",
                desc: 'Mantenga sus cuentas por cobrar al día para asegurarse que sus clientes le están pagando según lo acordado.',
                lang: "es",
                id: "K8rIA7hA2Uk"
            }

        },
        cashflow: {
            title: 'Lección 4: Manejo de flujo de caja',
            video_1: {
                slug: "maneje-su-flujo-de-caja",
                title: "Maneje su flujo de caja",
                desc: "Manténgase “en la jugada” y evite sorpresas desagradables registrando cobros y pagos pendientes, así como gastos recurrentes.",
                lang: "es",
                id: "-z_zb0t9BlE"
            }
        },
        revisarpagos: {
            title: 'Lección 5: Cómo revisar los pagos de ingresos y gastos',
            video_1: {
                slug: "maneje-su-flujo-de-caja",
                title: "Maneje su flujo de caja",
                desc: "Manténgase ´encima´ de las entrasdas y salidas de efectivo para que su información esté al día y sea confiable .",
                lang: "es",
                id: "FVv_pc9AcsU"
            }
        },
        cashcontrol: {
            title: 'Lección 6: Control de efectivo',
            video_1: {
                slug: "maneje-su-flujo-de-caja",
                title: "Maneje su flujo de caja",
                desc: "Asegúrese que todo (lo que debería) ha sido contabilizado manteniendo sus cuentas de efectivo actualizadas y reconciliadas.",
                lang: "es",
                id: "FVv_pc9AcsU"
            }
        },
        inventory: {
            title: 'Lección 7: Cómo crear impuestos y retenciones',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario Parte - 1",
                desc: "Maneje los impuestos y retenciones acorde a las necesidades de su país.",
                lang: "es",
                id: "9V0MTOZLcdk"
            },
            video_2: {
                slug: "controle-su-inventario",
                title: "Controle su inventario Parte - 2",
                desc: "Maneje los impuestos y retenciones acorde a las necesidades de su país.",
                lang: "es",
                id: "JAsQTbqEkik"
            }
        },
        creditos: {
            title: 'Lección 8: Cómo crear notas crédito',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Maneje adecuadamente los créditos dados a clientes y recibidos de proveedores.",
                lang: "es",
                id: "IuEDwIhuOEo"
            }
        },
        vencimientos: {
            title: 'Lección 9: Vencimientos/términos configurables',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Ahora es posible configurar los días usados para calcular el vencimiento en las facturas.",
                lang: "es",
                id: "jeXeAUYDjjM"
            }
        },
        precios: {
            title: 'Lección 10: Más listas de precios',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Maneje hasta cinco listas de precios y actualice fácilmente sus precios usando una plantilla de Excel.",
                lang: "es",
                id: "7tyD1wxNM8w"
            }
        },
        item: {
            title: 'Lección 11: Reportes de ingresos por tipo de ítem',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "El reporte de ingresos por ítem está ahora agrupado por tipo de ítem.",
                lang: "es",
                id: "5rxufoEFYoc"
            }
        },
        resumen: {
            title: 'Lección 12: Exportables en el Resumen',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Ahora es posible exportar datos desde el Resumen, dónde tenemos el Balance general y el Estado de resultados del mes en curso.",
                lang: "es",
                id: "as-SxZ1qaXE"
            }
        },
        recurrente: {
            title: 'Lección 13: Ingresos Recurrentes',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Las transacciones recurrentes ya no están limitadas a gastos. Usted puede ahora crear transacciones de ingresos recurrentes.",
                lang: "es",
                id: "Sc0mrIxfwQQ"
            }
        },
        reposicion: {
            title: 'Lección 14: Determine y use los parámetros para reposición de inventario',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Para determinar los parámetros de reposición de inventario debemos ingresar las cantidades mínimas y máximas que queremos tener para los ítems de inventario.",
                lang: "es",
                id: "LUOCE-x8ehM"
            }
        },
        prefijos: {
            title: 'Lección 15: Determine y use los parámetros para reposición de inventario',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Para usar múltiples prefijos y numeración en nuestras facturas necesitamos cambiar la configuración de la factura.",
                lang: "es",
                id: "XT7-2DQYnLI"
            }
        },
        retenciones: {
            title: 'Lección 16: Use múltiples prefijos en facturas y otros documentos',
            video_1: {
                slug: "controle-su-inventario",
                title: "Controle su inventario",
                desc: "Para usar múltiples prefijos y numeración en nuestras facturas necesitamos cambiar la configuración de la factura.",
                lang: "es",
                id: "XT7-2DQYnLI"
            }
        }
    }
});