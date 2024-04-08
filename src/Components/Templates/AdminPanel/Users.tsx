
import UsersBox from '../../Modules/AdminPanel/UsersBox';
import SectionHeader from '../../Modules/SectionHeader/SectionHeader';
export default function Users() {
  return (
    <div className="container mx-auto flex justify-center items-start flex-col p-10">
      <div className=" mb-10 text-white">
        <SectionHeader text='All Users'/>
      </div>
    <div className=' flex justify-center items-center flex-wrap gap-10 mb-20'>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
        <UsersBox/>
    </div>
    </div>
  )
}
