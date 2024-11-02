document.addEventListener('DOMContentLoaded', () => {
    const backgroundPattern = document.querySelector('.background-pattern');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const centerBoxWidth = 500;
    const centerBoxHeight = screenHeight * 0.98;
    
    const idealColumns = 12;
    const tsukiSize = Math.ceil(screenWidth / idealColumns);
    
    const columns = Math.ceil(screenWidth / tsukiSize);
    const rows = Math.ceil(screenHeight / tsukiSize);
    
    document.documentElement.style.setProperty('--tsuki-size', `${tsukiSize}px`);
    
    const skipColumns = Math.ceil(centerBoxWidth / tsukiSize);
    const skipRows = Math.ceil(centerBoxHeight / tsukiSize);
    const centerColStart = Math.floor((columns - skipColumns) / 2);
    const centerColEnd = centerColStart + skipColumns;
    const centerRowStart = Math.floor((rows - skipRows) / 2);
    const centerRowEnd = centerRowStart + skipRows;
    
    backgroundPattern.innerHTML = '';
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (col >= centerColStart && col < centerColEnd && 
                row >= centerRowStart && row < centerRowEnd) {
                continue;
            }
            const tsuki = document.createElement('div');
            tsuki.className = 'tsuki-bg';
            tsuki.style.gridColumn = col + 1;
            tsuki.style.gridRow = row + 1;
            backgroundPattern.appendChild(tsuki);
        }
    }
});

window.addEventListener('resize', () => {
    const event = document.createEvent('Event');
    event.initEvent('DOMContentLoaded', true, true);
    window.document.dispatchEvent(event);
}); 