import { Link } from "react-router-dom";
import { listaOfertas } from "../../listaOfertas";

export default function Home(){
    return(
        <main className="pt-15 max-w-6xl mx-auto px-6">
            <h1 className="pb-10 text-5xl font-bold mb-6 text-center text-blue-950">Bem-vindo à Taroko Eletrônicos!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
                {
                listaOfertas.map((ofertas)=>(
                    <div key={ofertas.id} className="bg-red-100 border rounded-lg p-6 hover:shadow-lg transition-transform transform hover:scale-105 text-center">
                        <Link to={`/produtos/editar/${ofertas.id}`}> 
                            <div className="p-4 text-center font-bold text-4xl text-red-600">{ofertas.titulo}</div>
                            <div className=" pb-4 text-center font-bold text-3xl text-red-600">{ofertas.descricao}</div>
                            <img
                                src={ofertas.imagem}
                                alt={ofertas.descricao}
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

