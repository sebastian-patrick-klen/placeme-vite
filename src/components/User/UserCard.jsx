import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  offscreen: { opacity: 0, scale: 1 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function UserCard({ img, name, posts, id }) {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.81 }}
      variants={cardVariants}
    >
      <div className='px-6 py-10 flex flex-col gap-4 items-center bg-gray-100 rounded-lg'>
        <div>
          <img
            className='object-cover w-20 h-20 bg-gray-100  rounded-full'
            src={img}
            alt={'Profile image'}
          />
        </div>
        <div>
          <h3 className='text-xl text-center font-bold'>{name}</h3>
          <p className='pb-5 pt-1 text-gray-600 text-center'>
            Počet příspěvků {posts}
          </p>
          <Link to={`/user/${id}`}>
            <p className='px-8 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
              Ukázat místa
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
