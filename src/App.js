import BarChart from './components/BarChart';
import HorizontalBarChart from "./components/HorizontalBarChart";
import LineChart from "./components/LineChart";
import MultiAxisLineChart from "./components/MultiAxisLineChart";
import StackedBarChart from "./components/StackedBarChart";
import BubbleChart from "./components/BubbleChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import PolarCenteredChard from "./components/PolarCenteredChard";
import RadarChart from "./components/RadarChart";
import MultiSeriesPieChart from "./components/MultiSeriesPieChart";



import {UserData} from "./data/Data";
import {additionalDatasets} from "./data/additionalDatasets";










function App() {

    const data = {
        labels: ["Serie A", "Serie B", "Serie C", "Serie D"],
        datasets: [
            {
                data: [30, 45, 25, 56], // Valores para la Serie A
                backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
            },
            {
                data: [20, 60, 15, 65], // Valores para la Serie B
                backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
            },
            {
                data: [10, 30, 55, 70], // Valores para la Serie C
                backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
            }
        ],
    };


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

      </div>

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
                  labels={[
                      2016,
                      2017,
                      2018,
                      2019,
                      2020,
                  ]}

                  backgroundColor={[
                      'rgba(255,99,132,0.73)',
                      'rgba(54,162,235,0.73)',
                      'rgba(255,206,86,0.73)',
                      'rgba(75,192,192,0.73)',
                      'rgba(153,102,255,0.73)',
                  ]}

                  title={'Users Gained'}
                  datasets={[
                      [80000, 45677, 78888, 90000, 24300]
                  ]}
                  borderColor={'black'}
                  borderWidth={1}
                  hoverOffset={5    }
                  colorTitle={'black'}
                  positionLabel={'bottom'}
                  colorLabel={'rgba(0,0,0,0.61)'}
              />

          </div>
*/}

        {/*<div>
              <RadarChart
                  labels={[
                      2016,
                      2017,
                      2018,
                      2019,
                      2020,
                  ]}

                  label={[
                      "Users Gained","Users Lost",
                  ]}

                  backgroundColor={[
                        'rgba(108,231,228,0.2)',
                        'rgba(255,99,132,0.2)',
                        'rgba(255,205,86,0.2)',
                    ]}

                    borderColor={[
                        'rgb(108,231,228)',
                        'rgb(255,99,132)',
                        'rgb(255,205,86)',
                    ]}

                  borderWidth={[
                        2,
                        2,
                        2,
                  ]}

                  title={'Users Gained'}
                  datasets={[
                      [80000, 45677, 78888, 90000, 24300],
                      [18230, 23450, 15550, 45550, 22340],
                  ]}
                  colorTitle={'black'}
                  colorLabel={'rgba(0,0,0,0.61)'}
              />

          </div>*/}

        {/*<div>
              <MultiSeriesPieChart data={data} />
          </div>*/}




      </div>
  );
}

export default App;
