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


  return (
      <div className="App">
        {/*<div>
            <BarChart
                labels={[
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                ]}
                label={[
                    "Users Gained","Users Lost", "Total Users",
                ]}
                datasets={[
                    [80000, 45677, 78888, 90000, 24300],
                    [18230, 23450, 15550, 45550, 22340],
                    [98230, 13450, 25550, 35550, 12340],
                ]}
                backgroundColor={[
                    'rgb(108 231 228)',
                    'rgb(255 99 132)',
                    'rgb(255 205 86)',
                ]}
                borderColor={[
                    'black',
                    'black',
                    'black',
                ]}
                borderWidth={[
                    2,
                    2,
                    2,
                ]}
                borderRadius={[
                    5,
                    5,
                    5,
                ]}
                borderSkipped={[
                    false,
                    false,
                    false,
                ]}

              title={'Users Gained and Lost'}
              colorLabel={'rgba(0,0,0,0.72)'}
              width={700}
              height={300}
              />

      </div>*/}

        {/*<div>
            <HorizontalBarChart
                labels={[
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                ]}
                label={[
                    "Users Gained","Users Lost", "Total Users",
                ]}
                datasets={[
                    [80000, 45677, 78888, 90000, 24300],
                    [18230, 23450, 15550, 45550, 22340],
                    [98230, 13450, 25550, 35550, 12340],
                ]}
                backgroundColor={[
                    'rgb(108 231 228)',
                    'rgb(255 99 132)',
                    'rgb(255 205 86)',
                ]}
                borderColor={[
                    'black',
                    'black',
                    'black',
                ]}
                borderWidth={[
                    2,
                    2,
                    2,
                ]}
                borderRadius={[
                    5,
                    5,
                    5,
                ]}
                borderSkipped={[
                    false,
                    false,
                    false,
                ]}



                title={'Users Gained and Lost'}

                width={700}
                height={400}
                positionLabel={'right'}

            />
        </div>*/}

        {/*<div>
            <StackedBarChart
                labels={[
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                ]}
                label={[
                    "Users Gained","Users Lost", "Total Users",
                ]}
                datasets={[
                    [80000, 45677, 78888, 90000, 24300],
                    [18230, 23450, 15550, 45550, 22340],
                    [98230, 13450, 25550, 35550, 12340],
                ]}
                backgroundColor={[
                    'rgb(108 231 228)',
                    'rgb(255 99 132)',
                    'rgb(255 205 86)',
                ]}
                borderColor={[
                    'black',
                    'black',
                    'black',
                ]}
                borderWidth={[
                    1,
                    1,
                    1,
                ]}
                borderRadius={[
                    0,
                    0,
                    0,
                ]}
                borderSkipped={[
                    false,
                    false,
                    false,
                ]}

                title={'Users Gained and Lost'}
                width={700}
                height={300}
              />

      </div>*/}

        {/*<div>
            <LineChart
                labels={[
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                ]}
                label={[
                    "Users Gained","Users Lost", "Total Users",
                ]}

                datasets={[
                    [80000, 45677, 78888, 90000, 24300],
                    [18230, 23450, 15550, 45550, 22340],
                    [98230, 13450, 25550, 35550, 12340],
                ]}

                backgroundColor={[
                    'rgba(182,108,231,0.34)',
                    'rgba(255,0,54,0.26)',
                    'rgba(255,205,86,0.37)',
                ]}

                borderColor={[
                    'rgba(0,0,0,0.82)',
                    'rgba(0,0,0,0.82)',
                    'rgba(255,0,0,0.82)',
                ]}

                borderWidth={[
                    2,
                    2,
                    2,
                ]}

                pointBorderColor={[
                    'rgba(0,0,0,0.82)',
                    'rgba(0,0,0,0.82)',
                    'rgba(0,0,0,0.82)',
                ]}

                pointBackgroundColor={[
                    'rgba(0,0,0,0.82)',
                    'rgba(0,0,0,0.82)',
                    'rgba(0,0,0,0.82)',
                ]}

                pointRadius={[
                    5,
                    5,
                    5,
                ]}

                fill={[
                    true,
                    true,
                    false,
                ]}

                stepped={[
                    false,
                    false,
                    false,
                ]}

                tension={[
                    0,
                    0,
                    0.4,
                ]}
                title={'Users Gained and Lost'}
                showanimation={false}
                width={700}
                height={400}

            />
        </div>*/}

        {/*<div>
            <MultiAxisLineChart

                labels={[
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                ]}
                label={[
                    "Users Gained","Users Lost", "Total Users",
                ]}
                datasets={[
                    [80000, 45677, 78888, 90000, 24300],
                    [18230, 23450, 15550, 45550, 22340],
                    [98230, 13450, 25550, 35550, 12340],
                ]}
                backgroundColor={[
                    'rgba(182,108,231,0.34)',
                    'rgba(255,0,54,0.26)',
                    'rgba(255,205,86,0.37)',
                ]}
                borderColor={[
                    'red',
                    'black',
                    'blue',
                ]}
                borderWidth={[
                    2,
                    2,
                    2,
                ]}
                tension={[
                    0.4,
                    0,
                    0
                ]}
                fill={[
                    false,
                    false,
                    false
                ]}

                pointBorderColor={[
                    'rgba(0,0,0,0.82)',
                    'rgba(255,0,54,0.26)',
                    'rgba(255,205,86,0.37)',
                ]}
                pointBackgroundColor={[
                    'rgba(0,0,0,0.82)',
                    'rgba(255,0,54,0.26)',
                    'rgba(255,205,86,0.37)',
                ]}
                pointRadius={[
                    5,
                    5,
                    5,
                ]}


                title={'Users Gained and Lost'}


                displayX1={true}
                width={700}
                height={400}

            />
        </div>*/}

        {/*<div>
            <BubbleChart
                labels={[
                    2016,
                    2017,
                    2018,
                    2019,
                    2020,
                ]}

                label={[
                    "Users Gained","Users Lost", "Total Users",
                ]}
                pointBackgroundColor={[
                    'rgba(182,108,231,0.34)',
                    'rgba(255,0,0,0.41)',
                    'rgba(255,205,86,0.37)',
                ]}

                pointBorderColor={[
                    'rgba(0,0,0,0.82)',
                    'rgba(0,0,0,0.82)',
                    'rgba(0,0,0,0.82)',
                ]}

                pointStyle={[
                    'rectRot',
                    'rectRounded',
                    'circle',
                ]}

                borderWidth={[
                    1,
                    1,
                    1,
                ]}

                title={'Users Gained and Lost'}
                datasets={[
                    [80000, 45677, 78888, 90000, 24300],
                    [18230, 23450, 15550, 45550, 22340],
                    [98230, 13450, 25550, 35550, 12340],
                ]}
                width={700}
                height={400}

            />
        </div>*/}

        {/*<div>
            <DoughnutChart
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
              borderWidth={0}
              hoverOffset={20}
              colorTitle={'black'}
              positionLabel={'bottom'}
              colorLabel={'rgba(0,0,0,0.61)'}
              />

      </div>*/}

        {/*<div>
              <PieChart
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
                  borderWidth={0}
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

          </div>*/}

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

        {/*  <div>
              <MultiSeriesPieChart
                  labels={[
                        "Serie A",
                        "Serie B",
                        "Serie C",
                        "Serie D",
                    ]}
                    backgroundColor={[
                        ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
                        ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
                        ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
                    ]}
                  datasets={[
                        [30, 45, 25, 56],
                        [20, 60, 15, 65],
                        [25, 30, 55, 70],
                    ]} />
          </div>*/}




      </div>
  );
}

export default App;
