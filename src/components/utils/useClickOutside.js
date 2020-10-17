import { useEffect, useState } from 'react';

export default function useClickOutside(node, event) {
  const [open, setOpen] = useState(false);
  const handleClickOutside = () => {
    if (node.current.contains(event.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return open;
}
