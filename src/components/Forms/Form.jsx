export default function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      autoComplete='off'
      encType='multipart/form-data'
      className='flex flex-col gap-3'
    >
      {children}
    </form>
  );
}
