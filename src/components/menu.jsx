import { useEffect, useState } from "react";

function Menu() {
  const [showNotification, setShowNotification] = useState(true);
  const notification = 2;

  // Mostrar nº de Notificações se for = 0, não mostra na tela
  useEffect(() => {
    if (notification === 0) {
      setShowNotification(false);
    } else {
      setShowNotification(true);
    }
  }, [notification]);

  return (
    <>
      {/* menu */}
      <div className="flex items-center justify-between mx-40 py-4 box-border max-md:mx-8">
        <img src="/images/logo.png" alt="Logo" />

        <ul className="w-96 flex justify-around max-md:hidden">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>loja</li>
          </a>
          <a href="/">
            <li>Produtos</li>
          </a>
          <a href="/">
            <li>Contato</li>
          </a>
        </ul>

        <div className="flex items-center">
          <a className="max-md:hidden" href="/">
            <img src="/images/icon/search.svg" alt="Pesquisar" />
          </a>
          <a className="max-md:hidden" href="/">
            <img src="/images/icon/user-circle.svg" alt="perfil" />
          </a>
          <div className="flex items-center">
            <a href="/">
              <img src="/images/icon/shopping-bag.svg" alt="sacola" />
            </a>
            {showNotification && (
              <div className="w-6 bg-dark text-white flex justify-center items-center rounded-full">
                {notification > 9 ? "9+" : notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
