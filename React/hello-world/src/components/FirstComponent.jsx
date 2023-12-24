const saudacao = () => {
    alert('Olá mundo!');
    console.log('Olá mundo no console!');
}

const renderizar = (x) => {
    if(x){
        return <p>Sou verdadeiro!</p>
        
    }

    else{
        return <p>Sou falso!</p>
        
    }
}

const FirstComponent = () => {

    return (

        <div>
            <button onClick={saudacao}>Clique aqui</button>
            {renderizar(0)}
        </div>


    );
};

export default FirstComponent;