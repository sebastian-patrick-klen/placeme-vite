import Alert from '../Layout/UI/Alert';
import { AiFillSetting, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PlaceRemover from '../Editor/PlaceRemover';
import { getAuthToken } from '../../utils/auth';

export default function PlaceDetail({ place }) {
  const token = getAuthToken();

  return (
    <div className='w-full calc-height flex items-center justify-center overflow-hidden rounded-lg'>
      <div className='max-w-2xl mx-auto flex flex-col bg-gray-100 rounded-lg overflow-hidden'>
        <img
          className=' max-w-2xl max-h-96'
          src={place.image}
          alt={place.title}
        ></img>

        <div className='mt-10 mb-8 px-5'>
          <h3 className='text-xl text-center font-bold'>{place.title}</h3>
          <Link to={`/user/${place.creator}`}>
            <h4 className='py-1 text-sm text-gray-800 text-center'>
              {place.creatorName}
            </h4>
          </Link>

          <p className='py-3 text-gray-600 text-center'>{place.description}</p>
          <div className='pt-3 flex items-center justify-center gap-4'>
            <Link to={`/map/${place.id}`}>
              <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
                Ukázat na mapě
              </p>
            </Link>
            {token[1] && token[0] === place.creator && (
              <>
                <Link to={`/place/${place.id}/edit`}>
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
                  confirmBtn={<PlaceRemover id={place.id} />}
                  cancleBtn={
                    <button className='text-mauve11 bg-mauve4 hover:bg-mauve5 inline-flex py-3 items-center justify-center rounded-md px-4 font-medium leading-none outline-none '>
                      Zrušit
                    </button>
                  }
                  btn='Smazat'
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
