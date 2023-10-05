import BarChart from './components/BarChart';
import HorizontalBarChart from "./components/HorizontalBarChart";



import {UserData} from "./data/Data";
import {additionalDatasets} from "./data/additionalDatasets";


function App() {


  return (
      <div className="App">
        <div>
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






      </div>
  );
}

export default App;
