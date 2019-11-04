import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { values } from 'lodash';

import Title from '../../components/Title/Title.component';
import Widget from '../../components/Widget/Widget.component';

import ReRadarChart from './ReRadarChart';
import DenseTable from './DenseTable';
import ProvincesTile from './ProvincesTile.container';
import HotelsTile from './HotelsTile.container';
import RecordsTile from './RecordsTile.container';

const Dashboard = () => {
  const [allAspects, setAllAspects] = useState({
    allAspects: {},
  });
  const radarData = values(allAspects.allAspects) || [];
  return (
    <>
      <Title>Dashboard</Title>
      <Grid container spacing={4}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget title="Collected Provinces" upperTitle disableWidgetMenu>
            <ProvincesTile />
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget title="Collected Hotels" upperTitle disableWidgetMenu>
            <HotelsTile />
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <RecordsTile />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Widget title="Compare Hotels" upperTitle disableWidgetMenu>
            <DenseTable setAllAspects={setAllAspects} />
          </Widget>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Widget title="Aspects Radar chart" upperTitle disableWidgetMenu>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <ReRadarChart data={radarData} />
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
