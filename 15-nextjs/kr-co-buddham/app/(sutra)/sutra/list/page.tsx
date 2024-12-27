'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchSutras } from '@/app/services/sutra.service';
import { ISutra } from '@/app/interfaces/sutra';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

// 클라이언트 컴포넌트
export default function SutraList() {
  const {
    data: sutras,
    isLoading,
    isError,
  } = useQuery<ISutra[]>({
    queryKey: ['sutras'],
    queryFn: fetchSutras,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {/* Data Grid */}
      <div className="bg-slate-200 w-full">
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </div>

      {/* Data */}
      <div className="bg-slate-200">
        <h1 className="font-dongle">경전 목록</h1>
        <ul>
          {sutras?.map((sutra) => (
            <li key={sutra.id}>{sutra.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
