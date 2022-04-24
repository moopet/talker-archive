import * as React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import Image from 'next/image';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import LinkIcon from '@mui/icons-material/Link';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import slugify from 'slugify';

const TalkerTable = ({ talkers, codebases }) => {
	const columns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			editable: false,
      renderCell: (params: GridRenderCellParams) => {
        const ignoreWords = new RegExp(/^(the|a)[^a-z]+/, 'i');
        const slug = slugify(params.value.replace(ignoreWords, ""), {lower: true});

				return (
          <NextLink href={{pathname: "details/[slug]", query: {slug}}}>{params.value}</NextLink>
				);
			}
		},
		{
			field: 'screencap',
			headerName: 'Screencap',
			width: 120,
			editable: false,
			sortable: false,
      renderCell: (params: GridRenderCellParams) => {
				return (
          <Image width={100} height={52} src={`/screencaps/${params.value}`} alt="" />
				);
			}
		},
		{
			field: 'codebase',
			headerName: 'Type',
			width: 110,
			editable: false,
      renderCell: (params: GridRenderCellParams) => {
        if (!params?.value?.length || !codebases.hasOwnProperty(params.value)) {
          return '';
        }

        const codebase = codebases[params.value];

        return (
          <Link href={codebase.repo}><abbr title={codebases.name}>{params.value}</abbr></Link>
        );
			}
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
			field: 'wayback',
			headerName: 'Website (archived)',
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
	];

	const rows = talkers.map((talker, id) => {
    if (talker?.website?.length && !talker?.wayback) {
      talker.wayback = `https://web.archive.org/web/*/${talker.website}`;
    }

		return {
      id,
			name: talker.name,
			codebase: talker?.codebase ?? '',
      screencap: talker?.screencaps?.length ? talker.screencaps[0] : 'placeholder.png',
      website: talker?.website ?? null,
      wayback: talker?.wayback ?? null
		}
	});

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        disableSelectionOnClick
      />
    </div>
  );
};

export default TalkerTable;
