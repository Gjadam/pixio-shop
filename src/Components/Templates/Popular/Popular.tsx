import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import PopularFilterItem from '../../Modules/PopularFilterItem/PopularFilterItem'
import ProductBox from '../../Modules/ProductBox/ProductBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromServer } from '../../../Redux/store/products';
import { ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from '@reduxjs/toolkit/query';

export type IProducts = [
  {
    collection: number
    id: number
    images: [] | undefined
    inventory: number
    price_with_tax: number
    slug: string
    title: string
    unit_price: number
  }
]

export default function Popular() {

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const allProducts = useSelector((state: RootState) => state.products.allProductsData)
  
  useEffect(() => {
    dispatch(getAllProductsFromServer())
  }, [])
  
  

  return (
    <div className=' container mx-auto my-24 '>
      <div className=" flex justify-between md:flex-row flex-col gap-3 items-center">
        <SectionHeader text='Most Popular Products' />
        <div className=" lg:w-96 w-80 mx-10 flex gap-4 p-1.5 border-1 border-black rounded-full">
          <PopularFilterItem isSelected={true} text='All' />
          <PopularFilterItem text='Dresses' />
          <PopularFilterItem text='Tops' />
          <PopularFilterItem text='Outerwear' />
          <PopularFilterItem text='Jacket' />
        </div>
      </div>
      <div className=" flex justify-center items-start flex-wrap gap-8 p-12 mx-auto   ">
        {
          allProducts?.slice(0, 8).map(product => (
            <ProductBox size='lg' key={product.id} {...product} />
          ))
        }
      </div>
    </div>
  )
}
