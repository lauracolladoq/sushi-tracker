import { TypeSushiCounter } from './TypeSushiCounter.jsx'
const tipos = [
    {
        id: 1,
        name: 'Maki',
        img: './src/assets/sushi-types/maki.png'
    },
    {
        id: 2,
        name: 'Uramaki',
        img: './src/assets/sushi-types/uramaki.png'
    },
    {
        id: 3,
        name: 'Nigiri',
        img: './src/assets/sushi-types/nigiri.png'
    },
    {
        id: 4,
        name: 'Sashimi',
        img: './src/assets/sushi-types/sashimi.png'
    },
    {
        id: 5,
        name: 'Futomaki',
        img: './src/assets/sushi-types/futomaki.png'
    },
    {
        id: 6,
        name: 'Temaki',
        img: './src/assets/sushi-types/temaki.png'
    },
    {
        id: 7,
        name: 'Gunkan',
        img: './src/assets/sushi-types/gunkan.png'
    },
    {
        id: 8,
        name: 'Onigiri',
        img: './src/assets/sushi-types/onigiri.png'
    },
    {
        id: 9,
        name: 'Other',
        img: './src/assets/sushi-types/other.png'
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