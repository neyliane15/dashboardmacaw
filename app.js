// --- Funções de Formatação GLOBAIS ---
const formatCurrency = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const formatPercent = (value) => value.toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 2 });
const formatPercentSimple = (value) => value.toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 1 });


// --- DADOS REAIS DO DASHBOARD (ERRO DE ARRAY CORRIGIDO) ---
const dashboardData = {
    "kpiResumoAnual": {
        "indicadores": {
            "receitaTotal": {
                "label": "Receita Bruta",
                "total": 6306858.603,
                "mensal": [ 1245563.68, 978202.5, 928199.03, 552994.64, 735177.543, 551652.58, 631554.61, 683514.02, 0.0, 0.0, 0.0, 0.0 ],
                "format": "currency"
            },
            "despesasTotais": {
                "label": "Despesas (SG&A)",
                "total": 4643559.95533108,
                "mensal": [ 858224.4534, 683493.0217, 654056.2629, 484385.0156, 609846.5661, 511999.4176, 519631.8969, 213150.2155, 108773.1056, 0.0, 0.0, 0.0 ],
                "format": "currency"
            },
            "cmvPercent": {
                "label": "CMV (%)",
                "total": 0.3021709316031333,
                "mensal": [ 0.32545194, 0.28658477, 0.27202626, 0.3078066, 0.256683, 0.30794188, 0.25484805, 0.24728431, 0.0, 0.0, 0.0, 0.0 ],
                "format": "percent"
            },
            "margemLiquidaPercent": {
                "label": "Margem Líquida",
                "total": 0.3056730773624609,
                "mensal": [ 0.39140658, 0.3200263, 0.34809991, 0.16950995, 0.21800417, 0.13651241, 0.17932029, 0.68815531, 0.0, 0.0, 0.0, 0.0 ],
                "format": "percent"
            },
            "cmvPerfeitoPercent": {
                "label": "CMV Perfeito (%)",
                "total": 0.2458846207010798,
                "mensal": [ 0.24262928, 0.23359093, 0.26912219, 0.23703206, 0.24172063, 0.26181946, 0.2362182, 0.24556632, 0.0, 0.0, 0.0, 0.0 ],
                "format": "percent"
            }
        }
    },
    "comparativoCouvertMusico": {
        "meses": [ "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO" ],
        "series": [
            { "nome": "Receita de Couvert", "data": [ 7880.0, 8190.0, 8110.0, 4630.0, 9340.0, 5870.0, 4760.0, 6930.0, 0.0, 0.0, 0.0, 0.0 ] },
            { "nome": "Despesa com Músico", "data": [ 22100.0, 21500.0, 12950.0, 14000.0, 17400.0, 18100.0, 17292.54, 0.0, 0.0, 0.0, 0.0, 0.0 ] }
        ]
    },
    "composicaoDespesas": {
        "data": [
            { "categoria": "Operacionais", "valorTotal": 333180.7307, "valoresMensais": [ 61906.44, 51861.29, 48215.28, 33675.87, 57343.84, 35319.63, 35571.62, 9286.76, 0.0, 0.0, 0.0, 0.0 ] },
            { "categoria": "Pessoal", "valorTotal": 1121807.1583, "valoresMensais": [ 197609.9567, 186720.8217, 188600.6217, 136800.09, 146863.4983, 132521.4817, 126927.7883, 5762.9, 0.0, 0.0, 0.0, 0.0 ] },
            { "categoria": "Administrativas", "valorTotal": 349355.72, "valoresMensais": [ 56714.54, 54221.79, 49821.97, 49348.46, 52443.72, 41965.01, 43102.53, 1737.7, 0.0, 0.0, 0.0, 0.0 ] },
            { "categoria": "Terceiros", "valorTotal": 416750.3841, "valoresMensais": [ 79004.5472, 65226.1, 57055.4612, 40717.7856, 51489.1017, 44764.1032, 51152.7244, 27340.5608, 0.0, 0.0, 0.0, 0.0 ] },
            { "categoria": "Marketing", "valorTotal": 19656.99, "valoresMensais": [ 5202.37, 4981.53, 5573.09, 0.0, 2300.0, 0.0, 1600.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] },
            { "categoria": "Financeiras", "valorTotal": 98101.93, "valoresMensais": [ 27256.83, 14423.98, 16908.99, 9508.13, 7773.97, 10320.9, 11909.13, 0.0, 0.0, 0.0, 0.0, 0.0 ] }
        ]
    },
    "composicaoReceita": {
        "data": [
            { "fonte": "CREDITO", "valorTotal": 3486763.86, "valoresMensais": [ 679064.38, 509328.4, 513875.35, 303306.45, 405184.05, 323236.93, 361669.91, 391098.39, 0.0, 0.0, 0.0, 0.0 ] },
            { "fonte": "DEBITO", "valorTotal": 1427437.05, "valoresMensais": [ 317144.07, 245917.94, 215717.67, 109540.21, 169465.93, 114911.56, 121356.32, 133383.35, 0.0, 0.0, 0.0, 0.0 ] },
            { "fonte": "DINHEIRO", "valorTotal": 299542.893, "valoresMensais": [ 67691.94, 59451.87, 50413.5, 31997.04, 19625.503, 14493.8, 27003.49, 28865.75, 0.0, 0.0, 0.0, 0.0 ] },
            { "fonte": "PIX", "valorTotal": 427431.97, "valoresMensais": [ 66883.61, 60903.33, 51142.8, 48991.28, 56152.42, 35833.56, 53307.54, 54217.43, 0.0, 0.0, 0.0, 0.0 ] },
            { "fonte": "COUVER", "valorTotal": 55710.0, "valoresMensais": [ 7880.0, 8190.0, 8110.0, 4630.0, 9340.0, 5870.0, 4760.0, 6930.0, 0.0, 0.0, 0.0, 0.0 ] }
        ]
    }
};
// --- FIM DOS DADOS ---


// --- INÍCIO DA LÓGICA DO DASHBOARD (Chart.js) ---
document.addEventListener("DOMContentLoaded", () => {

    // --- Declaração de variáveis ---
    let despesasChartInstance, receitasChartInstance, couvertMusicoChartInstance;
    const meses = dashboardData.comparativoCouvertMusico.meses;
    const kpis = dashboardData.kpiResumoAnual.indicadores;

    // Mapeamento dos elementos de KPI 
    const kpiElementMap = {
        receitaTotal: document.getElementById("kpi-receita"),
        despesasTotais: document.getElementById("kpi-despesas"),
        cmvPercent: document.getElementById("kpi-cmv-percent"), 
        cmvPerfeitoPercent: document.getElementById("kpi-cmv-perfeito-percent"), 
        margemLiquidaPercent: document.getElementById("kpi-margem")
    };
    const kpiSubtitle = document.getElementById("kpi-subtitle");

    // Elementos do Filtro Global
    const monthFilter = document.getElementById('month-filter');
    const despesasSubtitle = document.getElementById('despesas-subtitle');
    const receitasSubtitle = document.getElementById('receitas-subtitle');
    const couvertSubtitle = document.getElementById('couvert-subtitle');

    // Elementos do Painel de Comparação
    const monthA_select = document.getElementById('month-a');
    const monthB_select = document.getElementById('month-b');
    const resultsContainer = document.getElementById('comparison-results');

    // --- 1. Inicializar Gráficos ---

    // Gráfico de Linha (Couvert vs. Músico) - Cores Verdes/Vermelho
    const ctxLine = document.getElementById('couvertMusicoChart').getContext('2d');
    couvertMusicoChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: meses, 
            datasets: [
                {
                    label: dashboardData.comparativoCouvertMusico.series[0].nome,
                    data: dashboardData.comparativoCouvertMusico.series[0].data, 
                    borderColor: '#28a745', // Verde
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    tension: 0.1, fill: true,
                },
                {
                    label: dashboardData.comparativoCouvertMusico.series[1].nome,
                    data: dashboardData.comparativoCouvertMusico.series[1].data, 
                    borderColor: '#d12c0a', // Vermelho
                    backgroundColor: 'rgba(209, 44, 10, 0.1)',
                    tension: 0.1, fill: true,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ${formatCurrency(context.raw)}` } } },
            scales: { y: { ticks: { callback: (value) => formatCurrency(value) } } }
        }
    });

    // Gráfico de Pizza (Despesas) - Paleta Verde e Creme (6 cores)
    const ctxPie = document.getElementById('despesasChart').getContext('2d');
    despesasChartInstance = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: dashboardData.composicaoDespesas.data.map(d => d.categoria),
            datasets: [{
                label: 'Composição das Despesas',
                data: dashboardData.composicaoDespesas.data.map(d => d.valorTotal), 
                backgroundColor: ['#0A6847', '#28a745', '#5cb85c', '#EADCB9', '#C8A97E', '#A88D6A'] // 3 Verdes, 3 Cremes/Tons de Bege
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                // *** ATUALIZAÇÃO AQUI: Tooltip agora mostra % ***
                tooltip: { 
                    callbacks: { 
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw;
                            
                            // Calcula o total do dataset atual
                            const data = context.chart.data.datasets[0].data;
                            const total = data.reduce((a, b) => a + b, 0);
                            
                            // Calcula o percentual
                            const percentage = (value / total * 100);
                            
                            // Retorna o texto formatado
                            return `${label}: ${formatCurrency(value)} (${percentage.toFixed(1)}%)`;
                        }
                    } 
                }
            }
        }
    });

    // Gráfico de Barras (Receitas) - Paleta Verde e Creme (5 cores)
    const ctxBar = document.getElementById('receitasChart').getContext('2d');
    receitasChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: dashboardData.composicaoReceita.data.map(d => d.fonte),
            datasets: [{
                label: 'Valor da Receita',
                data: dashboardData.composicaoReceita.data.map(d => d.valorTotal), 
                backgroundColor: ['#0A6847', '#28a745', '#5cb85c', '#EADCB9', '#C8A97E'], // 3 Verdes, 2 Cremes
                borderWidth: 0
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (context) => ` ${formatCurrency(context.raw)}` } }
            },
            scales: { x: { ticks: { callback: (value) => formatCurrency(value) } } }
        }
    });

    // --- 2. LÓGICA DO PAINEL DE COMPARATIVO (Mês a Mês) ---
    meses.forEach((mes, index) => {
        monthA_select.add(new Option(mes, index));
        monthB_select.add(new Option(mes, index));
    });
    monthA_select.value = 0; // JANEIRO
    monthB_select.value = 1; // FEVEREIRO

    function updateComparison() {
        const monthA_index = parseInt(monthA_select.value);
        const monthB_index = parseInt(monthB_select.value);
        const monthA_name = meses[monthA_index];
        const monthB_name = meses[monthB_index];

        resultsContainer.innerHTML = '';
        let headerHTML = `
            <div class="comp-row comp-header">
                <div>Indicador</div>
                <div>${monthA_name}</div>
                <div>${monthB_name}</div>
                <div class="var-col">Variância</div>
            </div>`;
        resultsContainer.innerHTML += headerHTML;

        for (const key in kpiElementMap) {
            const kpi = kpis[key];
            const valA = kpi.mensal[monthA_index];
            const valB = kpi.mensal[monthB_index];
            const variance = valB - valA;
            
            let valA_formatted, valB_formatted, variance_formatted;
            let varianceClass = variance >= 0 ? 'var-positive' : 'var-negative';
            let varianceSign = variance >= 0 ? '+' : '';

            if (kpi.format === 'currency') {
                valA_formatted = formatCurrency(valA);
                valB_formatted = formatCurrency(valB);
                const variancePct = (valA === 0 || valA < 0) ? 0 : (variance / valA);
                variance_formatted = `${varianceSign}${formatCurrency(variance)} (${formatPercentSimple(variancePct)})`;
            } else {
                valA_formatted = formatPercent(valA);
                valB_formatted = formatPercent(valB);
                variance_formatted = `${varianceSign}${(variance * 100).toFixed(2)} p.p.`;
            }

            if (key === 'despesasTotais' || key === 'cmvPercent' || key === 'cmvPerfeitoPercent') {
                varianceClass = variance >= 0 ? 'var-negative' : 'var-positive';
            }
            
            let rowHTML = `
                <div class="comp-row">
                    <div>${kpi.label}</div>
                    <div>${valA_formatted}</div>
                    <div>${valB_formatted}</div>
                    <div class="var-col ${varianceClass}">${variance_formatted}</div>
                </div>`;
            resultsContainer.innerHTML += rowHTML;
        }
    }
    monthA_select.addEventListener('change', updateComparison);
    monthB_select.addEventListener('change', updateComparison);

    // --- 3. LÓGICA DO FILTRO GLOBAL (Controla KPIs e Gráficos) ---
    
    monthFilter.add(new Option("Ano Completo", "-1")); // Opção "Todos"
    meses.forEach((mes, index) => {
        if (kpis.receitaTotal.mensal[index] > 0 || index < 8) { // Adiciona Jan-Ago
             monthFilter.add(new Option(mes, index));
        }
    });

    // Função MASTER que atualiza TUDO
    function updateDashboardForMonth() {
        const selectedMonthIndex = parseInt(monthFilter.value);
        let subtitle = "(Ano Completo)";
        if (selectedMonthIndex !== -1) {
            subtitle = `(${meses[selectedMonthIndex]})`;
        }

        // 1. Atualizar subtítulos
        kpiSubtitle.textContent = subtitle;
        despesasSubtitle.textContent = subtitle;
        receitasSubtitle.textContent = subtitle;
        couvertSubtitle.textContent = (selectedMonthIndex === -1) ? "(Ano Completo)" : `(Acumulado até ${meses[selectedMonthIndex]})`;

        // 2. Atualizar os 5 KPIs principais
        for (const key in kpiElementMap) {
            const kpi = kpis[key];
            const element = kpiElementMap[key];
            let value = (selectedMonthIndex === -1) ? kpi.total : kpi.mensal[selectedMonthIndex];
            element.textContent = (kpi.format === 'currency') ? formatCurrency(value) : formatPercent(value);
        }

        // 3. Atualizar Gráfico de Pizza (Despesas)
        const newPieData = (selectedMonthIndex === -1) ?
            dashboardData.composicaoDespesas.data.map(d => d.valorTotal) :
            dashboardData.composicaoDespesas.data.map(d => d.valoresMensais[selectedMonthIndex]);
        despesasChartInstance.data.datasets[0].data = newPieData;
        despesasChartInstance.update();

        // 4. Atualizar Gráfico de Barras (Receitas)
        const newBarData = (selectedMonthIndex === -1) ?
            dashboardData.composicaoReceita.data.map(d => d.valorTotal) :
            dashboardData.composicaoReceita.data.map(d => d.valoresMensais[selectedMonthIndex]);
        receitasChartInstance.data.datasets[0].data = newBarData;
        receitasChartInstance.update();

        // 5. Atualizar Gráfico de Linha (Lógica YTD)
        let labels, dataCouvert, dataMusico;
        if (selectedMonthIndex === -1) { // Ano Completo
            labels = meses;
            dataCouvert = dashboardData.comparativoCouvertMusico.series[0].data;
            dataMusico = dashboardData.comparativoCouvertMusico.series[1].data;
        } else { // Mês Específico (mostrar YTD até aquele mês)
            labels = meses.slice(0, selectedMonthIndex + 1);
            dataCouvert = dashboardData.comparativoCouvertMusico.series[0].data.slice(0, selectedMonthIndex + 1);
            dataMusico = dashboardData.comparativoCouvertMusico.series[1].data.slice(0, selectedMonthIndex + 1);
        }
        couvertMusicoChartInstance.data.labels = labels;
        couvertMusicoChartInstance.data.datasets[0].data = dataCouvert;
        couvertMusicoChartInstance.data.datasets[1].data = dataMusico;
        couvertMusicoChartInstance.update();
    }

    monthFilter.addEventListener('change', updateDashboardForMonth);

    // Inicializa o dashboard
    updateDashboardForMonth(); 
    updateComparison(); 

});

// --- LÓGICA DO GOOGLE CHARTS REMOVIDA ---