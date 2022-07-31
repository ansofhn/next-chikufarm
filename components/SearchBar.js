import { useRef } from "react";
import { Input } from "antd";

const SearchBar = () => {
    const onSearch = (value) => console.log(value);

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

    return (
        <div className="relative mr-3">
            <div className="absolute p-2.5 items-center" ref={clickPoint}>
                <svg
                    className="w-5 h-5 text-textColor"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>
            <Input
                type="text"
                className="block p-2 pl-10 w-70 text-sm text-textColor bg-white rounded-lg border border-shadowColor focus:pl-3 focus:ring-0 focus:border-shadowColor"
                placeholder="Search"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onPressEnter={onSearch}
            />
        </div>
    );
};

export default SearchBar;
