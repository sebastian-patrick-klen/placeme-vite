import * as Dialog from '@radix-ui/react-dialog';
import Map from '../Map/Map';

const SelectLocation = ({ open, setOpen }) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className='w-full mr-4 py-2 px-4
          rounded-full border-0
          text-sm font-semibold
          bg-green-50 text-green-700
          hover:bg-green-100'
        >
          Vybrat místo na mapě
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[85vh]  w-[80vw] overflow-hidden translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          <Map
            placesData={[]}
            className='absolute top-0 left-0 w-full h-full'
            isEdit={true}
          />
          ;
          <Dialog.Close asChild>
            <button className='bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none z-[100]'>
              Save changes
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SelectLocation;
