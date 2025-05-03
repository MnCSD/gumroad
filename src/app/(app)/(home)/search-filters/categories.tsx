import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface CategoriesProps {
  data: any;
}

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category: Category) => (
          <div key={category.id} className="flex flex-col gap-2">
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigationHover={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
