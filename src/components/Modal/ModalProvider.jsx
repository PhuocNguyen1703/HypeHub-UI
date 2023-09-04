import AddFriendModal from '~/pages/Chat/components/Modal/AddFriendModal';
import CreateRoomModal from '~/pages/Chat/components/Modal/CreateRoomModal';
import JoinRoomModal from './JoinRoomModal/JoinRoomModal';

export const ModalProvider = () => {
  return (
    <>
      <CreateRoomModal />
      <JoinRoomModal />
      <AddFriendModal />
    </>
  );
};
