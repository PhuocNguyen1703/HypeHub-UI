import AddFriendModal from '~/pages/Chat/components/Modal/AddFriendModal';
import CreateRoomModal from '~/pages/Chat/components/Modal/CreateRoomModal';

export const ModalProvider = () => {
  return (
    <>
      <AddFriendModal />
      <CreateRoomModal />
    </>
  );
};
