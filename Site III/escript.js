function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
        if (ini.value.length === 0 || fim.value.length === 0 || passo.value.length ===0 ){
            res.innerHTML = 'Preparando a contagem...'
            alert('[ERRO] preencha os dados e tente novamente.')
        } else {
           res.innerHTML = 'Contando: <br>'
           var i = Number(ini.value)
           var f = Number(fim.value)
           var p = Number(passo.value)
           if(i < f){
                for(let c = i; c <= f; c+= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
                    res.innerHTML += '\u{1f3c1}'
           } else {
               for(let c = i;c >= f;c -=p){
                   res.innerHTML += `${c} \u{1f449}`
               } res.innerHTML += '\u{1f3c1}'
           }
           
        }
}