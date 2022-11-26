import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux'

import {toggle} from '../store/ui-slice'


const CartButton = (props) => {
  const totalQuantity=useSelector(state=>state.cart.totalQuantity);
  const dispatch=useDispatch();


  const toggleCartHeader=()=>{
    dispatch(toggle());
  };



  return (
    <button className={classes.button} onClick={toggleCartHeader}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
