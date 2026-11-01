import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { Product, PRODUCTS } from "@/lib/data"

type ShopSearchProps = {
    activeCategory?: string;
    setFilteredProducts: (products: Product[]) => void;

}
const ShopSearch = ({ activeCategory, setFilteredProducts, }: ShopSearchProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        const search = searchText.toLowerCase()

        const filter = (product: Product) => {
            const matchesCategory = activeCategory === "All"
                ? product
                : product.category === activeCategory
            const matches = product.name.toLowerCase().includes(search)

            return matches && matchesCategory
        }

        setFilteredProducts(PRODUCTS.filter(filter))
    }, [searchText, activeCategory, setFilteredProducts])

    return (
        <div className='w-full h-13 bg-transparent rounded-lg cursor-pointer border border-[#383737] flex items-center px-5 gap-5'
            onClick={() => {
                inputRef.current?.focus()
            }}
        >
            <IoIosSearch size={28} className="text-[#717478] my-2" />
            <input
                ref={inputRef}
                type="text"
                placeholder="Search for products Brands and more"
                className="appearance-none w-full h-full border-none focus:outline-none outine-none placeholder:text-[#6D6D6D]"
                value={searchText} onChange={(e) => setSearchText(e.target.value)}
            />

            {searchText && <MdClear size={30} className="my-2 cursor-pointer" onClick={() => setSearchText("")} />}
        </div>
    )
}

export default ShopSearch