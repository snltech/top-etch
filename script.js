let squareNumbers = 16;

const container = document.querySelector('.board');

function addDivs(num){
    for(let i = 0; i < num; i++){
        const row = document.createElement('div');
        row.classList.add('rows');
        if(i == num - 1){
            row.style.cssText = "border-bottom: 0px"
        };
        
        // add cells in rows
        for(let j = 0; j < num; j++){
            const square = document.createElement('div');
            square.classList.add('squares');
            if(j == num - 1) {square.style.cssText = "border-right: 0px"};
            // adds the sketch functionnality
            square.addEventListener('mouseenter', function(e) {this.style.cssText = "background-color:grey;"});
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function promptNum(){
    const input = parseInt(window.prompt('Enter a number below 100 please:'));
    if(isNaN(input) || input > 100 ){
        return promptNum();
    }
    return input;
}

function clearAll(e){
    const divs = document.querySelectorAll('.squares');
    const rows = document.querySelectorAll('.rows');
    divs.forEach(item => item.remove());
    rows.forEach(item => item.remove());
    addDivs(promptNum());
}

addDivs(squareNumbers);

const btn = document.querySelector('button[value="clear"]');
btn.addEventListener('click', clearAll);
