import { useState } from "react";
import CartMenu from "@/components/carMenu/cartMenu";
import styles from "./cartButton.module.css";
import { BsCart4 } from "react-icons/bs";

export default function CartButton({ cart, onRemove }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <BsCart4 size={40} className={styles.icon} onClick={() => {setOpen(!open)}}/>
      {open && <CartMenu cart={cart} onRemove={onRemove} />}
    </div>
  );
}
