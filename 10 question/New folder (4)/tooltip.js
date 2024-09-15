
var tooltipText = document.querySelector('.tooltip-text');
var tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
tooltip.textContent = tooltipText.getAttribute('data-tooltip');
tooltipText.appendChild(tooltip);

tooltipText.addEventListener('mouseenter', function() {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
});

tooltipText.addEventListener('mouseleave', function() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
});
