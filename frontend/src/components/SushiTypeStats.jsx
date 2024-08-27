import { TypeSushiCounter } from './TypeSushiCounter.jsx'
const tipos = [
    {
        id: 1,
        name: 'Maki',
        img: './src/assets/react.svg'
    },
    {
        id: 2,
        name: 'Uramaki',
        img: './src/assets/react.svg'
    },
    {
        id: 3,
        name: 'Nigiri',
        img: './src/assets/react.svg'
    },
    {
        id: 4,
        name: 'Sashimi',
        img: './src/assets/react.svg'
    },
    {
        id: 5,
        name: 'Futomaki',
        img: './src/assets/react.svg'
    },
    {
        id: 6,
        name: 'Temaki',
        img: './src/assets/react.svg'
    },
    {
        id: 7,
        name: 'Gunkan',
        img: './src/assets/react.svg'
    },
    {
        id: 8,
        name: 'Onigiri',
        img: './src/assets/react.svg'
    },
    {
        id: 9,
        name: 'Other',
        img: './src/assets/react.svg'
    }
]

export function SushiTypeStats() {
    return (
        <div className=' mt-8 border rounded-xl text-center p-4 '>
            <span className='text-xl font-bold uppercase'>Specific Sushi Counter</span>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                {tipos.map(el => (
                    <TypeSushiCounter key={el.id} name={el.name} img={el.img} />
                ))}
            </div>
        </div>
    )
}