function addition(){
    var inp1 = Number(rows.value)
    var inp2 = Number(columns.value)
    var tabulate=""
    for (var i = 1; i <=inp1; i++){
        tabulate += `<tr>`
        for (var j =1; j<=inp2; j++){
            tabulate += `<td>
            ${i}+${j}=${i+j}
            </td>`       
        }
        tabulate +=`</tr>`
    }
            result.innerHTML= tabulate
}

function multiply(){
    var inp1 = Number(rows.value)
    var inp2 = Number(columns.value)
    var tabulate=""
    for (var i = 1; i <=inp1; i++){
        tabulate += `<tr>`
        for (var j =1; j<=inp2; j++){
            tabulate += `<td>
            ${i}*${j}=${i*j}
            </td>`       
        }
        tabulate +=`</tr>`
    }
            result.innerHTML= tabulate
}

function subtract(){
    var inp1 = Number(rows.value)
    var inp2 = Number(columns.value)
    var tabulate=""
    for (var i = 1; i <=inp1; i++){
        tabulate += `<tr>`
        for (var j =1; j<=inp2; j++){
            tabulate += `<td>${i}-${j}=${i-j}</td>`       
        }
        tabulate +=`</tr>`
    }
            result.innerHTML= tabulate
}

function division(){
    var inp1 = Number(rows.value)
    var inp2 = Number(columns.value)
    var tabulate=""
    for (var i = 1; i <=inp1; i++){
        tabulate += `<tr>`
        for (var j =1; j<=inp2; j++){
            tabulate += `<td>
            ${i}/${j}=${parseFloat(i/j).toFixed(2)}
            </td>`       
        }
        tabulate +=`</tr>`
    }
            result.innerHTML= tabulate
}