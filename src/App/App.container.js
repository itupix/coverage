import React, { useState, useCallback } from 'react';
import App from './App';

export const statusList = [
  { name: 'OK' },
  { name: 'LOADING' },
  { name: 'ERROR' }
];

export const onClickCallback = ({ setList, list }) => () => {
  let displayedList = statusList;

  if(list.length) {
    displayedList = [];
  }

  setList(displayedList)
};

export const selectItemCallback = ({ setStatus }) => displayedStatus => {
  setStatus(displayedStatus);
}

const useHooks = () => {
  const [status, setStatus] = useState(null);
  const [list, setList] = useState([]);

  const onClick = useCallback(onClickCallback({ setList, list }), [list]);
  const selectItem = useCallback(selectItemCallback({ setStatus }), []);

  return {
    status,
    list,
    onClick,
    selectItem
  }
};

const Enhanced = () => {
  const props = useHooks();
  return <App { ...props } />;
}

export default Enhanced;

