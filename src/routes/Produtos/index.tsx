import { Link } from "react-router-dom";
import { listaAparelhos } from "../../listaAparelhos";

export default function Produtos(){
    return(
        <main className="p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Produtos</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {
                listaAparelhos.map((prod)=>(
                    <div key={prod.id} className="border rounded-lg p-4 hover:shadow-lg transition-transform transform hover:scale-105">
                        <Link to={`/produtos/editar/${prod.id}`}> 
                            <div className="font-semibold text-lg mb-2">{prod.modelo}</div>
                            <img
                                src={prod.imagem}
                                alt={prod.descricao}
                                className="w-full h-60 object-contain mx-auto rounded-xl"
                            />
                        </Link>
                    </div>
                ))
            }
            </div>
        </main>
    )
}

