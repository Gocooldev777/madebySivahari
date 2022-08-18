bills=[bill1={a:2500,b:3500,c:4000},
    bill2={a:250,b:500,c:100,d:800},
    bill3={a:6000,b:400,d:300}]
    const avg=(bb)=>{
        l=[]
        for(i in bb){
            l.push(bb[i])
        }
        sum=0
        avgg=0
        len=l.length
        for(j of l){
            sum=sum+j
        }
           avgg=sum/len
     return avgg
    }
    const paidby=(bb)=>{
        averagee=avg(bb)
        for(i in bb){
            bb[i]=bb[i]-averagee
        }
        return bb
    }
    for(i in bills){
    bills[i]=paidby(bills[i])
    }                                                                          
    moneyto_split={}
    for(i=0;i<bills.length;i++){
        for(j in bills[i]){
            if(j in moneyto_split){
                moneyto_split[j]=moneyto_split[j]+bills[i][j]
            }
            else{
                moneyto_split[j]=bills[i][j]
            }
        }
    }
        
    get={}
    pay={}
    for(i in moneyto_split){
        if(moneyto_split[i]==0){
            console.log(i+" No Need to pay")
        }
        else if(moneyto_split[i]<0){
            pay[i]=moneyto_split[i]
        }
        else if(moneyto_split[i]>0){
            get[i]=moneyto_split[i]
        }
    }
    console.log("Amount have to get:",get)
    console.log("Amount have to pay:",pay)
    // Sorting the object in ascending order
    const sort_asd=(Object)=>{
        l=[]
    for(i in Object){
        l.push(Object[i])
    }
    
    function sort(m,s){
        return m-s
    }
    l.sort(sort)
    persontopay={}
    for (m of l){
        for(i in Object){
            if(Object[i]==m){
                persontopay[i]=m
            }
        }
    }
    return(persontopay)
    }
    // Sorting the object in Descending order........................................,
    const sort_des=(Object)=>{
        l=[]
    for(i in Object){
        l.push(Object[i])
    }
    
    function sort(m,s){
        return m-s
    }
    l.sort(sort)
    l.reverse()
    persontoget={}
    for (m of l){
        for(i in Object){
            if(Object[i]==m){
                persontoget[i]=m
            }
        }
    }
    return(persontoget)
    }
    
    balancetoget=sort_des(get)
    balancetopay=sort_asd(pay)
    console.log("Get:",balancetoget)
    console.log("Pay:",balancetopay)
    const money_settled=(object)=>{
        paid={}
        for(i in object){
            if(object[i]!=0){
                paid[i]=object[i]
            }
        }
        return paid
    }
for(d in balancetoget){
    for(w in balancetopay){
        if(balancetoget[d]>Math.abs(balancetopay[w])){
            console.log(w,"has to pay",balancetopay[w],"to",d)
            balancetoget[d]=(balancetoget[d])-(Math.abs(balancetopay[w]))
            balancetopay[w]=0
            balancetoget=money_settled(balancetoget)
            balancetopay=money_settled(balancetopay)
            
        }
        else if(balancetoget[d]<Math.abs(balancetopay[w])){
            console.log(w,"has to pay",balancetoget[d],"to",d)
            balancetopay[w]=((balancetoget[d]))-(Math.abs(balancetopay[w]))
            balancetoget[d]=0
            balancetoget=money_settled(balancetoget)
            balancetopay=money_settled(balancetopay)
                      
        }
        else if(balancetoget[d]==Math.abs(balancetopay[w])){
            console.log(w,"has to pay",balancetopay[w],"to",d)
            balancetoget[d]=0
            balancetopay[w]=0
            balancetoget=money_settled(balancetoget)
            balancetopay=money_settled(balancetopay)
        }
    }
}