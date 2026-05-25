import Hero from '@/components/custom/Hero';
import ProductList from './_components/ProductList';
import TitleSection from '@/components/custom/title-section';

const page = () => {
    return (
        <div>
            <Hero bread={["Home", "Shop"]} page='Shop' />
            <TitleSection title='Products' description='All of our products are organic & fresh.' />
            <ProductList />
        </div>
    )
}

export default page
