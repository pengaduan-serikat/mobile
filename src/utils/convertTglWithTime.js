function convertTglWithTime (tgl) {
  tgl = `${tgl} `
  const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
  const split = tgl.split(' ')
  const tanggal = split[0].split('-')
  const time = split[1].split(':')
  const day = tanggal[2]
  tanggal[2] = tanggal[0]
  tanggal[0] = day
  tanggal[1] = bulan[Number(tanggal[1]-1)]
  time.splice(2,1)

  return `${tanggal.join(' ')} ${time.join(':')}`
}

export default convertTglWithTime