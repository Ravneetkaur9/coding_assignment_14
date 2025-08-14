type TableCellProps = {
  text?: string;   // now optional
  url?: string;
};

const TableCell = ({ text, url }: TableCellProps) => {
  return (
    <td>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {text || url}
        </a>
      ) : (
        text
      )}
    </td>
  );
};

export default TableCell;
