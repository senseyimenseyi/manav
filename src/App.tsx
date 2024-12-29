import Alert from "./components/Alert";
import Button from "./components/Button";
import Fcard from "./components/Fcard";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Footer from "./components/Footer";
import ShoppingChart from "./components/ShoppingChart";
import Login from "./components/Login";
import User from "./components/Login";

function App() {
  const [alarm, setAlarm] = useState("");
  const [selectedUrunGrup, setSelectedUrunGrup] = useState("Meyve");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  interface Urun {
    id: number;
    name: string;
    price: number;
    grup: string;
    quantity: number;
  }
  let users = [
    {
      id: 1,
      name: "Fatih",
      age: 30,
      email: "fatih@manav.com",
      username: "fatih",
      password: "1234",
    },
    {
      id: 2,
      name: "Ali",
      age: 25,
      email: "ali@manav.com",
      username: "ali",
      password: "1235",
    },
    {
      id: 3,
      name: "Veli",
      age: 35,
      email: "veli@manav.com",
      username: "veli",
      password: "1236",
    },
  ];

  let urunGruplari = [
    { id: 1, name: "Meyve" },
    { id: 2, name: "Sebze" },
    { id: 3, name: "Kuru Yemiş" },
  ];
  let urunler = [
    { id: 1, name: "Elma", price: 50, grup: "Meyve", quantity: 1 },
    { id: 2, name: "Armut", price: 70, grup: "Meyve", quantity: 1 },
    { id: 3, name: "Karpuz", price: 100, grup: "Meyve", quantity: 1 },
    { id: 4, name: "Muz", price: 60, grup: "Meyve", quantity: 1 },
    { id: 5, name: "Kiraz", price: 80, grup: "Meyve", quantity: 1 },
    { id: 6, name: "Domates", price: 30, grup: "Sebze", quantity: 1 },
    { id: 7, name: "Salatalık", price: 20, grup: "Sebze", quantity: 1 },
    { id: 8, name: "Patlıcan", price: 40, grup: "Sebze", quantity: 1 },
    { id: 9, name: "Badem", price: 150, grup: "Kuru Yemiş", quantity: 1 },
    { id: 10, name: "Fındık", price: 200, grup: "Kuru Yemiş", quantity: 1 },
    { id: 11, name: "Ceviz", price: 250, grup: "Kuru Yemiş", quantity: 1 },
    { id: 12, name: "Fıstık", price: 300, grup: "Kuru Yemiş", quantity: 1 },
    { id: 13, name: "Kaju", price: 350, grup: "Kuru Yemiş", quantity: 1 },
    { id: 14, name: "Üzüm", price: 120, grup: "Meyve", quantity: 1 },
    { id: 15, name: "Çilek", price: 90, grup: "Meyve", quantity: 1 },
  ];
  const [sepet, setSepet] = useState([]);

  const handleSelectItem = (item: string) => {
    setSelectedUrunGrup(item);
  };
  const handleButtonClick = (caption: string) => {
    if (caption === "Set Alarm") setAlarm("Alarm is set");
    if (caption === "Release Alarm") setAlarm("");
    if (caption === "") setAlarm("");
  };
  const handleIncreaseItemQuantity = (id: number) => {
    setSepet((prevSepet) =>
      prevSepet.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecreaseItemQuantity = (id: number) => {
    setSepet((prevSepet) =>
      prevSepet
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const handleEmptyChart = () => {
    setSepet([]);
  };
  const handleLoginSuccess = (success: boolean) => {
    if (success) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleSepeteEkle = (urun: Urun) => {
    setSepet((prevSepet) => {
      const item = prevSepet.find((item) => item.id === urun.id);
      if (item) {
        return prevSepet.map((item) =>
          item.id === urun.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevSepet, { ...urun, quantity: 1 }];
      }
    });
  };

  return (
    <div className="container-fluid pt-2">
      {alarm && (
        <Alert header="DIKKAT" message={alarm} onClick={handleButtonClick} />
      )}
      <div className="row">
        <div className="col-sm-2">
          <div className="row">
            <ListGroup
              items={urunGruplari.map((urungrup) => urungrup.name)}
              heading="Ürün Grupları"
              onSelectItem={handleSelectItem}
            />
            <Button
              text="Set Alarm"
              tip="primary"
              onClick={handleButtonClick}
            />
            {alarm && (
              <Button
                text="Release Alarm"
                tip="secondary"
                onClick={handleButtonClick}
              />
            )}
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h1>{selectedUrunGrup}</h1>
          </div>
          <div className="row justify-content-start row-cols-auto">
            {urunler.map(
              (urun) =>
                selectedUrunGrup === urun.grup && (
                  <div className="col mb-2 ">
                    <Fcard urun={urun} onSepeteEkle={handleSepeteEkle} />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="col-sm-2">
          <div className="row">
            <Login users={users} isLoginSuccesful={handleLoginSuccess} />
          </div>
          <div className="row">
            <ShoppingChart
              key={isLoggedIn ? "loggedIn" : "loggedOut"}
              items={sepet}
              isLoggedIn={isLoggedIn}
              increaseItemQuantity={handleIncreaseItemQuantity}
              decreaseItemQuantity={handleDecreaseItemQuantity}
              emptyChart={handleEmptyChart}
            />
          </div>
        </div>
      </div>
      <Footer header="by FATIH UNAL" message="Designed and Developed " />
    </div>
  );
}

export default App;
