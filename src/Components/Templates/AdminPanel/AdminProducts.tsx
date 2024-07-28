import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import FormInput from '../../Modules/FormInput/FormInput'
import ProductTable from '../../Modules/AdminPanel/ProductTable'
import Button from '../../Modules/Button/Button'
import { useEffect, useState } from 'react'
import ToastAlert from '../../Modules/ToastAlert/ToastAlert'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToServer, getAllProductsFromServer } from '../../../Redux/store/products'
import { localStorageData } from '../../../Redux/store/auth'
import Modal from '../../Modules/Modal/Modal'
import Loader from '../../Modules/Loader/Loader'
import { getAllCollectionsFromServer } from '../../../Redux/store/collections'
import { AppDispatch, RootState } from '../../../Redux/store'
import { ICollections } from './AdminCollections'
import { IProductBox } from '../../Modules/ProductBox/ProductBox'
export default function AdminProducts() {

    const [isOkToastAlert, setIsOkToastAlert] = useState<boolean>(false)
    const [isOpenToastAlert, setIsOpenToastAlert] = useState<boolean>(false)
    const [toastAlertText, setToastAlertText] = useState<string>('')
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [productID, setProductID] = useState<number>()
    const dispatch = useDispatch<AppDispatch>()
    const allProducts = useSelector((state: RootState) => state.products)
    const allCollections = useSelector((state: RootState) => state.collections.allCollections as unknown) as ICollections[]


    const [images, setImages] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<number | null>(0)
    const [inventory, setInventory] = useState<number | null>(0)
    const [selectCollection, setSelectCollection] = useState<number>(0)

    const getProductTitle = (e) => {
        setTitle(e.target.value);
    }
    const getProductPrice = (e) => {
        setPrice(e.target.value);
    }
    const getProductInventory = (e) => {
        setInventory(e.target.value);
    }
    const getProductImages = (e) => {
        setImages(e.target.files);
    }



    useEffect(() => {
        dispatch(getAllProductsFromServer())
        dispatch(getAllCollectionsFromServer())

    }, [])


    const addProduct = () => {
        const formData = new FormData();

        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i])
        }

        const newProduct = {
            newProductData: {
                title,
                slug: title,
                inventory,
                unit_price: price,
                collection: selectCollection
            },
            newProductImage: formData
        }

        dispatch(addProductToServer(newProduct))
            .then(res => {
                if (res.payload) {
                    setToastAlertText('New product added successfully.')
                    setIsOkToastAlert(true)
                    setIsOpenToastAlert(true);
                    setTimeout(() => {
                        setIsOpenToastAlert(false);
                    }, 3000);
                } else {
                    setToastAlertText('There was a problem adding a new product!')
                    setIsOkToastAlert(false)
                    setIsOpenToastAlert(true);
                    setTimeout(() => {
                        setIsOpenToastAlert(false);
                    }, 3000);
                }
            })

        setTitle('')
        setPrice(null)
        setInventory(null)
    }

    const openDeleteProductModal = async (productId: number) => {
        setIsOpenModal(true);
        setProductID(productId)
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    const confirmModal = () => {
        setIsOpenModal(false);

        fetch(`https://webstorepr.pythonanywhere.com/store/products/${productID}`, {
            method: "DELETE",
            headers: {
                'Authorization': `JWT ${localStorageData}`
            }
        })
            .then(res => {
                if (res.ok) {
                    setToastAlertText('Product Deleted successfully.')
                    setIsOkToastAlert(true)
                    setIsOpenToastAlert(true);
                    setTimeout(() => {
                        setIsOpenToastAlert(false);
                    }, 3000);
                    dispatch(getAllProductsFromServer())
                }
            }
            )
    }

    return (
        <>
            <div className=" text-white container mx-auto p-10 w-full h-full">
                <div className="">
                    <SectionHeader text='Add new Product' />
                </div>
                <div className=" p-10 flex justify-center  items-start flex-col  gap-10 w-full">
                    <div className=" flex justify-center items-start flex-col gap-5  w-full">
                        <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-5 w-full ">
                            <FormInput placeholder='Enter product name' type='text' label='Name' onChange={getProductTitle} />
                            <FormInput placeholder='Enter product price' type='number' label='Price' onChange={getProductPrice} />
                        </div>
                        <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-5 w-full ">
                            <FormInput placeholder='Enter product inventory' type='number' label='inventory' onChange={getProductInventory} />
                            <FormInput placeholder='Enter product image' type='file' label='image' onChange={getProductImages} />
                        </div>
                        <div className=" flex justify-center items-end flex-wrap md:flex-nowrap gap-5  text-black w-full">
                            <label htmlFor="" className=' w-full'>
                                <span className=' text-white'>Collections</span>
                                <select name="" id="" className=' focus:bg-primary mb-0.5 p-3 rounded-xl w-full cursor-pointer outline-none' onChange={(e) => setSelectCollection(+e.target.value)}>
                                    <option className=' bg-zinc-100' value={0}>Select a collection</option>
                                    {
                                        allCollections?.map((collection: { id: number, title: string }) => (
                                            <option value={collection.id}>{collection.title}</option>
                                        ))
                                    }
                                </select>
                            </label>
                            <div className="w-full text-center" onClick={addProduct}>
                                <Button text='Add Product' bgColor='white' padding=' p-3 w-full' />
                            </div>
                        </div>
                    </div>
                 {
                    allProducts.allProductsData ? (
                    <div className="relative overflow-auto shadow-lg w-full shadow-gray-600 rounded-lg border-1 border-primary mb-24 ">
                        <table className="w-full text-sm  rtl:text-right text-primary text-center ">
                            <thead className="text-xs uppercase  border-b  border-primary">
                                <tr>

                                    <th scope="col" className="px-6 py-3 ">
                                        images
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        title
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        price
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        price with tax
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        collection
                                    </th>
                                    <th scope="col" className="px-6 py-3 ">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProducts.allProductsData &&
                                    allProducts.allProductsData?.map((product: IProductBox) => (
                                        <ProductTable key={product.id} {...product} openDeleteProductModal={openDeleteProductModal} />
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>

                    ) : (
                        <Loader fullWithLoader={true}/>
                    )
                 }
                </div>
            </div>
            <Modal closeModal={closeModal} confirmModal={confirmModal} isOpen={isOpenModal} text="Are you sure you want to log out?" />
            <ToastAlert isOk={isOkToastAlert} isOpen={isOpenToastAlert} text={toastAlertText} />
            <ToastAlert isOk={true} isOpen={allProducts.loading} text={'Making the product...'} />
        </>
    )
}
