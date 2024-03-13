import React from 'react'
import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import PopularFilterItem from '../../Modules/PopularFilterItem/PopularFilterItem'
import { FaRegHeart } from "react-icons/fa";
import ProductBox from '../../Modules/ProductBox/ProductBox';
export default function Popular() {
  return (
    <div className='my-24 '>
      <div className=" flex justify-around items-center">
        <SectionHeader text='Most Popular Products' />
        <div className=" flex gap-4 p-1.5 border-1 border-black rounded-full">
          <PopularFilterItem isSelected={true} text='All' />
          <PopularFilterItem text='Dresses' />
          <PopularFilterItem text='Tops' />
          <PopularFilterItem text='Outerwear' />
          <PopularFilterItem text='Jacket' />
        </div>
      </div>
      <div className=" flex justify-center items-center flex-wrap gap-8 p-12 mx-auto max-w-[92rem]  ">
        <ProductBox size='lg' />
        <ProductBox size='lg' />
        <ProductBox size='lg' />
        <ProductBox size='lg' />
      </div>
    </div>
  )
}
