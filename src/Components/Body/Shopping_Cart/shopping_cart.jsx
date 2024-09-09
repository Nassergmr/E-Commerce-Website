import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";

const ShoppingCart = ({ isOpen, onClose, cartItems }) => {
  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: 300 }}>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} secondary={`$${item.price}`} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Total" secondary={`$${calculateTotal()}`} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default ShoppingCart;
