var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    // run the startInventory function after the connection is made
    showInventory();
});

function showInventory(){
    console.log("Gathering Inventory...\n");
    connection.query("SELECT * FROM products", function(err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            if(result[i].stock_quantity !== 0){
                console.log(result[i].item_id + " - " + result[i].product_name + "  $" +result[i].price);
            };

        };
        console.log(" ");
        prodcutChoice();
    });

    
    // connection.end();
    //***remove end when I progress to next function***
}

function prodcutChoice(){
    inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "What is the prodcut ID for your selection?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function(answer) {
        console.log(" ");
        connection.query("SELECT * FROM products WHERE  item_id=?", [answer.id], function(err, result) {
            if (err) throw err;
            if(result[0].stock_quantity >= answer.quantity){
                var new_quantity = result[0].stock_quantity - answer.quantity;
                var cust_total = result[0].price * answer.quantity
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: new_quantity
                      },
                      {
                        item_id: answer.id
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                      console.log("Your Purchase Total: $" + cust_total);

                    }
                );
                
            }else{
                console.log("Insufficent stock to fill order")
            };

            connection.end();
          }
        );
    });    

}
