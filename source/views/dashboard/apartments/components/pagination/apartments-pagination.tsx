import type { Table } from "@tanstack/react-table";
import type { Apartment } from "@/views/dashboard/apartments/data";
import ResultPage from "./components/result-page";
import PageNumberInformation from "./components/page-number-information";
import PageButton from "./components/page-button";


type ApartmentsPaginationProps = {
  table: Table<Apartment>;
  id: string;
};

export default function ApartmentsPagination({ table, id }: ApartmentsPaginationProps) {
  return (
    <div className="flex items-center justify-between gap-8">
        {/* Results per page */}
        <ResultPage table={table} id={id} />
        {/* Page number information */}
        <PageNumberInformation table={table} />
        
        {/* Pagination buttons */}
        <PageButton table={table} />
      </div>
  )
}
