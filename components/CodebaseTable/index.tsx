import * as React from 'react';
import Link from '@mui/material/Link';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';

const CodebaseTable = ({ codebases } : {codebases: any[]}) => {
	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'Short Name',
			width: 100,
			editable: false
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 250,
			editable: false
		},
		{
			field: 'platform',
			headerName: 'Platform',
			sortable: false,
			width: 80,
			editable: false,
		},
		{
			field: 'language',
			headerName: 'Language',
			width: 150,
			editable: false
		},
		{
			field: 'website',
			headerName: 'Website',
			sortable: false,
			width: 260,
			editable: false,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            {params?.value?.length && <Link href={params.value}>{params.value}</Link>}
          </>
        );
			}
		},
		{
			field: 'repo',
			headerName: 'Repository',
			sortable: false,
			width: 260,
			editable: false,
		},
	];

  const rows = [];

  for (let key in codebases) {
    let codebase = codebases[key];

		rows.push({
      id: key,
			name: codebase.name,
      website: codebase?.website ?? null,
      repo: codebase?.repo ?? null,
      platform: codebase?.platform ?? null,
      language: codebase?.language ?? null
    });
	};

  return (
    <div style={{ height: 53 * (rows.length + 2), width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={100}
      disableSelectionOnClick
    />
  </div>
  );
};

export default CodebaseTable;
