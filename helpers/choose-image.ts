function randomChoose() {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/creativate.appspot.com/o/banner%2FPRIMER%20PORTADA.png?alt=media&token=f4003377-e662-4708-ba63-eaf87ed2e920',
    'https://firebasestorage.googleapis.com/v0/b/creativate.appspot.com/o/banner%2FSEGUNDA%20PORTADA.png?alt=media&token=45282444-8556-44bc-91a7-90f0e2ebcd03',
    'https://firebasestorage.googleapis.com/v0/b/creativate.appspot.com/o/banner%2FTERCERA%20PORTADA.png?alt=media&token=45817e2b-b7aa-42b7-9dce-ed54fb8a3457'
  ]
  const index = Math.floor(Math.random() * images.length)
  return images[index]
}

export default randomChoose
