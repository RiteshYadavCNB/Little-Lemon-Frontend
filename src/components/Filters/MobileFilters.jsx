import { FilterPopupOptions } from "./MobileFiltersStyle";

const MobileFilters = () => {

    // dynamic filter component

    return (
        <FilterPopupOptions>
            <div tabIndex={0}>Price Range</div>
            <div tabIndex={1}>Meal Type</div>
        </FilterPopupOptions>
    );
};

export default MobileFilters;