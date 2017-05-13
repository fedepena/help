var app = new Vue({
    el: '#app',
    data: {
        header: {
            title: 'Videos',
            subtitle: 'Vea los video tutoriales'
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
                img: 'sheet-img sheet-img-1'
            },
                // video 3 parte 2
            {
                title: 'Cree sus impuestos y retenciones - Parte 2',
                slug: "cree-sus-impuestos-y-retenciones-parte-2",
                desc: 'Maneje los impuestos y retenciones acorde a las necesidades de su país.',
                lang: "es",
                id: "JAsQTbqEkik",
                img: 'sheet-img sheet-img-1'
            },
            //video 4
            {
                title: 'Cree notas crédito',
                slug: "cree-notas-credito",
                desc: 'Maneje adecuadamente los créditos dados a clientes y recibidos de proveedores.',
                lang: "en",
                id: "IuEDwIhuOEo",
                img: 'sheet-img sheet-img-1'
            },
            //video 5
            {
                title: 'Configure los vencimientos/términos de sus facturas',
                slug: "configure-los-vencimientos-terminos-de-sus-facturas",
                desc: 'Ahora es posible configurar los días usados para calcular el vencimiento en las facturas.',
                lang: "es",
                id: "jeXeAUYDjjM",
                img: 'sheet-img sheet-img-1'
            },
            //video 6
            {
                title: 'Use múltiples listas de precios',
                slug: "use-multiples-listas-de-precios",
                desc: 'Maneje hasta cinco listas de precios y actualice fácilmente sus precios usando una plantilla de Excel.',
                lang: "es",
                id: "7tyD1wxNM8w",
                img: 'sheet-img sheet-img-1'
            },
            //video 7
            {
                title: 'Vea su reporte de ingresos por tipo de ítem',
                slug: "vea-su-reporte-de-ingresos-por-tipo-de-item",
                desc: 'El reporte de ingresos por ítem está ahora agrupado por tipo de ítem.',
                lang: "es",
                id: "5rxufoEFYoc",
                img: 'sheet-img sheet-img-1'
            },
            //video 8
            {
                title: 'Exporte su información desde el Resumen',
                slug: "exporte-su-informacion-desde-el-resumen",
                desc: 'Ahora es posible exportar datos desde el Resumen, dónde tenemos el Balance general y el Estado de resultados del mes en curso.',
                lang: "es",
                id: "as-SxZ1qaXE",
                img: 'sheet-img sheet-img-1'
            },
            //video 9
            {
                title: 'Cree transacciones de ingresos recurrentes',
                slug: "cree-transacciones-de-ingresos-recurrentes",
                desc: 'Las transacciones recurrentes ya no están limitadas a gastos. Usted puede ahora crear transacciones de ingresos recurrentes.',
                lang: "es",
                id: "Sc0mrIxfwQQ",
                img: 'sheet-img sheet-img-1'
            },
            //video 10
            {
                title: 'Determine y use los parámetros para reposición de inventario',
                slug: "determine-y-use-los-parametros-para-reposicion-de-inventario",
                desc: 'Para determinar los parámetros de reposición de inventario debemos ingresar las cantidades mínimas y máximas que queremos tener para los ítems de inventario.',
                lang: "es",
                id: "LUOCE-x8ehM",
                img: 'sheet-img sheet-img-1'
            },
            //video 11
            {
                title: 'Use múltiples prefijos en facturas y otros documentos',
                slug: "use-multiples-prefijos-en-facturas-y-otros-documentos",
                desc: 'Para usar múltiples prefijos y numeración en nuestras facturas necesitamos cambiar la configuración de la factura.',
                lang: "es",
                id: "XT7-2DQYnLI",
                img: 'sheet-img sheet-img-1'
            },
            //video 12
            {
                title: 'Ingrese su inventario inicial',
                slug: "ingrese-su-inventario-inicial",
                desc: 'Para ingresar el inventario inicial necesitamos ir a controlar inventario y usar la acción agregar inventario.',
                lang: "es",
                id: "U6kRs9WOFGo",
                img: 'sheet-img sheet-img-1'
            },
            //video 13
            {
                title: 'Ingrese sus saldos iniciales de efectivo',
                slug: "ingrese-sus-saldos-iniciales-de-efectivo",
                desc: 'Para ingresar nuestros saldos de efectivo vamos a Controlar - Efectivo.',
                lang: "es",
                id: "72cQvGMHuPQ",
                img: 'sheet-img sheet-img-1'
            },
            //video 14
            {
                title: 'Ingrese sus saldos iniciales de clientes y proveedores',
                slug: "ingrese-sus-saldos-iniciales-de-clientes-y-proveedores",
                desc: 'Para ingresar todas aquellas cuentas que tenemos pendientes por cobrar y por pagar debemos hacerlo a través de una transacción.',
                lang: "es",
                id: "Vnp6ZdoR3BI",
                img: 'sheet-img sheet-img-1'
            }
        ]
    } //fin data:
});