export default function ({
  type,
  placeholder,
  isError,
  errMessage,
  onChange,
  onBlur,
  value,
  name,
}) {
  return (
    <div className='flex flex-col'>
      <input
        autoComplete='false'
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className='peer-invalid px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:ring-green-600'
      ></input>
      {isError && <p className='mt-2 text-red-600 text-sm'>{errMessage}</p>}
    </div>
  );
}
