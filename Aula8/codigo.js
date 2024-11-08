const url = "https://botafogo-atletas.mange.li/2024-1/"

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const container = document.getElementById("container");

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descricao = document.createElement("p");
    const link = document.createElement("a");

    nome.innerHTML = atleta.nome;
    nome.style.fontFamily= 'sains-serif';
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descricao.innerHTML = atleta.detalhes;
    cartao.appendChild(descricao);

    link.innerText = 'Saiba Mais';
    link.href = `detalhes.html?id=${atleta.id}`;
    cartao.appendChild(link);

    return cartao;
}

pega_json(`${url}masculino`).then( 
    (r) => {
        r.forEach(
            (ele) => container.appendChild(montaCard(ele))
        )
    }
);