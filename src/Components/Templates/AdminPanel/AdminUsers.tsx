import { useEffect } from 'react';
import UsersBox from '../../Modules/AdminPanel/UsersBox';
import SectionHeader from '../../Modules/SectionHeader/SectionHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersFromServer } from '../../../Redux/store/users';
import { AppDispatch, RootState } from '../../../Redux/store';

export interface IAdminUsers {
  id: number;
  username: string;
  email: string;
}

export default function AdminUsers() {

  const dispatch = useDispatch<AppDispatch>()
  const allUsers = useSelector((state: RootState) => state.users)
  useEffect(() => {
    dispatch(getAllUsersFromServer())
  }, [])


  return (
    <div className="container mx-auto flex justify-center items-start flex-col p-10">
      <div className=" mb-10 text-white">
        <SectionHeader text='All Users' />
      </div>
      <div className=' flex justify-center items-center flex-wrap gap-10 mb-20'>
        {
          allUsers?.map((users: IAdminUsers) => (
            <UsersBox key={users.id} {...users} />
          ))
        }
      </div>
    </div>
  )
}
