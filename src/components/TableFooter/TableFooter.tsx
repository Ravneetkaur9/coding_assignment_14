type TableFooterProps = {
  summary: string;
};

const TableFooter = ({ summary }: TableFooterProps) => {
  return (
    <tfoot>
      <tr>
        <td colSpan={3}>{summary}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;

