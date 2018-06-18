import moment from 'moment'

export const dateTimeConvert = (string) => {
  const m = moment(string)
  return m.format('YYYY년 MM월 DD일 a hh시 mm분')
}

export const dateConvert = (string) => {
  const m = moment(string)
  return m.format('YYYY년 MM월 DD일')
}

