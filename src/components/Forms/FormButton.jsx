export default function FormButton({ children, type, isValid }) {
  return (
    <button
      type={type}
      className={
        isValid
          ? 'px-5 py-4 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'
          : 'px-5 py-4 bg-green-500/80 text-sm uppercase text-white font-bold rounded-lg transition-colors pointer-events-none cursor-not-allowed'
      }
    >
      {children}
    </button>
  );
}
