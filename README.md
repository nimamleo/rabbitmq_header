{name:"nima" , age:20 , gender:"male"}


x-match : all    ====> {name:"nima" , age:20 , "x-match":"all"}
                ====>  means sent message should contain both name and age with correct value
                

                
x-match : any    ====> {name:"nima" , age:20 , "x-match":"all"}
                ====>  means sent message should one of name and age with correct value


