function customFilter(list, keyName, value) {
 
  let arr = [];

  
  for (let i = 0; i < list.length; i++) {
  
    if (list[i][keyName] == value) {
     
      arr.push(list[i]);
    }
  }
  return arr;
}
const finalfilterlist=customFilter(list,'reading','3')
console.log(finalfilterlist)
