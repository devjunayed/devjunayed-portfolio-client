import { TProjectData } from "@/types";
import { IconCancel } from "@tabler/icons-react";
import { AnyObject } from "antd/es/_util/type";
import { useState } from "react";

interface TSelectableSearch {
  formData: TProjectData;
  setFormData: React.Dispatch<React.SetStateAction<TProjectData>>;
  items: AnyObject[];
  fieldName: string;
  label: string;
  placeholder: string;
}

const SelectableSearch = ({
  setFormData,
  formData,
  items,
  fieldName,
  placeholder,
  label,
}: TSelectableSearch) => {
  const refinedFieldName = fieldName as keyof TProjectData;
  const [searchItem, setSearchItem] = useState("");
  const [recommendedItem, setRecommendedItem] = useState(false);
  const filteredItems = items.filter((item: AnyObject) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleTagsChange = (field: AnyObject) => {
  console.log(field)
    setFormData((prev: TProjectData) => {
      const updatedField = [
        ...new Set([...(prev[refinedFieldName] as AnyObject[]), field]),
      ];
      return {
        ...prev,
        [fieldName]: updatedField,
      };
    });

    setSearchItem("")
  };

  const handleTagRemove = (field: AnyObject) => {
    const updatedField = (formData[refinedFieldName] as AnyObject[]).filter(
      (t: AnyObject) => t !== field
    );
    setFormData((prev: TProjectData) => ({
      ...prev,
      [fieldName]: updatedField,
    }));
  };
  return (
    <div className="w-full relative">
      <label htmlFor="search">{label}</label>
      <input
        id="search"
        onFocus={() => setRecommendedItem(true)}
        onBlur={() =>
          setTimeout(() => {
            setRecommendedItem(false);
          }, 100)
        }
        onChange={(e) => setSearchItem(e.target.value)}
        type="search"
        className="text-black w-full mt-2  py-2 px-3 focus:border-none focus:outline-none rounded-lg"
        placeholder={placeholder}
      />

      {recommendedItem && (
        <div className="flex z-50 hover:cursor-pointer absolute flex-col scrollbar-hide w-full  bg-white mt-2 h-50 overflow-y-scroll rounded text-black ">
          {filteredItems.map((item: AnyObject, index: number) => (
            <div
              onClick={() => handleTagsChange(item)}
              key={index}
              className="py-2 px-2 w-full hover:bg-gray-200"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-2">
        {(formData[refinedFieldName] as AnyObject[]).map(
          (field: AnyObject, index: number) => (
            <span
              className="border rounded-full px-2 p-1 flex gap-2"
              key={index}
            >
              {field.title}{" "}
              <span
                onClick={() => handleTagRemove(field as unknown as AnyObject)}
                className="cursor-pointer"
              >
                <IconCancel />
              </span>
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default SelectableSearch;
