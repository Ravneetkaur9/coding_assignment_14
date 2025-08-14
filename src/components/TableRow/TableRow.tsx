type TableRowProps = {
  children: React.ReactNode;
};

const TableRow = ({ children }: TableRowProps) => <tr>{children}</tr>;

export default TableRow;
