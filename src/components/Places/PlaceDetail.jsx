import Alert from '../Layout/UI/Alert';
import { AiFillSetting, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function PlaceDetail({ placesData }) {
  return (
    <div className='w-full calc-height flex items-center justify-center overflow-hidden rounded-lg'>
      <div className='max-w-2xl mx-auto flex flex-col bg-gray-100 rounded-lg overflow-hidden'>
        <img
          className=' h-96'
          src={`https://placeme-backend.onrender.com/${placesData.image}`}
          alt={placesData.title}
        ></img>

        <div className='mt-10 mb-8 px-5'>
          <h3 className='text-xl text-center font-bold'>{placesData.title}</h3>
          <Link to={`/user/${placesData.creator}`}>
            <h4 className='py-1 text-sm text-gray-800 text-center'>
              {placesData.creatorName}
            </h4>
          </Link>

          <p className='py-3 text-gray-600 text-center'>
            {placesData.description}
          </p>
          <div className='pt-3 flex items-center justify-center gap-4'>
            <Link to={`/map/${placesData.id}`}>
              <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                Ukázat na mapě
              </p>
            </Link>
            <>
              <Link to={`/places/new-place/${placesData.id}`}>
                <p className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                  <AiFillSetting size='21px' color='#94a3b8' />
                </p>
              </Link>

              <Alert
                title='Opravdu chcete smazat tento příspěvek?'
                message='Upozorňuji vás, že smazání příspěvku je nevratný krok, obsah
  bude trvale odstraněn!'
                btnOpen={
                  <button className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                    <AiFillDelete size='21px' color='#94a3b8' />
                  </button>
                }
                confirmBtn={
                  <button className='text-red11 bg-red4 hover:bg-red5 inline-flex py-3 items-center justify-center rounded-md px-4 font-medium leading-none outline-none'>
                    Smazat
                  </button>
                }
                cancleBtn={
                  <button className='text-mauve11 bg-mauve4 hover:bg-mauve5 inline-flex py-3 items-center justify-center rounded-md px-4 font-medium leading-none outline-none '>
                    Zrušit
                  </button>
                }
                btn='Smazat'
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
