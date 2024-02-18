import {Link} from "react-router-dom";


function CategoryItem({ category }) {
    return (
        <Link to={`boards/category/${category.id}`} className="category-item">{ category.name }</Link>
    )
}

export default CategoryItem;