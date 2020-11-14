function renderResultBarChart(chartId, data) {

    const width = 800;
    const height = 400;
    const margin = {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
    };
    const maxY = Math.max.apply(Math, data.map(d => d.value));
    
    const svg = d3.select(`#${chartId}`)
        .append('svg')
        .attr('height', height - margin.top - margin.bottom)
        .attr('width', width - margin.left - margin.right)
        .attr('viewBox', [0, 0, width, height]);
    
    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.1);
    
    const y = d3.scaleLinear()
        .domain([0, maxY])
        .range([height - margin.bottom, margin.top]);
    
    svg.append('g')
        .attr('fill', 'white')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', (d, i) => x(i))
        .attr('y', d => y(d.value))
        .attr('height', d => y(0) - y(d.value))
        .attr('width', x.bandwidth());
    
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d => d.value)
        .attr("text-anchor", "middle")
        .attr("x", (d, i) => x(i) + ((width - margin.left - margin.right) / data.length) / 2.25)
        .attr("y", d => y(d.value) - 10)
        .attr("fill", "white");
    
    const xAxis = (g) => {
        g.attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => data[i].key))
            .attr('font-size', '20px');
    };
    
    svg.append('g').call(xAxis);
    
    svg.node();
}
