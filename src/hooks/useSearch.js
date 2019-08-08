import { useState, useEffect } from 'react';

function useSearch() {
  const [searchIconType, setSearchIconType] = useState('GOOGLE');
  if (chrome.storage) {
    useEffect(() => {
      chrome.storage.sync.get(['searchIconType'], (result) => {
        if (result.key) {
          setSearchIconType(result.key);
        }
      });
    }, [searchIconType]);
  }
  return [searchIconType, setSearchIconType];
}

export default useSearch;