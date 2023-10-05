import BarChart from './components/BarChart';
import HorizontalBarChart from "./components/HorizontalBarChart";
import LineChart from "./components/LineChart";
import MultiAxisLineChart from "./components/MultiAxisLineChart";



import {UserData} from "./data/Data";
import {additionalDatasets} from "./data/additionalDatasets";




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

      </div>
  );
}

export default App;
