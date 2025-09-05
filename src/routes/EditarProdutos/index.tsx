
import { useParams } from "react-router-dom";
import { listaAparelhos } from "../../listaAparelhos";
import Error from "../Error";

export default function EditarProdutos() {
    const { id } = useParams();
    const produto = listaAparelhos.find((p) => String(p.id) === id);

    if (!produto) {
        return <Error/>;
    }

    return (
    <main className="p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">{produto.nome}</h1>
        <img
            src={produto.imagem}
            alt={produto.descricao}
            className="w-full h-70 object-contain mx-auto rounded-xl pb-6"
            />
        <p className="text-gray-700 mb-3 font-semibold text-3xl text-center">Preço: R$ {produto.preco},00</p>
        <p className="text-gray-700 mb-3 text-lg max-w-4xl mx-auto ">Descrição: {produto.descricao}</p>
        <p className="text-gray-700 mb-3 text-lg max-w-4xl mx-auto ">Categoria: {produto.categoria}</p>
    </main>
    );
}
