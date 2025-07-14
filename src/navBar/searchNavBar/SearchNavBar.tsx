import React from 'react';

interface searchNavBarProps {
    valueSearch: string,
    setValueSearch: (search: string) => void,
    setSearch?: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const SearchNavBar: React.FC<searchNavBarProps> = ({valueSearch, setValueSearch, setSearch}) => {

    return (
        <input className="search"
               key="search-bar"
               type="text"
               value={valueSearch ? valueSearch : ""}
               placeholder="Фильмы, сериалы, персоны"
               onChange={e => {
                   setValueSearch(e.target.value);
                   if (setSearch) {
                       setSearch(true)
                   }
               }}/>
    );
};

export default SearchNavBar;