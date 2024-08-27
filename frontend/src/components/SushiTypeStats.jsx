import { TypeSushiCounter } from './TypeSushiCounter.jsx'
const tipos = [
    {
        id: 1,
        name: 'Maki',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 2,
        name: 'Uramaki',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 3,
        name: 'Nigiri',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 4,
        name: 'Sashimi',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 5,
        name: 'Futomaki',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 6,
        name: 'Temaki',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 7,
        name: 'Gunkan',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 8,
        name: 'Onigiri',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    },
    {
        id: 9,
        name: 'Other',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/sushi-1864521_960_720.jpg'
    }


]


export function SushiTypeStats() {
    return (
        <div className=' mt-8 border rounded-xl text-center p-4 '>
            <span className='text-xl font-bold uppercase'>Specific Sushi Counter</span>
            <div className='grid grid-cols-2 gap-4'>
                {tipos.map(el => (
                    <TypeSushiCounter key={el.id} name={el.name} img={el.img} />
                ))}
            </div>
        </div>
    )
}