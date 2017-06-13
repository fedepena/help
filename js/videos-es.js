var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Video Tutoriales',
            subtitle: 'Una colección de videos cortos que muestran lo que puede hacer con myAbakus'
        },
        tags: {
                "*": "Todos",
                ".arrancando": "Arrancando",
                ".facturacion": "Facturación",
                ".ingresos": "Ingresos",
                ".gastos": "Gastos",
                ".efectivo": "Efectivo",
                ".inventario": "Inventario",
                ".reportes": "Reportes",
                ".porcobrar": "Por Cobrar",
                ".porpagar": "Por Pagar",
                ".items": "Items",
                ".importar": "Importar",
                ".exportar": "Exportar"
        },
        url: '../videos/',
        videos: [
                // video 3 parte 1
            {
                title: 'Cree sus impuestos y retenciones - Parte 1',
                slug: "cree-sus-impuestos-y-retenciones-parte-1",
                desc: 'Maneje los impuestos y retenciones acorde a las necesidades de su país.',
                lang: "es",
                id: "9V0MTOZLcdk",
                next: "JAsQTbqEkik",
                classes: 'sheet-img-1 ',
                tags: 'impuestos'
            },
                // video 3 parte 2
            {
                title: 'Cree sus impuestos y retenciones - Parte 2',
                slug: "cree-sus-impuestos-y-retenciones-parte-2",
                desc: 'Maneje los impuestos y retenciones acorde a las necesidades de su país.',
                lang: "es",
                id: "JAsQTbqEkik",
                classes: 'sheet-img-2',
                tags: 'impuestos'
            },
            //video 4
            {
                title: 'Cree notas crédito',
                slug: "cree-notas-credito",
                desc: 'Maneje adecuadamente los créditos dados a clientes y recibidos de proveedores.',
                lang: "en",
                id: "IuEDwIhuOEo",
                classes: 'sheet-img-3',
                tags: 'facturación ingresos gastos'
            },
            //video 5
            {
                title: 'Configure los vencimientos/términos de sus facturas',
                slug: "configure-los-vencimientos-terminos-de-sus-facturas",
                desc: 'Ahora es posible configurar los días usados para calcular el vencimiento en las facturas.',
                lang: "es",
                id: "jeXeAUYDjjM",
                classes: 'sheet-img-4 ',
                tags: 'facturacion cuentasxcobrar'
            },
            //video 6
            {
                title: 'Use múltiples listas de precios',
                slug: "use-multiples-listas-de-precios",
                desc: 'Maneje hasta cinco listas de precios y actualice fácilmente sus precios usando una plantilla de Excel.',
                lang: "es",
                id: "7tyD1wxNM8w",
                classes: 'sheet-img-5',
                tags: 'items facturacion importar'
            },
            //video 7
            {
                title: 'Vea su reporte de ingresos por tipo de ítem',
                slug: "vea-su-reporte-de-ingresos-por-tipo-de-item",
                desc: 'El reporte de ingresos por ítem está ahora agrupado por tipo de ítem.',
                lang: "es",
                id: "5rxufoEFYoc",
                classes: 'sheet-img-6',
                tags: 'ingresos reportes items'
            },
            //video 8
            {
                title: 'Exporte su información desde el Resumen',
                slug: "exporte-su-informacion-desde-el-resumen",
                desc: 'Ahora es posible exportar datos desde el Resumen, dónde tenemos el Balance general y el Estado de resultados del mes en curso.',
                lang: "es",
                id: "as-SxZ1qaXE",
                classes: 'sheet-img-1',
                tags: 'exportar'
            },
            //video 9
            {
                title: 'Cree transacciones de ingresos recurrentes',
                slug: "cree-transacciones-de-ingresos-recurrentes",
                desc: 'Las transacciones recurrentes ya no están limitadas a gastos. Usted puede ahora crear transacciones de ingresos recurrentes.',
                lang: "es",
                id: "Sc0mrIxfwQQ",
                classes: 'sheet-img-2 ',
                tags: 'ingresos'
            },
            //video 10
            {
                title: 'Determine y use los parámetros para reposición de inventario',
                slug: "determine-y-use-los-parametros-para-reposicion-de-inventario",
                desc: 'Para determinar los parámetros de reposición de inventario debemos ingresar las cantidades mínimas y máximas que queremos tener para los ítems de inventario.',
                lang: "es",
                id: "LUOCE-x8ehM",
                classes: 'sheet-img-3',
                tags: 'inventario'
            },
            //video 11
            {
                title: 'Use múltiples prefijos en facturas y otros documentos',
                slug: "use-multiples-prefijos-en-facturas-y-otros-documentos",
                desc: 'Para usar múltiples prefijos y numeración en nuestras facturas necesitamos cambiar la configuración de la factura.',
                lang: "es",
                id: "XT7-2DQYnLI",
                classes: 'sheet-img-4',
                tags: 'facturacion'
            },
            //video 12
            {
                title: 'Ingrese su inventario inicial',
                slug: "ingrese-su-inventario-inicial",
                desc: 'Para ingresar el inventario inicial necesitamos ir a controlar inventario y usar la acción agregar inventario.',
                lang: "es",
                id: "U6kRs9WOFGo",
                classes: 'sheet-img-5',
                tags: 'arrancando inventario'
            },
            //video 13
            {
                title: 'Ingrese sus saldos iniciales de efectivo',
                slug: "ingrese-sus-saldos-iniciales-de-efectivo",
                desc: 'Para ingresar nuestros saldos de efectivo vamos a Controlar - Efectivo.',
                lang: "es",
                id: "72cQvGMHuPQ",
                classes: 'sheet-img-6',
                tags: 'arrancando efectivo'
            },
            //video 14
            {
                title: 'Ingrese sus saldos iniciales de clientes y proveedores',
                slug: "ingrese-sus-saldos-iniciales-de-clientes-y-proveedores",
                desc: 'Para ingresar todas aquellas cuentas que tenemos pendientes por cobrar y por pagar debemos hacerlo a través de una transacción.',
                lang: "es",
                id: "Vnp6ZdoR3BI",
                classes: 'sheet-img-1',
                tags: 'arrancando porcobrar porpagar'
            }
        ]
    } //fin data:
});
