import { CartCard } from "../../CartCard/CartCard";
import {
  CartBottomBtns,
  CartBottomContain,
  CartBottomTextLeft,
  CartBottomTextRight,
  CartBtnConfirm,
  CartCardContainer,
  CartContainer,
  CartShippingAndSub,
  CartTitle,
  CartTopContainer,
  CloseCart,
  ShipOrSubDiv,
  ShipOrSubTextLeft
} from "./CartMenuStyles";
import { useDispatch } from "react-redux";
import { clearCart, toggleCartMenu } from "../../../redux/cartSlice/cartSice";
import { useSelector } from "react-redux";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartMenu = () => {
  const navigate = useNavigate();
  const { cartMenu, cartItems, shippingCost } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  const handleCart = () => {
    dispatch(toggleCartMenu());
  };

  const clearAllItems = () => {
    window.confirm("¿Desea eliminar todos los elementos del carrito?") &&
      dispatch(clearCart());
  };

  return (
    <CartContainer show={cartMenu}>
      <CartTopContainer>
        <CloseCart onClick={handleCart} title="Cerrar Carrito" />
        <CartTitle>Tu compra</CartTitle>
      </CartTopContainer>

      <CartCardContainer>
        {!cartItems.length ? (
          <p>*No hay productos en el carrito*</p>
        ) : (
          cartItems.map((item) => <CartCard key={item.id} {...item} />)
        )}
      </CartCardContainer>

      {cartItems.length >= 1 && (
        <CartShippingAndSub>
          <ShipOrSubDiv>
            <ShipOrSubTextLeft>Subtotal: </ShipOrSubTextLeft>
            <span>${totalPrice}</span>
          </ShipOrSubDiv>

          <ShipOrSubDiv>
            <ShipOrSubTextLeft>Envío: </ShipOrSubTextLeft>
            <span>${shippingCost}</span>
          </ShipOrSubDiv>
        </CartShippingAndSub>
      )}

      <CartBottomContain>
        <CartBottomTextLeft>Total: </CartBottomTextLeft>
        <CartBottomTextRight>${totalPrice + shippingCost}</CartBottomTextRight>
      </CartBottomContain>

      {cartItems.length !== 0 && (
        <CartBottomBtns>
          <CartBtnConfirm
            addcart="true"
            title="Confirmar compra"
            onClick={() => navigate("./checkout")}
          >
            <FaCheckCircle />
            Confirmar pedido
          </CartBtnConfirm>

          <CartBtnConfirm
            onClick={clearAllItems}
            title="Eliminar todos los elementos del carrito"
          >
            <FaTrash />
            Vaciar Carrito
          </CartBtnConfirm>
        </CartBottomBtns>
      )}
    </CartContainer>
  );
};
export default CartMenu;
