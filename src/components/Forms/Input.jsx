export default function ({
  type,
  placeholder,
  isError,
  errMessage,
  onChange,
  onBlur,
  value,
  name,
  label,
}) {
  return (
    <div className='flex flex-col'>
      <label
        htmlFor={name}
        className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-base font-medium text-gray-700 "
      >
        {label}
      </label>
      <input
        autoComplete='false'
        id={name}
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
