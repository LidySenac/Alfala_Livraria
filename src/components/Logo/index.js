
import logo from '../../img/logo.svg'
import styled from 'styled-components';

const Logos = styled.div`
display: flex;
font-size: 30px;
`

const Imagem = styled.img`
margin-right: 10px;
`

function Logo() {
    return (
        <Logos>
            <Imagem 
            src={logo} 
            alt='Alfala logo'
            className='logo-img'>
            </Imagem>
            <p><strong>Alfala</strong>Books</p>
        </Logos>
    )
}

export default Logo;