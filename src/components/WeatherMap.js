import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import Form from 'react-bootstrap/Form';

function Map(props) {
  const mapOptions = {
    chart: {
      map: "countries/lk/lk-all"
    },
    title: {
      text: ""
    },
    credits: {
      enabled: false
    },
    mapNavigation: {
      enabled: false
    },
    tooltip: {
      headerFormat: "",
      pointFormat: "{point.name}"
    },
    series: [
      {
        name: "Basemap",
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false,
        hover: {
          color: "#BADA55"
        },
        dataLabels: {
          enabled: true
        }
      },
      {
        type: "mapbubble",
        name: "Locations",
        color: "#4169E1",
        data: [],
        cursor: "pointer"
      }
    ]
  };

  return <HighchartsReact highcharts={Highcharts} options={mapOptions} />;
  
 // return(
    <div className="form-warpper">
        <Form>
           
           



           
           


        </Form>
        
    </div>
 //   );
}

export default Map;
