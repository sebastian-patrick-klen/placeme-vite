import * as AlertDialog from '@radix-ui/react-alert-dialog';

const Alert = ({
  title,
  message,
  cancleBtn,
  confirmBtn,
  btnOpen,
  open,
  setOpen,
}) => (
  <AlertDialog.Root open={open} onOpenChange={setOpen}>
    {btnOpen && <AlertDialog.Trigger asChild>{btnOpen}</AlertDialog.Trigger>}
    <AlertDialog.Portal>
      <AlertDialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
      <AlertDialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
        <AlertDialog.Title className='text-mauve12 m-0 text-[17px] font-medium'>
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className='text-mauve11 mt-4 mb-5 text-[15px] leading-normal'>
          {message}
        </AlertDialog.Description>
        <div className='flex justify-start gap-6'>
          <AlertDialog.Cancel asChild>
            {cancleBtn && cancleBtn}
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            {confirmBtn && confirmBtn}
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Alert;
