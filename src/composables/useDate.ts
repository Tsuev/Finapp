export function getDate(): { month: String, year: Number } {
  const month: String[] = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]


  
  
  return {
    month: month[new Date().getMonth()],
    year: new Date().getFullYear()
  }
}