let sizeOfmatrixSubmit=document.getElementsByClassName('sizeOfmatrixSubmit')[0]
let matrixContainer=document.getElementsByClassName('matrixContainer')[0];
let sizeOfArray=document.getElementsByClassName('sizeOfmatrix')[0]
sizeOfmatrixSubmit.addEventListener('click',(event)=>{
    
    event.preventDefault()
    matrixContainer.innerHTML=""
    matrixContainer.style.gridTemplateColumns=`repeat({sizeOfArray.value},1fr)`
    matrixContainer.style.gridTemplateRows=`repeat(${sizeOfArray.value},1fr)`
    for(let i=0 ;i<Number(sizeOfArray.value);i++){
        
        for(let j=0 ;j<Number(sizeOfArray.value);j++){

            let cell=document.createElement("div")
            cell.className="cell"
            
            matrixContainer.appendChild(cell)
            
        }
        
    }
    let cells=document.getElementsByClassName("cell");

    let generateMatrix = function(n) {
        let board = []
        for(let i=0;i<n;i++) {
            board.push(new Array(n))
        }
        fillOutline(board, 0,0, n, 1)
        return board
    };
    
    let fillOutline = function(board, x,y , length, startNum) {
        
        if(length <= 0) {
            return 
        }
        board[x][y] = startNum
        
        for(let i=0;i<length-1;i++) {
            board[x][y+i] = startNum
            startNum = startNum + 1
        }
        
        for(let i=0;i<length-1;i++) {
            board[x+i][y+length-1] = startNum
            startNum = startNum + 1
        }
        
        for(let i=length-1;i>0;i--) {
            board[x+length-1][y+i] = startNum
            startNum = startNum + 1
        }
        
        for(let i=length-1;i>0;i--) {
            board[x+i][y] = startNum
            startNum = startNum + 1
        }
        fillOutline(board, x+1,y+1 , length-2, startNum)
    };

    let counter=0;
    generateMatrix(sizeOfArray.value).forEach((arr)=>{
        arr.forEach((value)=>{
            cells[counter].textContent=value;
            counter++;
        })
    })

})