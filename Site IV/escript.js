function tabuada(){
    let nun = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (nun.value.length == 0 ){
        window.alert('[ERRO]Por favor preencha os dados e tente novamente.')
    } else {
        let n = Number(nun.value)
        let c = 5
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text =`${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
 
}