import AddFriendModal from '~/pages/Chat/components/Modal/AddFriendModal';
import CreateRoomModal from '~/pages/Chat/components/Modal/CreateRoomModal';
import JoinRoomModal from './JoinRoomModal/JoinRoomModal';
import RoomSetting from './RoomSetting/RoomSetting';
import DeleteRoom from './DeleteRoom/DeleteRoom';

export const ModalProvider = () => {
  return (
    <>
      <CreateRoomModal />
      <JoinRoomModal />
      <AddFriendModal />
      <RoomSetting />
      <DeleteRoom />
    </>
  );
};
