import AddFriendModal from '~/pages/Chat/components/Modal/AddFriendModal';
import CreateRoomModal from '~/pages/Chat/components/Modal/CreateRoomModal';
import JoinRoomModal from './JoinRoomModal/JoinRoomModal';
import RoomSetting from './RoomSetting/RoomSetting';
import DeleteRoom from './DeleteRoom/DeleteRoom';
import InvitePeople from './InvitePeople/InvitePeople';
import CreateCategory from './CreateCategory/CreateCategory';

export const ModalProvider = () => {
  return (
    <>
      <CreateRoomModal />
      <JoinRoomModal />
      <AddFriendModal />
      <RoomSetting />
      <InvitePeople />
      <DeleteRoom />
      <CreateCategory />
    </>
  );
};
