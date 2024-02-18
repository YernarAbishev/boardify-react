import CategoryItem from "./CategoryItem";
import {useEffect, useState} from "react";
import SkeletonLine from "../Skeleton-line";
function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const res = await fetch (
                    "https://65c595dce5b94dfca2e01609.mockapi.io/categories"
                );
                const data = await res.json();
                setCategories(data);
            } catch (e) {
                console.log("error")
            } finally {
                setIsLoading(false);
            }
        }

        fetchCategories();

    }, []);


    return (
        <div className="categories">
            {isLoading ? (
                <SkeletonLine />
            ) : (
                categories.map((category) => <CategoryItem category={category} key={category.id} />)
            )}
        </div>
    )
}

export default CategoryList;