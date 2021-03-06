import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: (item) => {},
  getNumberOfItems: () => {},
});

export default function StateWrapper({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleOpenCart = () => {
    setIsOpen(true);
  }

  const handleCloseCart = () => {
    setIsOpen(false)
  }

  const handleAddItemToCart = item => {
    const temp = [...items]
    const found = temp.find( product => product.id === item.id );

    if(found) {
      item.quantity++;
    } else {
      item.quantity = 1;
      temp.push(item);
    }

    setItems([...temp])
  }

  const handleNumberOfItems = () => {
    const total = items.reduce( (acc, item) => acc + item.quantity, 0);
    return total;
  }


  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems

      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}