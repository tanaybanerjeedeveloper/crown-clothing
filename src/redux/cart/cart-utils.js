export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      } else {
        return cartItem
      }
    })
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}

//this function will take all the cartitems and the item we just added and check if the item already exixts or not. If it exists then we have to check that item matches with which existing cartitem, and then pass a new obj with all the poperties of existing obj and the 'quantity' property being incresd by 1.if the item does not match with a cartitem then  we will pass the cartitem to a new array.
//And if the item to be added does not exist in the currentitems array , then we will return a new array with all the existing cartitems and the new item with a new property being added as 'quantity'.

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
}
