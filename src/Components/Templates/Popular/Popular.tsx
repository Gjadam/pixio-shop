import SectionHeader from '../../Modules/SectionHeader/SectionHeader'
import PopularFilterItem from '../../Modules/PopularFilterItem/PopularFilterItem'
import ProductBox from '../../Modules/ProductBox/ProductBox';
export default function Popular() {
  return (
    <div className=' container mx-auto my-24 '>
      <div className=" flex justify-between md:flex-row flex-col gap-3 items-center">
        <SectionHeader text='Most Popular Products' />
        <div className=" flex gap-4 p-1.5 border-1 border-black rounded-full">
          <PopularFilterItem isSelected={true} text='All' />
          <PopularFilterItem text='Dresses' />
          <PopularFilterItem text='Tops' />
          <PopularFilterItem text='Outerwear' />
          <PopularFilterItem text='Jacket' />
        </div>
      </div>
      <div className=" flex justify-center items-center flex-wrap gap-8 p-12 mx-auto   ">
        <ProductBox size='lg' />
        <ProductBox size='lg' />
        <ProductBox size='lg' />
        <ProductBox size='lg' />
      </div>
    </div>
  )
}
