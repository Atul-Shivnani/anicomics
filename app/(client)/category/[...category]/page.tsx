import {categoryData} from '../../actions/category';
import ProductCard from '../../components/ui/productCard';
import Header from '../../components/ui/header';
import Category from '../../components/ui/category';

export default async function CategoryPage({params,
    searchParams,
  }: {
    params: { category: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }){
    const url = decodeURIComponent(params.category) 
    const res:any = await categoryData(url)
return <div className='bg-orange-50 h-dvh'>
    <Header/>
    <Category/>
      <div className='grid grid-cols-4 p-10 mt-20 gap-10'>
        
        {res.map(r=>(<ProductCard data={r}/>))}
      </div>
</div>
}
