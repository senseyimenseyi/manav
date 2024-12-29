interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  items: Item[];
  isLoggedIn: boolean;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  emptyChart: () => void;
}

function ShoppingChart({
  items,
  isLoggedIn,
  increaseItemQuantity,
  decreaseItemQuantity,
  emptyChart,
}: Props) {
  return (
    <div className="container">
      <h1>Alışveriş Sepeti</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {item.name} - {item.price} TL - {item.quantity} kg
            </span>
            <span>
              <button
                onClick={() => increaseItemQuantity(item.id)}
                className="btn btn-primary btn-sm mx-2"
              >
                +
              </button>
              <button
                onClick={() => decreaseItemQuantity(item.id)}
                className="btn btn-danger btn-sm"
              >
                -
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div className="total-price">
        Toplam:{" "}
        {items.reduce((total, item) => total + item.price * item.quantity, 0)}{" "}
        TL
      </div>
      <button onClick={emptyChart} className="btn btn-warning m-1">
        Sepeti Boşalt
      </button>
      {isLoggedIn && (
        <button onClick={emptyChart} className="btn btn-warning m-1">
          Alışverişi Bitir
        </button>
      )}
      <img src="sepet.png" alt="Shopping Chart" className="img-fluid mb-3" />
    </div>
  );
}

export default ShoppingChart;
