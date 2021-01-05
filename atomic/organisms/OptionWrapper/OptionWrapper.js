import React from 'react';
import { Title } from '../../molecules';
import { Option } from '../../atoms';

const OptionsWrapper = ({options, options:{header, searchResults, searchResults:{results}}}) => (
  <>
    <Title children={header} className='' size='1' />
    {results &&
    results.map((props, index) => (
      <Option {...props} key={props.id} />
    ))}
  </>
)


export default OptionsWrapper;