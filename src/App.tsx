import './App.css'
import Header from './components/Header'
import ServicePreview from './components/ServicePreview'
import Widget from './components/Widget'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import Widgets from './components/Widgets'

function App() {
  return (
    <>
      <div className="container">
        <div className='ml-100'>
          <Header>
            <ServicePreview
              title={"Работа над ошибками"}
              description='Cмотрите на Яндексе и запоминайте'
              image="https://placehold.co/100x100"
            />
          </Header>
        </div>

        <SearchBar />

        <div className='ml-100'>
          <Banner image="https://placehold.co/800x200" />

          <Widgets>
            <Widget title="Погода">
              <div style={{ height: "150px", backgroundColor: "#eeeeee" }}></div>
            </Widget>
            <Widget title="Карта Германии">
              <div style={{ height: "100px", backgroundColor: "#eeeeee" }}></div>
            </Widget>
            <Widget title="Посещаемое">
              <div style={{ height: "200px", backgroundColor: "#eeeeee" }}></div>
            </Widget>
            <Widget title="Телепрограмма">
              <div style={{ height: "75px", backgroundColor: "#eeeeee" }}></div>
            </Widget>
            <Widget title="Эфир">
              <div style={{ height: "75px", backgroundColor: "#eeeeee" }}></div>
            </Widget>
          </Widgets>
        </div>
      </div>
    </>
  )
}

export default App
