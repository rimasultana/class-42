const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Delete an Element
  fruits.delete("apples");
  
  document.getElementById("demo").innerHTML = fruits.size;