
function fun1() { 

}

const fun2 = function() { 

}

const fun3 = () => { 

}

const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

const obj = {}
obj.falar = () => {return 'Opa'}
console.log(obj.falar())


function run(fun) { 
    fun()
}

run(function() {console.log('Executando')})

function soma(a,b) { 
    return function(c) { 
        console.log(a + b + c)
    }
}

soma(2,3)(3)

