import IncomeImg from '../../assets/images/income.png'

export default function Income() {
  return (
    <section className="income-container">
      <h1>Income</h1>
      <p>Last <span>30 days</span></p>
      <h2>$2,260</h2>
      <div className='income-img-contianer'>
        <img src={IncomeImg} alt='income stats image' />
      </div>
      <div></div>
    </section>
  )
}