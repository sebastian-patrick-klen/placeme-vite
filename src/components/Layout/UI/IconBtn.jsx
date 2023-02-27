const IconBtn = ({ icon }) => {
  return (
    <button className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
      {icon}
    </button>
  );
};
export default IconBtn;
