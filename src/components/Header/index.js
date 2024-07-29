import './header.css';

export const Header = () => {
    return (
    <>
        {/* Header */}

        <div className='header'>
          <img
            src='/images/Image-header.png'
            alt='header Sala'
            className='header__image'
          />
          <div className='header__texto'>
            <div className='header__texto-link'>
              Home 
              <img 
                src='/images/icon/chevron-right.svg'
                alt='icone de seta'
              /> 
              <p className='header__texto-negrito'>Loja</p>
            
            </div>
            <h2 className='header__texto-titulo'>Página da loja</h2>
            <p className='header__texto-subtitulo'>Vamos projetar o lugar que você sempre imaginou.</p>
          </div>
        </div>
    </>
    )
}
