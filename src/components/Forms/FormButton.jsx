export default function FormButton({ children, type, isValid, isLoading }) {
  let styles;

  if (!isValid) {
    styles =
      'mt-3 px-5 py-4 bg-green-500/80 text-sm uppercase text-white font-bold rounded-lg transition-colors pointer-events-none cursor-not-allowed';
  } else if (isValid && isLoading) {
    styles =
      'mt-3 px-5 py-4 bg-green-500/80 text-sm uppercase text-white font-bold rounded-lg transition-colors pointer-events-none cursor-not-allowed animation-pulse';
  } else {
    styles =
      'mt-3 px-5 py-4 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors';
  }
  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}
