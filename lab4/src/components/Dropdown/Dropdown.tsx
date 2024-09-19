import React, { useState, useEffect, useRef } from 'react';

interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  items: DropdownItem[];
  multiple?: boolean;
  onSelect: (selected: DropdownItem | DropdownItem[] | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, multiple = false, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<DropdownItem[]>(items);
  const [selectedItems, setSelectedItems] = useState<DropdownItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filtered = items.filter(item =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setHighlightedIndex(filtered.length > 0 ? 0 : -1);
  }, [searchTerm, items]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (item: DropdownItem) => {
    let newSelectedItems = [...selectedItems];

    if (multiple) {
      if (newSelectedItems.find(i => i.id === item.id)) {
        newSelectedItems = newSelectedItems.filter(i => i.id !== item.id);
      } else {
        newSelectedItems.push(item);
      }
    } else {
      newSelectedItems = [item];
      setIsOpen(false);
    }

    setSelectedItems(newSelectedItems);
    onSelect(multiple ? newSelectedItems : item);
  };

  const clearSelection = () => {
    setSelectedItems([]);
    onSelect(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (event.key === 'ArrowDown') {
        setIsOpen(true);
        setHighlightedIndex(0);
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        setHighlightedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
        break;
      case 'Enter':
        if (highlightedIndex >= 0 && highlightedIndex < filteredItems.length) {
          handleSelect(filteredItems[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const isSelected = (item: DropdownItem) => {
    return selectedItems.some(selected => selected.id === item.id);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-64" ref={inputRef}>
      <div className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        {selectedItems.length > 0 && (
          <button
            onClick={clearSelection}
            className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Clear selection"
          >
            &#x2715;
          </button>
        )}
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto shadow-lg">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={item.id}
                className={`p-2 cursor-pointer flex items-center ${
                  highlightedIndex === index ? 'bg-gray-200' : ''
                } ${isSelected(item) ? 'font-bold' : ''}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
                {isSelected(item) && <span className="ml-auto">&#x2713;</span>}
              </li>
            ))
          ) : (
            <li className="p-2 text-center text-gray-500">Нічого не знайдено</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
