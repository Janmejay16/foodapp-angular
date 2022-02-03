(function () {
    'use strict'
      angular.module('FoodApp', [])
      .controller('FoodController', FoodController)
      .filter('datesFilter', function() {
        // Return formatted date
        return function(input) {
          var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
          var n = month[input.slice(3,5)-1];
          let res = ""
          res = input.slice(11,15) + " " + input.slice(0,2) +  " " + n  +  ", " + input.slice(6,10)
          return res
        }
      })
  
      FoodController.$inject = ['$scope','$http']
      function FoodController($scope,$http) {
        // ---------------------------------------
        // Scope Variables
        // ---------------------------------------

        $scope.login = true; // Display Login component if true
        $scope.register = false; // Display Register component if true
  
        $scope.theme = "light"; // Current theme
  
        $scope.CurrentDate = new Date();
        
        // User Credentials
        $scope.username="";
        $scope.email="";
        $scope.mobile="";
        $scope.password=""; 
        
        $scope.loggedIn = false; // Check if a user has logged in or not
        $scope.currentUser = {} // Store current user details after login
        $scope.OrderBy = "" // Filter (default: none)
        $scope.cartItems = [] // Items added to cart by user
        $scope.bill = 0 // Total Bill Amount of a user
        $scope.cartNotEmpty = false; // Variable to show if the cart if empty
        $scope.totalAmount = 0;
        $scope.showCart = false; // Control visibility of the bill generated for cart items
  
        // Predefined User Details for login
        $scope.Users = [
          {
          "username": "janmejay",
          "password": "janmejay",
          "email": "janmejay@gmail.com",
          "mobile": 9876543210
          },
          {
            "username": "kahan",
            "password": "kahan",
            "email": "kahan@gmail.com",
            "mobile": 9876543210
          },
          {
            "username": "pranshu",
            "password": "pranshu",
            "email": "pranshu@gmail.com",
            "mobile": 9876543210
          },
          {
            "username": "devanshi",
            "password": "devanshi",
            "email": "devanshi@gmail.com",
            "mobile": 9876543210
          },
          {
            "username": "dhairya",
            "password": "dhairya",
            "email": "dhairya@gmail.com",
            "mobile": 9876543210
          }
        ]
        // Food Items Stored in an array
        $scope.items = [
          {
            image: "pizza.jpg",
            name: "Margherita",
            rating: 4.5,
            area: "Pizza Hut",
            cost: "500",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "burger.jpg",
            name: "Veg. Crispy",
            rating: 4.9,
            area: "Burger King",
            cost: "400",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "mexican.jpg",
            name: "Taco Mexicana",
            rating: 4.8,
            area: "Taco Bell",
            cost: "700",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "indian.jpg",
            name: "Indian Thali",
            rating: 4.2,
            area: "Punjabi Tadka",
            cost: "800",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "pizza.jpg",
            name: "Country Special",
            rating: 4.5,
            area: "Dominos Pizza",
            cost: "300",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "burger.jpg",
            name: "Paneer Zinger",
            rating: 4.9,
            area: "KFC",
            cost: "400",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "mexican.jpg",
            name: "Lebanese Rolls",
            rating: 4.8,
            area: "Mexican Delight",
            cost: "700",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "indian.jpg",
            name: "Kathiawadi Thali",
            rating: 4.2,
            area: "Kathiawadi Khadki",
            cost: "800",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "pizza.jpg",
            name: "Cheesy 7",
            rating: 4.5,
            area: "La Pinoz",
            cost: "500",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "burger.jpg",
            name: "Aloo Tikki",
            rating: 4.9,
            area: "McDonalds",
            cost: "400",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "mexican.jpg",
            name: "Cheese Frankie",
            rating: 4.8,
            area: "Havmor Eateryl",
            cost: "700",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "indian.jpg",
            name: "Punjaib Thali",
            rating: 4.2,
            area: "Jashne Dhaba",
            cost: "800",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "pizza.jpg",
            name: "US Special",
            rating: 4.5,
            area: "Uncle Sam Pizza",
            cost: "500",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "burger.jpg",
            name: "All American Burger",
            rating: 4.9,
            area: "Temptation",
            cost: "400",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "mexican.jpg",
            name: "Garlic Bread",
            rating: 4.8,
            area: "Bell Piattos",
            cost: "700",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "indian.jpg",
            name: "Gujarati Thali",
            rating: 4.2,
            area: "Kismat",
            cost: "800",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "pizza.jpg",
            name: "Farm House",
            rating: 4.5,
            area: "Infi Pizzeria",
            cost: "500",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "burger.jpg",
            name: "Paneer Takatak",
            rating: 4.9,
            area: "Havmor Retaurant",
            cost: "400",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "mexican.jpg",
            name: "Bakeed Lasagne",
            rating: 4.8,
            area: "Temptation",
            cost: "700",
            quantity: 0,
            addedToCart: false
          },
          {
            image: "indian.jpg",
            name: "Khichdi Kadhi",
            rating: 4.2,
            area: "Adingo",
            cost: "800",
            quantity: 0,
            addedToCart: false
          }
        ]
  
        // Switch Between Themes
        $scope.changeTheme = function() {
          $scope.theme = ($scope.theme=="dark" ? "light" : "dark");
        }
  
        // Order by Price (Ascending Order)
        $scope.orderByPriceAsc = function() {
          $scope.OrderBy = "cost";
        }
  
        // Order by Price (Descending Order)
        $scope.orderByPriceDes = function() {
          $scope.OrderBy = "-cost";
        }
  
        // Clear all filters
        $scope.resetFilter = function() {
          $scope.OrderBy = "";
        }
  
        // Add Quantity of an item
        $scope.addQuantity = function(item) {
          $scope.items.map(key => {
            if(key.name == item.name) {
              key.quantity += 1
            }
          })
        }
  
        // Susbtract Quantity of an item
        $scope.subtractQuantity = function(item) {
          $scope.items.map(key => {
            if(key.name == item.name) {
              if(key.quantity>0) key.quantity -= 1
            }
          })
        }
  
        // Add Items to the Cart
        // Add item_price*quantity to the total bill of the user
        // Show cart icon animation if cart is not empty
        $scope.addToCart = function(item) {
          let quantity = item.quantity
          let cost = item.cost
          if (quantity>0) {
            var new_item = {
              name: item.name,
              quantity: quantity,
              cost: cost,
              price: cost*quantity 
            }
            $scope.totalAmount += cost*quantity
            $scope.cartItems.push(new_item)
            item.addedToCart =true
            console.log($scope.cartItems)
            if($scope.cartItems.length>0) $scope.cartNotEmpty = true
            else $scope.cartNotEmpty = false
          }
        }
  
        // Remove Items from the Cart
        // Subtract item_price*quantity from the total bill of the user
        // Disable cart icon animation if cart is empty
        $scope.removeFromCart = function(item) {
          var i;
          $scope.cartItems.map((index,key) => {
            if (key.name == item.name) {
              i = index;
            }
          })
          $scope.items.map(key => {
            if (key.name==item.name) {
              key.addedToCart = false
              key.quantity = 0
            }
          })
          $scope.cartItems.splice(i,1);
          console.log($scope.cartItems)
          $scope.totalAmount -= item.cost*item.quantity
          if($scope.cartItems.length>0) $scope.cartNotEmpty = true
          else $scope.cartNotEmpty = false
        }
  
        // Switch between Login-Register
        $scope.switch = function() {
          if ($scope.login) {
            $scope.register = true;
            $scope.login = false
          }
          else {
            $scope.register = false;
            $scope.login = true
          }
        }
  
        // Switch to Register
        $scope.switchRegister = function() {
          $scope.login = false;
          $scope.register = true;
        }
  
        // Switch to Login
        $scope.switchLogin = function() {
          $scope.login = true;
          $scope.register =  false;
        }
  
        // Switch cart visibility
        $scope.cartVisibility = function () {
          if($scope.cartNotEmpty==true) {
            $scope.showCart = !($scope.showCart)
          }
          else alert('Cart is Empty!')
        }
  
        // Login
        $scope.LoginUser = function() {
          let found = false;
          $scope.Users.map(user => {
            if($scope.username==user.username) {
              found = true
              if($scope.password==user.password) {
                $scope.setLogin(true)
                alert('Logged In')
              }
              else {
                alert('Incorrect Password')
              }
            }
          })
          if (found==false) {
            alert('User Not registered')
          }
        }
  
        // Register
        $scope.RegisterUser = function() {
          let found = false;
          $scope.Users.map(user => {
            if($scope.username==user.username) {
              found = true
            }
          })
          if (found==false) {
            if ($scope.username=="") {
              alert('Invalid Username')
            }
            else if ($scope.mobile=="") {
              alert('Invalid Mobile')
            }
            else if ($scope.email=="") {
              alert('Invalid Email')
            }
            else if ($scope.password=="") {
              alert('Invalid Password')
            }
            else{
              let user = {
                "username": $scope.username,
                "email": $scope.email,
                "mobile": $scope.mobile,
                "password": $scope.password
              }
              $scope.Users.push(user)
              $scope.setLogin(true)
              alert('User Added Successfully')
            }
          }
          else {
            alert('User Already registered')
          }
        }
  
        $scope.setLogin = function (booleanVal) {
          if (booleanVal == true) {
            // Hide login/register form
            // Enter the application dashboard
            $scope.login = false;
            $scope.register = false;
            $scope.loggedIn = true;
            $scope.Users.map(user => {
              if($scope.username==user.username) {
                $scope.currentUser = {
                  username: user.username,
                  password: user.password,
                  email: user.email,
                  mobile: user.mobile
                }
              }
            })
            $scope.items.map(item => {
                item.quantity=0;
                item.addedToCart = false;
            })
          }
          // Set all the state variables to default (LOGOUT)
          else {
            $scope.login = true;
            $scope.register = false;
            $scope.username="";
            $scope.email="";
            $scope.mobile="";
            $scope.password="";
            $scope.loggedIn = false;
            $scope.currentUser = null;
            $scope.cartItems = []
            $scope.bill = 0
            $scope.cartNotEmpty = false;
            $scope.totalAmount = 0;
            $scope.showCart = false;
            location.reload();
          }
        }
  
        // Logout 
        $scope.logout = function() {
          $scope.setLogin(false)
        }
  
        // Check if user is logged in
        // Useful when you use 'localStorage' to store user details
        $scope.checkLogin = function () {
          if ($scope.currentUser.username) {
            $scope.setLogin(true)
          }
        }
        $scope.checkLogin() 
      }
  })();