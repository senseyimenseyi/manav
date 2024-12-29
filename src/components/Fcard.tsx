interface Urun {
  id: number;
  name: string;
  price: number;
  grup: string;
  quantity: number;
}
interface FcardProps {
  urun: Urun;
  onSepeteEkle: (urun: Urun) => void;
}
function Fcard({ urun, onSepeteEkle }: FcardProps) {
  return (
    <div className="card" style={{ width: "16rem" }}>
      <img src="kiraz.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{urun.name}</h5>
        <p className="card-text">Fiyat: {urun.price} TL</p>
        <button className="btn btn-primary" onClick={() => onSepeteEkle(urun)}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default Fcard;
