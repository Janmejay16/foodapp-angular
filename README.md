#Food App using Angular

#### Folder Structure
```sh
  ├── README.md
  ├── index.html        # Main HTML file (includes all HTML components)
  ├── script.js         # Main Script file to interact/control the application
  ├── angular.min.js    # Angular js file
  ├── style.scss/css    # Contains all the styling of the application
  └── images            # Images used in the application
  ```

#### Functions used (Script.js)
1. ``Change Theme`` Switch theme to dark/light
2. ``OrderByPriceAsc`` Filter by Price (Increasing order)
3. ``OrderByPriceDesc`` Filter by Price (Decreasing order)
4. ``ResetFilter`` Clear all filters
5. ``AddQuantity(item)`` Increase Quantity of an item
6. ``SubtractQuantity(item)`` Decrease Quantity of an item
7. ``AddToCart(item)`` Add items to cart
8. ``RemoveFromCart(item)`` Remove items from cart
9. ``Switch`` Switch between login/register
10. ``SwitchRegister`` Change to Register
11. ``SwitchLogin`` Change to Login
12. ``CartVisibility`` Show/Hide Cart if not empty
13. ``LoginUser`` Login function
14. ``RegisterUser`` Register Function
15. ``setLogin(boolean)`` (true/false -> login/logout)
16. ``Logout`` setLogin(false)
17. ``CheckLogin`` Useful if you use localstorage to fetch/store logged-in user details

#### HTML Elements
###### Elements here are controlled using ``ng-show/ng-hide`` and ``javascript`` 
- div **``#navbar``**
    > User Icon
    Cart Icon
    Logout
    Login
    Register
    Theme Icon (Dark)
Theme Icon (Light)
- div **``.main``**
    > Login Form
    Register Form
    Food-Items Section [Filters, Food Item Gallery (``div.restaurants``), ]
    Cart Section (User details, item list, bill)
  
#### Angular Variables/Interaction Used in HTML
- **``ng-show``**: Show an element if the variable value is not false
- **``ng-hide``**: Hide an element if the variable value is not false 
- **``ng-class``**: Control class name of elements via a variable
- **``{{variable}}``**: Use the 'variable' value in HTML
- **``ng-click``**: Call angular js function on 'onClick' event in HTML
- **``ng-model``**: Control value of angular scope variable via input element of HTML
- **``ng-src``**: Use image source from angular variables in HTML
- **``ng-repeat``**: *Using Loop/Array.map for angular variables list in HTML
- **``ng-model="search.key"``**: Search using the 'key'