import { useEffect, useState } from 'react'
import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCollectionsFromServer } from '../../../Redux/store/collections'
import FormInput from '../../Modules/FormInput/FormInput'
import Button from '../../Modules/Button/Button'
import { localStorageData } from '../../../Redux/store/auth'
import ToastAlert from '../../Modules/ToastAlert/ToastAlert'
import Modal from '../../Modules/Modal/Modal'
import { MdDelete } from 'react-icons/md'
import { AppDispatch, RootState } from '../../../Redux/store'

export interface ICollections {
    id: number
    title: string
    products_count: string
}

export default function AdminCollections() {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [toastAlertText, setToastAlertText] = useState<string>('')
    const [isOpenToastAlert, setIsOpenToastAlert] = useState<boolean>(false)
    const [isOkToastAlert, setIsOkToastAlert] = useState<boolean>(false)
    const [collectionID, setCollectionID] = useState<number>()

    const dispatch = useDispatch<AppDispatch>()
    const allCollections = useSelector((state: RootState) => state.collections.allCollections as unknown) as ICollections[] 

    console.log(allCollections);
    

    useEffect(() => {
        dispatch(getAllCollectionsFromServer)
    }, [])

    const getProductTitle = (e) => {
        setTitle(e.target.value);
    }

    const addNewCollection = () => {
        fetch(`https://myecommerceapi.pythonanywhere.com/store/collections/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `JWT ${localStorageData}`
            },
            body: JSON.stringify({
                title
            })
        })
            .then(res => {
                if (res.ok) {
                    setToastAlertText('Collection Added successfully.')
                    setIsOkToastAlert(true)
                    setIsOpenToastAlert(true);
                    setTimeout(() => {
                        setIsOpenToastAlert(false);
                    }, 3000);
                    dispatch(getAllCollectionsFromServer())
                }
            })
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    const openDeleteCollectionModal = async (collectionID: number) => {
        setIsOpenModal(true);
        setCollectionID(collectionID)
    }


    const confirmModal = () => {
        setIsOpenModal(false);

        fetch(`https://myecommerceapi.pythonanywhere.com/store/collections/${collectionID}/`, {
            method: "DELETE",
            headers: {
                'Authorization': `JWT ${localStorageData}`
            }
        })
            .then(res => {
                if (res.ok) {
                    setToastAlertText('Collection Deleted successfully.')
                    setIsOkToastAlert(true)
                    setIsOpenToastAlert(true);
                    setTimeout(() => {
                        setIsOpenToastAlert(false);
                    }, 3000);
                    dispatch(getAllCollectionsFromServer())
                }
            })
    }

    return (
        <>

            <div className=" text-white container mx-auto p-10 w-full h-full">
                <div className="">
                    <SectionHeader text='Add new Collection' />
                </div>
                <div className=" p-10 flex justify-center  items-start flex-col  gap-10 w-full">
                    <div className=" flex justify-center items-start flex-col gap-5  w-full">
                        <div className=" flex justify-center items-end flex-wrap md:flex-nowrap gap-5  text-white w-full">
                            <FormInput placeholder='Enter collection title' type='text' label='Title' onChange={getProductTitle} />
                            <div className="w-full text-center" onClick={addNewCollection}>
                                <Button text='Add Collection' bgColor='white' padding=' p-3 w-full' />
                            </div>
                        </div>
                    </div>
                    {
                        allCollections &&
                        <div className="relative overflow-auto shadow-lg w-full shadow-gray-600 rounded-lg border-1 border-primary mb-24 ">
                            <table className="w-full text-sm  rtl:text-right text-primary text-center ">
                                <thead className="text-xs uppercase  border-b  border-primary">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 ">
                                            id
                                        </th>
                                        <th scope="col" className="px-6 py-3 ">
                                            title
                                        </th>
                                        <th scope="col" className="px-6 py-3 ">
                                            products count
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allCollections ? (
                                            allCollections.map((collection: ICollections) => (
                                                <tr className=" border-b border-primary odd:hover:bg-primary even:hover:bg-secondary hover:text-black transition-colors duration-200">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                                        {collection.id}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                                        {collection.title}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                                        {collection.products_count}
                                                    </th>
                                                    <td className="pl-12 py-4 pr-4 " onClick={() => openDeleteCollectionModal(collection.id)}>
                                                        <MdDelete className=" text-2xl hover:text-rose-600 transition-colors cursor-pointer" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <span>loading...</span>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
            <Modal closeModal={closeModal} confirmModal={confirmModal} isOpen={isOpenModal} text="Delete this collection?" />
            <ToastAlert isOk={isOkToastAlert} isOpen={isOpenToastAlert} text={toastAlertText} />
        </>
    )
}
