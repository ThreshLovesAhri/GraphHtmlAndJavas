//Change the first letter of each word and delete the spaces between  
var frase=prompt('Insert the phrase:');
var r=frase.replace(/\b\w/g, l => l.toUpperCase());
var s=r.replace(/ /g,"");
console.log(s);

//Search and identify each number 
var num=prompt('Insert the number:');
var comp=[0,1,2,3,4,5,6,7,8,9];
var canti=[0,0,0,0,0,0,0,0,0,0];
var i;
var f;
var arlength= num.length;
console.log(num+" Contiene:");
console.log(arlength);
//for(i=0;i<arlength;i++){
  //  console.log(num[i]);
//}
for(f=0;f<arlength;f++){
    for(i=0;i<10;i++){
        if(num[f]==comp[i]){
             canti[i]=canti[i]+1;
         }
    
    }
}
for(i=0;i<10;i++){
    console.log("De "+i+" es de: "+canti[i]);
}

//Search and identify unique Letters in a phrase