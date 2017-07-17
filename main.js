// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let priceAvg = []
  for (var i = 0; i < data.length; i++) {
    priceAvg.push(data[i].price)
  }
  let AvgReduced = priceAvg.reduce(function(a,b){return a + b})/data.length
  console.log(AvgReduced)
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let priceBetween = []
  for (var i = 0; i < data.length; i++) {

    if (data[i].price>14) {
      if (data[i].price<18) {
        priceBetween.push(data[i].price)
      }
    }
  }
  console.log(priceBetween)
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let finalArray = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code =="GBP") {
      finalArray.push(data[i].title,data[i].price,data[i].currency_code)
    }
  }
  console.log(finalArray)
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let woodItems=[]
  for (var i = 0; i < data.length; i++) {
    for (var iN = 0; iN < data[i].materials.length; iN++) {
      if (data[i].materials[iN] == "wood") {
        woodItems.push(data[i].title)
      }
    }
  }
  console.log(woodItems.toString())
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let EightOrMore = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length > 7) {
      EightOrMore.push(data[i].title,data[i].materials.length,data[i].materials.toString())
    }
  }
  console.log(EightOrMore)
}



// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let whoMade = []

  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made == "i_did") {
      whoMade.push("1")
    }
  }
  console.log(whoMade.length)
}
