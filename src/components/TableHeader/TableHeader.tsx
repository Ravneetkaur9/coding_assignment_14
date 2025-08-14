import React from 'react';

type TableHeaderProps = {
  text: string;
};

const TableHeader = ({ text }: TableHeaderProps) => {
  return <th>{text}</th>;
};

export default TableHeader;
