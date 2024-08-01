import { useState } from "react";

function Cupom() {
  const [showCoupon, setShowCoupon] = useState(true);

  const handleCloseCoupon = () => {
    setShowCoupon(false);
  };
  return (
    <div>
      {/* Cupom */}
      {showCoupon && (
        <div className="bg-black flex items-center justify-center text-white p-2 gap-2 text-sm">
          <img src="/images/icon/ticket-percent.svg" alt="Ícone de cupom" />

          <p>30% de desconto — Tempo Limitado!</p>

          <div className="flex border-b-2 border-yellow-500">
            <a href="/" className="text-yellow-500">
              Compre Agora
            </a>
            <img src="/images/icon/arrow-right.svg" alt="icone de seta" />
          </div>

          <div
            className="absolute right-1 cursor-pointer"
            onClick={handleCloseCoupon}
          >
            <img src="/images/icon/x.svg" alt="icone de x" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cupom;
