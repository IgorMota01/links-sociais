import { Link } from 'react-router-dom'

export function ErrorPage() {
    return (
        <div className='flex w-full justify-center items-center flex-col text-white min-h-screen'>
            <h1 className="font-bold text-6xl mb-4">ERRO 401</h1>
            <h1 className='font-bold text-4xl mb-4'>Página não existe</h1>
            <p className='italic text-1xl mb-4'>Você caiu em uma página inexistente</p>
            <Link
                className="bg-gray-50/20 py-1 px-4 rounded-md"
                to="/">
                Voltar para Home
            </Link>
        </div>
    )
}