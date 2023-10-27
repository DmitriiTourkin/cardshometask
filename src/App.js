import './App.css';


const cards_data = [
  {id: 1, imgUrl: "https://u.netology.ru/backend/uploads/page_assets/images/file/57908/graphic_green_img_instrument.svg", cardTitle: "Дизайн и UX", text: "Курсы по современному дизайну разных направлений: графический дизайн, UX/UI, дизайн среды, иллюстрация, 3D-моделирование и анимация, моушн и геймдизайн.", buttonUrl: "https://netology.ru/design"},
  {id: 2, imgUrl: "https://u.netology.ru/backend/uploads/page_assets/images/file/49327/illustration__green_people__whiteskin_write_1.svg", cardTitle: "Бизнес и управление", text: "Курсы по менеджменту и управлению позволят получить новую профессию с нуля, расширить экспертизу или освоить отдельные инструменты для работы.", buttonUrl: "https://netology.ru/management"},
  {id: 3, imgUrl: "https://netology.ru/_next/static/media/header.9152f8b6.png", cardTitle: "Финансы и инвестиции", text: "Курсы по финансовому менеджменту, инвестициям, трейдингу и аналитике.", buttonUrl: "https://netology.ru/finance"},
  {id: 4, imgUrl: "https://u.netology.ngcdn.ru/backend/uploads/page_assets/images/file/40754/Frame_1.svg", cardTitle: "Аналитика", text: "Курсы по аналитике, Data Science, машинному обучению, Excel, SQL, Python и Power BI.", buttonUrl: "https://netology.ru/data-science"}
]

function CardsBlock({children}) {
    return (
        <div className="flex-container">
            {children}
        </div>
    )
}
function CardsList({cards}) {
    return cards.map(cardData => <Card key={cardData.id} data = {cardData} kind="flex-item"/>) //?
}

function Card(props) {
  return (
      <div className={props.kind}>
          <div className="card card-body">
              <img src={props.data.imgUrl} className="card-img-top"/>
              <div className="card-info">
              <h5 className="card-title">{props.data.cardTitle}</h5>
              <p className="card-text">{props.data.text}</p>
              <a href={props.data.buttonUrl}>
                <button className="btn btn-dark more-info-button">Подробнее</button>
              </a>
            </div>
          </div>
      </div>
  )
}

function App() {
    return (
        <CardsBlock>
            <CardsList cards={cards_data}/>
        </CardsBlock>
    )
}
export default App;
