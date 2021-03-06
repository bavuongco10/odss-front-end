import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CompareIcon from '@material-ui/icons/Compare';
import { times, get } from 'lodash';
import { useAsync } from 'react-use';

import { API_HOST } from '../../constants/main.constants';

import DenseRow from './DenseRow';

const useStyles = makeStyles(theme => ({
  tableTitle: {
    display: 'flex',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 12,
  },
  table: {
    minWidth: 256,
  },
  actionButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionButton: {
    margin: theme.spacing(1),
  },
}));

const COLORS = ['#ECA536', '#F5ED9C', '#0CB2D3', '#0B5FD3'];

const DenseTable = ({ setAllAspects }) => {
  const classes = useStyles();

  const state = useAsync(async () => {
    const defaultUrl = `${API_HOST}/api/cities`;
    const response = await fetch(defaultUrl);
    return response.json();
  }, []);
  const cities = get(state, 'value.items', []);
  return (
    <>
      <form className={classes.root} autoComplete="off">
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Hotel</TableCell>
              <TableCell>Ranking (Ri)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {times(4, index => (
              <DenseRow
                rowId={index}
                key={index}
                cities={cities}
                setAllAspects={setAllAspects}
                color={COLORS[index]}
              />
            ))}
          </TableBody>
        </Table>
      </form>
    </>
  );
};
export default DenseTable;
