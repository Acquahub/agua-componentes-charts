import BarChart from './components/BarChart';
import HorizontalBarChart from "./components/HorizontalBarChart";
import LineChart from "./components/LineChart";
import MultiAxisLineChart from "./components/MultiAxisLineChart";
import StackedBarChart from "./components/StackedBarChart";
import BubbleChart from "./components/BubbleChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import PolarCenteredChard from "./components/PolarCenteredChard";



import {UserData} from "./data/Data";
import {additionalDatasets} from "./data/additionalDatasets";
import RadarChart from "./components/RadarChart";









function App() {


  return (
      <div className="App">
        {/*<div>
            <BarChart
              data={{labels: UserData.map((element) => element.year)}}
              title={'Users Gained and Lost'}
              datasets={[
                  {
                      label: 'Users Gained',
                        data: UserData.map((element) => element.userGain),
                        backgroundColor : 'rgb(108 231 228)',
                        borderColor : 'black',
                        borderWidth : 2,
                        borderRadius : 5,
                        borderSkipped : false,

                  },
                  {
                      label: 'Users Lost',
                      data: UserData.map((element) => element.userLost),
                      backgroundColor: 'rgb(255 99 132)',
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 5,
                        borderSkipped: false,
                  },
                  {
                      label: 'Total Users',
                      data: additionalDatasets.map((element) => element.userTotal),
                        backgroundColor: 'rgb(255 205 86)',
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 5,
                  },
              ]}
              width={700}
              height={300}
              />

      </div>*/}

        {/*<div>
            <HorizontalBarChart
                data={{labels: UserData.map((element) => element.year)}}
                title={'Users Gained and Lost'}
                datasets={[
                    {
                        label: 'Users Gained',
                        data: UserData.map((element) => element.userGain),
                        backgroundColor : 'rgb(108 231 228)',
                        borderColor : 'black',
                        borderWidth : 2,
                        borderRadius : 5,
                        borderSkipped : false,

                    },
                    {
                        label: 'Users Lost',
                        data: UserData.map((element) => element.userLost),
                        backgroundColor: 'rgb(255 99 132)',
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 5,
                        borderSkipped: false,
                    },
                    {
                        label: 'Total Users',
                        data: additionalDatasets.map((element) => element.userTotal),
                        backgroundColor: 'rgb(255 205 86)',
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 5,
                    },
                ]}
                width={800}
                height={400}
                positionLabel={'right'}

            />
        </div>*/}

        {/*<div>
            <StackedBarChart
              data={{labels: UserData.map((element) => element.year)}}
              title={'Users Gained and Lost'}
              datasets={[
                  {
                      label: 'Users Gained',
                        data: UserData.map((element) => element.userGain),
                        backgroundColor : 'rgba(108,231,228,0.58)',
                        borderColor : 'black',
                        borderWidth : 1,
                        borderRadius : 0,
                        borderSkipped : false,

                  },
                  {
                      label: 'Users Lost',
                      data: UserData.map((element) => element.userLost),
                      backgroundColor: 'rgba(255,99,132,0.6)',
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 0,
                        borderSkipped: false,
                  },
                  {
                      label: 'Total Users',
                      data: additionalDatasets.map((element) => element.userTotal),
                        backgroundColor: 'rgba(255,205,86,0.6)',
                        borderColor: 'black',
                        borderWidth: 1,
                        borderRadius: 0,
                  },
              ]}
                width={700}
                height={400}
              />

      </div>*/}

        {/*<div>
            <LineChart
                data={{labels: UserData.map((element) => element.year)}}
                title={'Users Gained and Lost'}
                datasets={[
                    {
                        label: 'Users Gained',
                        data: UserData.map((element) => element.userGain),
                        backgroundColor : 'rgba(182,108,231,0.34)',
                        borderColor : 'black',
                        borderWidth : 2,
                        fill: true,
                        pointBorderColor : 'rgba(0,0,0,0.82)',
                        pointBackgroundColor : 'rgba(0,0,0,0.51)',
                        pointRadius : 5,
                        stepped: false,


                    },
                    {
                        label: 'Users Lost',
                        data: UserData.map((element) => element.userLost),
                        backgroundColor: 'rgba(255,0,54,0.26)',
                        borderColor: 'black',
                        borderWidth: 2,
                        fill: true,
                    },
                    {
                        label: 'Total Users',
                        data: additionalDatasets.map((element) => element.userTotal),
                        backgroundColor: 'rgba(255,205,86,0.37)',
                        borderColor: 'red',
                        borderWidth: 2,
                        tension: 0.4,
                    },

                ]}
                showanimation={false}
                width={700}
                height={400}

            />
        </div>*/}

        {/*<div>
            <MultiAxisLineChart
                data={{labels: UserData.map((element) => element.year)}}
                title={'Users Gained and Lost'}
                datasets={[
                    {
                        label: 'Users Gained',
                        data: UserData.map((element) => element.userGain),
                        backgroundColor : 'rgba(182,108,231,0.34)',
                        borderColor : 'red',
                        borderWidth : 2,
                        tension: 0.4,
                        fill: false,
                        pointBorderColor : 'rgba(0,0,0,0.82)',
                        pointBackgroundColor : 'rgba(0,0,0,0.51)',
                        pointRadius : 5,
                        yAxisID: 'y',


                    },
                    {
                        label: 'Users Lost',
                        data: UserData.map((element) => element.userLost),
                        backgroundColor: 'rgba(255,0,54,0.26)',
                        borderColor: 'black',
                        borderWidth: 2,
                        fill: false,
                        yAxisID: 'y1',
                    },
                    {
                        label: 'Total Users',
                        data: additionalDatasets.map((element) => element.userTotal),
                        backgroundColor: 'rgba(255,205,86,0.37)',
                        borderColor: 'blue',
                        borderWidth: 2,
                    },

                ]}

                displayY1={true}
                width={700}
                height={400}

            />
        </div>*/}

        {/*<div>
            <BubbleChart
                data={{labels: UserData.map((element) => element.year)}}
                title={'Users Gained and Lost'}
                datasets={[
                    {
                        label: 'Users Gained',
                        data: UserData.map((element) => element.userGain),
                        borderWidth : 1,
                        pointBorderColor : 'rgba(0,0,0,0.82)',
                        pointBackgroundColor : 'rgba(182,108,231,0.34)',
                        pointRadius : 10,
                        pointStyle : 'rectRot',


                    },
                    {
                        label: 'Users Lost',
                        data: UserData.map((element) => element.userLost),
                        borderWidth: 1,
                        pointBorderColor: 'rgba(0,0,0,0.82)',
                        pointBackgroundColor: 'rgba(255,0,0,0.41)',
                        pointRadius: 10,
                        pointStyle: 'rectRounded',
                    },
                    {
                        label: 'Total Users',
                        data: additionalDatasets.map((element) => element.userTotal),
                        borderWidth: 1,
                        pointBorderColor: 'rgba(0,0,0,0.82)',
                        pointBackgroundColor: 'rgba(255,205,86,0.37)',
                        pointRadius: 10,
                        pointStyle: 'circle',
                    },

                ]}
                width={700}
                height={400}

            />
        </div>*/}

        {/*<div>
            <DoughnutChart
              data={{labels: UserData.map((element) => element.year)}}
              title={'Users Gained'}
              datasets={[
                  {
                      label: 'Users Gained',
                        data: UserData.map((element) => element.userGain),
                        backgroundColor : UserData.map((element) => element.backgroundColor),
                  },
              ]}
              borderColor={'black'}
              borderWidth={0}
              hoverOffset={20}
              colorTitle={'black'}
              positionLabel={'bottom'}
              colorLabel={'rgba(0,0,0,0.61)'}
              />

      </div>*/}

        {/*<div>
              <PieChart
                  data={{labels: UserData.map((element) => element.year)}}
                  title={'Users Gained'}
                  datasets={[
                      {
                          label: 'Users Gained',
                          data: UserData.map((element) => element.userGain),
                          backgroundColor : UserData.map((element) => element.backgroundColor),
                      },
                  ]}
                  borderColor={'black'}
                  borderWidth={2}
                  borderColors={'black'}
                  hoverOffset={20}
                  colorTitle={'black'}
                  positionLabel={'bottom'}
                  colorLabel={'rgba(0,0,0,0.61)'}
              />

          </div>*/}

        {/*<div>
              <PolarCenteredChard
                  data={{labels: UserData.map((element) => element.year)}}
                  title={'Users Gained'}
                  datasets={[
                      {
                          label: 'Users Gained',
                          data: UserData.map((element) => element.userGain),
                          backgroundColor : UserData.map((element) => element.backgroundColor),
                      },
                  ]}
                  borderColor={'black'}
                  borderWidth={0}
                  hoverOffset={5    }
                  colorTitle={'black'}
                  positionLabel={'bottom'}
                  colorLabel={'rgba(0,0,0,0.61)'}
              />

          </div>*/}

        <div>
              <RadarChart
                  data={{labels: UserData.map((element) => element.year)}}
                  title={'Users Gained'}
                  datasets={[
                      {
                          label: 'Users Gained',
                          data: UserData.map((element) => element.userGain),
                          backgroundColor : 'rgba(108,231,228,0.57)',
                            borderColor : 'rgb(108,231,228)',
                          borderWidth : 2,
                      },
                      {
                          label: 'Users Lost',
                          data: UserData.map((element) => element.userLost),
                          backgroundColor: 'rgba(255,99,132,0.57)',
                            borderColor: 'rgb(255,99,132)',
                          borderWidth: 2,

                      },
                      {
                          label: 'Total Users',
                          data: additionalDatasets.map((element) => element.userTotal),
                          backgroundColor: 'rgba(255,205,86,0.6)',
                          borderColor: 'rgb(255,205,86)',
                          borderWidth: 2,
                      },
                  ]}
                  colorTitle={'black'}
                  colorLabel={'rgba(0,0,0,0.61)'}
              />

          </div>




      </div>
  );
}

export default App;
