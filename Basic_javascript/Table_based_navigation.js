let a = document.body.firstElementChild.firstElementChild; //will return table
//Table manipulation
console.log(a)
console.log(a.rows); //will return rows of table in the form of HTML collection
console.log(a.caption) //will return caption of table seen on console
console.log(a.tHead) //will return heading of table seen on console
console.log(a.tFoot) //will return footer of table seen on console

console.log(a.tHead.firstElementChild) //will return table row
console.log(a.tBodies) //whole body of table
console.log(a.rows[0]) //will return table row
console.log(a.rows[2].rowIndex) // first row index

