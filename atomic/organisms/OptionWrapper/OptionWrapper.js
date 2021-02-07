import React from 'react';
import { Title } from '../../atoms';
import { Option } from '../../molecules';

const OptionsWrapper = ({options, options:{header, searchResults, searchResults:{results}}}) => {
  
  return(
  <>
    <Title children={header} className='' size='1' />
    {results &&
    results.map((props, index) => (
      <Option  {...props} key={props.id} />
    ))}
  </>
)}


export default OptionsWrapper;